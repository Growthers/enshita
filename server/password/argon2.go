package password

import "golang.org/x/crypto/argon2"

const hashAlgorithm = "Argon2"

// createHashedPassword ハッシュ済みパスワードを返します
func createHashedPassword(rawPassword string, salt string) []byte {
	return argon2.IDKey([]byte(rawPassword), []byte(salt), 2, 20, 20, 20)
}
