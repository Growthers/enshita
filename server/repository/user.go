package repository

import "github.com/growthers/enshita/server/model/domain"

type UserRepository interface {
	// CreateUser ユーザーを作成
	CreateUser(userID, email, userName, password string, role int) (*domain.User, error)
}
