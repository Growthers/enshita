package repository

import "github.com/growthers/enshita/server/model/domain"

type UserRepository interface {
	// CreateAdmin 管理者(Admin)を作成
	CreateAdmin(userID, email, userName, password string) (*domain.User, error)
	// CreateOperator 運営アカウント(Operator)を作成
	CreateOperator(userID, email, userName, password string) (*domain.User, error)
}
