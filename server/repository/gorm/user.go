package gorm

import (
	"encoding/base64"
	"github.com/google/uuid"
	"github.com/growthers/enshita/server/model/entity"
	"github.com/growthers/enshita/server/repository"
	"golang.org/x/crypto/argon2"
)

// CreateUser ユーザーを作成
func (repo *Repository) CreateUser(userID, email, userName, password string, role int) (*entity.User, error) {
	user := &entity.User{
		Email:    email,
		Name:     userName,
		Password: password,
		Role:     role,
	}

	// パスワードは4文字以上である必要があります
	if len(password) < 4 {
		return nil, repository.RaiseError("PASSWORD_LENGTH", "password is too short")
	}

	salt := "AndjefkjDSn3Nd+w$siv"
	// ToDo: ここのパラメータの値のチューニング
	hashed := argon2.IDKey([]byte(password), []byte(salt), 1, 6710, 2, 32)

	// ハッシュされたパスワードをBase64でエンコードする
	encodedHashedPassword := make([]byte, base64.StdEncoding.EncodedLen(len(hashed)))
	base64.StdEncoding.Encode(encodedHashedPassword, hashed)
	user.Password = string(encodedHashedPassword)

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
