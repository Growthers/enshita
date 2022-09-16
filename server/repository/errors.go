package repository

import "errors"

var (
	// ArgIDNilErr 引数に与えられたIDがnil
	ArgIDNilErr = errors.New("id is nil")
	// NotFoundErr 見つかりませんでした
	NotFoundErr = errors.New("not found")
)

// ArgErr エラー
type ArgErr struct {
	ErrType string
	Message string
}

// Error エラーメッセージを返す
func (argErr *ArgErr) Error() string {
	return argErr.Message
}

// RaiseError エラーを発生させる
func RaiseError(errType, message string) *ArgErr {
	return &ArgErr{
		ErrType: errType,
		Message: message,
	}
}
