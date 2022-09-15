package password

import (
	"crypto/rand"
	"crypto/subtle"
	"encoding/hex"
	"errors"
	"fmt"
	"math/big"
	"strings"
)

/*
	ハッシュされたパスワードの仕様

	<hash algorithm>.<hashed Password as hex string>.<salt as hex string>
*/

type EncodedPassword string
type Encoder interface {
	EncodePassword(rawPassword string) (EncodedPassword, error)
	IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool
}

type Argon2PasswordEncoder struct{}

func NewArgon2PasswordEncoder() Argon2PasswordEncoder {
	return Argon2PasswordEncoder{}
}

func (e *Argon2PasswordEncoder) EncodePassword(rawPassword string) (EncodedPassword, error) {
	random, err := rand.Int(rand.Reader, big.NewInt(1000))
	if err != nil {
		return "", err
	}

	salt := fmt.Sprintf("%x[0]", random)
	hashedPassword := createHashedPassword(rawPassword, salt)
	// ハッシュ済みパスワードをhexにエンコード
	encodedHexedPassword := hex.EncodeToString(hashedPassword)
	// ハッシュアルゴリズムとハッシュ済みパスワードとソルトを結合
	// ハッシュアルゴリズムを変更した場合に対応できるようにハッシュアルゴリズムを付けています。
	//<hash algorithm>.<hashed Password as hex string>.<salt as hex string>
	combinatedAlgoAndHashAndPassword := fmt.Sprintf("%s.%s.%s", hashAlgorithm, encodedHexedPassword, salt)

	return EncodedPassword(combinatedAlgoAndHashAndPassword), nil
}

func (e *Argon2PasswordEncoder) IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool {
	passwordPart, salt, err := decodeHash(encodedPassword) // base64 decodeとか
	if err != nil {
		return false
	}

	otherHash := createHashedPassword(rawPassword, salt) // 比較対象のEncodedPasswordと同じ条件で入力されたパスワードをhashする

	return subtle.ConstantTimeCompare([]byte(passwordPart), otherHash) == 1 // timings attack防止
}

// decodeHash ハッシュ済みパスワード部、ソルトを返します
func decodeHash(encodedPassword EncodedPassword) (string, string, error) {
	split := strings.Split(string(encodedPassword), ".")
	if len(split) != 3 {
		return "", "", errors.New("input is invalid format")
	}
	encodedPasswordPart, salt := split[1], split[2]
	decodedPasswordPart, err := hex.DecodeString(encodedPasswordPart)
	if err != nil {
		return "", "", err
	}

	return string(decodedPasswordPart), salt, nil
}
