package gorm

import (
	"github.com/google/uuid"
	"github.com/growthers/enshita/server/model/domain"
)

// CreateAdmin 管理者(Admin)を作成
func (repo *Repository) CreateAdmin(userID, email, userName, password string) (*domain.User, error) {
	user := &domain.User{
		ID:       userID,
		Email:    email,
		Name:     userName,
		Password: password,
		Role:     domain.Admin,
	}

	encodedPassword, err := repo.passwordEncoder.EncodePassword(password)
	if err != nil {
		return nil, err
	}

	user.Password = string(encodedPassword)

	// ID生成
	u, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	user.ID = u.String()

	// レコード作成
	result := repo.db.Create(&user)

	if result.Error != nil {
		return nil, result.Error
	}

	return user, nil
}

// CreateOperator 運営アカウント(Operator)を作成
func (repo *Repository) CreateOperator(userID, email, userName, password string) (*domain.User, error) {
	user := &domain.User{
		ID:       userID,
		Email:    email,
		Name:     userName,
		Password: password,
		Role:     domain.Operator,
	}

	encodedPassword, err := repo.passwordEncoder.EncodePassword(password)
	if err != nil {
		return nil, err
	}

	user.Password = string(encodedPassword)

	// ID生成
	u, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	user.ID = u.String()

	// レコード作成
	result := repo.db.Create(&user)

	if result.Error != nil {
		return nil, result.Error
	}

	return user, nil
}
