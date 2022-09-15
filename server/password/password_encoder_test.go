package password

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

// testify/assertのgoのバージョンが古いせいでIDEのエラーが出ますが、動作に問題ないです。

func TestIsMatchPassword(t *testing.T) {
	password := "HELLO-WORLD!"
	matcher := NewArgon2PasswordEncoder()
	encodedPassword, err := matcher.EncodePassword(password)
	if err != nil {
		assert.Error(t, err, "パスワードハッシュに失敗")
	}

	var result bool
	result = matcher.IsMatchPassword(password, encodedPassword)

	assert.Equal(t, true, result, "パスワードチェック: 検証成功のとき")

	result = matcher.IsMatchPassword(password, "44GC44GE44GG44GI44GK")
	assert.Equal(t, false, result, "パスワードチェック: 検証失敗のとき")
}
