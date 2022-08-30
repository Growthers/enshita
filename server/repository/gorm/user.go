package gorm

import (
	"github.com/growthers/enshita/server/model/entity"
)

func (repo *Repository) CreateUser(userID, email, userName, password string, role int) (entity.User, error) {
	user := &entity.User{
		Email:    email,
		Name:     userName,
		Password: password,
		Role:     role,
	}

	if len(password) >= 4 {
		// ToDo: パスワードのハッシュ
	}

	// レコード作成
	result := repo.db.Create(&user)

	if result.Error != nil {
		return entity.User{}, result.Error
	}

	return *user, nil
}
