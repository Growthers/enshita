package repository

import "github.com/growthers/enshita/server/model/entity"

type UserRepository interface {
	// CreateUser ユーザーを作成
	CreateUser(userID, email, userName, password string, role int) (entity.User, error)
}
