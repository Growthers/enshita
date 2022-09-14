package util

import (
	"crypto/rand"
	"crypto/subtle"
	"encoding/hex"
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
	HashAlgorithm = "Argon2"
)

func (e *Argon2PasswordEncoder) EncodePassword(rawPassword string) (EncodedPassword, error) {
	random, err := rand.Int(rand.Reader, big.NewInt(1000))
	if err != nil {
		return "", err
	}

	salt := fmt.Sprintf("%x[0]", random)
	hashedPassword := argon2.IDKey([]byte(rawPassword), []byte(salt), 2, 20, 20, 20)

	// ハッシュ済みパスワードをhexにエンコード
	encodedHexedPassword := hex.EncodeToString(hashedPassword)
	// ハッシュアルゴリズムとハッシュ済みパスワードとソルトを結合
	// ハッシュアルゴリズムを変更した場合に対応できるようにハッシュアルゴリズムを付けています。
	//<hash algorithm>.<hashed Password as hex string>.<salt as hex string>
	combinatedAlgoAndHashAndPassword := fmt.Sprintf("%s.%s.%s", HashAlgorithm, encodedHexedPassword, salt)

	return EncodedPassword(combinatedAlgoAndHashAndPassword), nil
}

func (e *Argon2PasswordEncoder) IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool {
	passwordPart, salt, err := decodeHash(encodedPassword) // base64 decodeとか
	if err != nil {
		return false
	}

	otherHash := argon2.IDKey([]byte(rawPassword), []byte(salt), 2, 20, 20, 20) // 比較対象のEncodedPasswordと同じ条件で入力されたパスワードをhashする

	return subtle.ConstantTimeCompare([]byte(passwordPart), otherHash) == 1 // timings attack防止
}

// decodeHash ハッシュ済みパスワード部、ソルトを返します
func decodeHash(encodedPassword EncodedPassword) (string, string, error) {
	splited := strings.Split(string(encodedPassword), ".")
	if len(splited) != 3 {
		return "", "", errors.New("input is invalid format")
	}
	encodedPasswordPart, salt := splited[1], splited[2]
	decodedPasswordPart, err := hex.DecodeString(encodedPasswordPart)
	if err != nil {
		return "", "", err
	}

	return string(decodedPasswordPart), salt, nil
}
