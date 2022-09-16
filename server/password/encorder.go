package password

/*
	ハッシュされたパスワードの仕様

	<hash algorithm>.<hashed Password as hex string>.<salt as hex string>
*/

type EncodedPassword string
type Encoder interface {
	EncodePassword(rawPassword string) (EncodedPassword, error)
	IsMatchPassword(rawPassword string, encodedPassword EncodedPassword) bool
}
