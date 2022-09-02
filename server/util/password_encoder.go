package util

import (
	"crypto/rand"
	"crypto/subtle"
	"encoding/base64"
	"fmt"
	"golang.org/x/crypto/argon2"
	"math/big"
	"strings"
)

/*
	ハッシュされたパスワードの仕様

	<ハッシュ済みパスワード(Base64)>.<ソルト(ランダム文字列)>
	↑全体をもう一度Base64エンコードする
*/

type EncodedPassword string
type PasswordEncoder interface {
	EncodePassword(rawPassword string) EncodedPassword
	IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool
}

type Argon2PasswordEncoder struct{}

func (e *Argon2PasswordEncoder) EncodePassword(rawPassword string) EncodedPassword {
	random, err := rand.Int(rand.Reader, big.NewInt(1000))
	if err != nil {
		return ""
	}

	salt := fmt.Sprintf("%x[0]", random)
	//salt := ... // saltをランダム生成
	return EncodedPassword(argon2.IDKey([]byte(rawPassword), []byte(salt), 0, 20, 20, 20))
}

func (e *Argon2PasswordEncoder) IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool {
	_, salt, hash, err := decodeHash(encodedPassword) // base64 decodeとか
	if err != nil {
		return false
	}

	otherHash := argon2.IDKey([]byte(rawPassword), []byte(salt), 0, 20, 20, 10) // 比較対象のEncodedPasswordと同じ条件で入力されたパスワードをhashする
	return subtle.ConstantTimeCompare([]byte(hash), otherHash) == 1             // timings attack防止
}

func decodeHash(encodedPassword EncodedPassword) (string, string, string, error) {
	var decodedPassword, encodedPasswordPart, decodedPasswordPart, salt []byte
	// エンコードされたパスワード全体をデコード Base64{ Base64[<Password>].<Salt>} -> Base64{<Password>}.<Salt>
	_, err := base64.StdEncoding.Decode(decodedPassword, []byte(encodedPassword))
	if err != nil {
		return "", "", "", err
	}

	splited := strings.Split(string(decodedPassword), ".")
	decodedPasswordPart, salt = []byte(splited[0]), []byte(splited[1])

	// エンコードされたパスワード部をデコード Base64{<Password>}.<Salt> -> <Password>
	_, err = base64.StdEncoding.Decode(decodedPasswordPart, encodedPasswordPart)
	if err != nil {
		return "", "", "", err
	}

	return string(decodedPasswordPart), string(salt), string(decodedPassword), nil
}
