package util

import (
	"crypto/rand"
	"crypto/subtle"
	"encoding/base64"
	"errors"
	"fmt"
	"golang.org/x/crypto/argon2"
	"math/big"
	"strings"
)

/*
	ハッシュされたパスワードの仕様

	<ハッシュアルゴリズム>.<ハッシュ済みパスワード(Base64)>.<ソルト(ランダム文字列)>

*/

type EncodedPassword string
type PasswordEncoder interface {
	EncodePassword(rawPassword string) (EncodedPassword, error)
	IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool
}

type Argon2PasswordEncoder struct{}

func NewArgon2PasswordEncoder() Argon2PasswordEncoder {
	return Argon2PasswordEncoder{}
}

const (
	HashArgorithm = "Argon2"
)

func (e *Argon2PasswordEncoder) EncodePassword(rawPassword string) (EncodedPassword, error) {
	random, err := rand.Int(rand.Reader, big.NewInt(1000))
	if err != nil {
		return "", err
	}

	salt := fmt.Sprintf("%x[0]", random)
	hashed := argon2.IDKey([]byte(rawPassword), []byte(salt), 2, 20, 20, 20)

	// ハッシュ済みパスワードをエンコード
	// NOTICE: Base64エンコーダに与えるスライスはエンコード後のスライスのサイズと揃える
	encodedHashedPassword := make([]byte, base64.StdEncoding.EncodedLen(len(hashed)))
	base64.StdEncoding.Encode(encodedHashedPassword, hashed)

	// ハッシュ済みパスワードとソルトを結合
	combinatedHashAndPassword := []byte(fmt.Sprintf("%s.%s.%s", HashArgorithm, encodedHashedPassword, salt))

	return EncodedPassword(combinatedHashAndPassword), nil
}

func (e *Argon2PasswordEncoder) IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool {
	passwordPart, salt, _, err := decodeHash(encodedPassword) // base64 decodeとか
	if err != nil {
		return false
	}

	otherHash := argon2.IDKey([]byte(rawPassword), []byte(salt), 2, 20, 20, 20) // 比較対象のEncodedPasswordと同じ条件で入力されたパスワードをhashする

	return subtle.ConstantTimeCompare([]byte(passwordPart), otherHash) == 1 // timings attack防止
}

// decodeHash ハッシュ済みパスワード部、ソルト、全体のデコード済みデータを返します Base64の文字列でないものを与えるとpanicします
func decodeHash(encodedPassword EncodedPassword) (string, string, string, error) {
	var salt []byte

	// エンコードされたパスワード全体をデコード Base64{ Base64[<Password>].<Salt>} -> Base64{<Password>}.<Salt>
	decodedPassword := make([]byte, base64.StdEncoding.DecodedLen(len(encodedPassword)))
	_, err := base64.StdEncoding.Decode(decodedPassword, []byte(encodedPassword))
	if err != nil {
		return "", "", "", err
	}

	splited := strings.Split(string(decodedPassword), ".")
	if len(splited) != 2 {
		return "", "", "", errors.New("input is invalid format")
	}

	encodedPasswordPart, salt := []byte(splited[0]), []byte(splited[1])[:len(splited[1])-1]

	// エンコードされたパスワード部をデコード Base64{<Password>}.<Salt> -> <Password>
	// デコードするときに1byteぶん不要なデータ(0x00,0x00)が含まれてしまうので-1する
	decodedPasswordPart := make([]byte,
		base64.StdEncoding.DecodedLen(len(encodedPasswordPart))-1,
	)
	_, err = base64.StdEncoding.Decode(decodedPasswordPart, encodedPasswordPart)
	if err != nil {
		return "", "", "", err
	}

	return string(decodedPasswordPart), string(salt), string(decodedPassword), nil
}
