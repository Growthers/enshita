package gorm

import (
	"github.com/google/uuid"
	"github.com/growthers/enshita/server/model/domain"
	"github.com/growthers/enshita/server/util"
)

// CreateUser ユーザーを作成
func (repo *Repository) CreateUser(userID, email, userName, password string, role domain.UserRole) (*domain.User, error) {
	user := &domain.User{
		ID:       userID,
		Email:    email,
		Name:     userName,
		Password: password,
		Role:     role,
	}

	//// ToDo: この部分を分離する
	//// FIXME: Saltを安全に生成する
	//salt := "AndjefkjDSn3Nd+w$siv"
	//// ToDo: ここのパラメータの値のチューニング
	//hashed := argon2.IDKey([]byte(password), []byte(salt), 1, 6710, 2, 32)
	//
	//// ハッシュされたパスワードをBase64でエンコードする
	//encodedHashedPassword := make([]byte, base64.StdEncoding.EncodedLen(len(hashed)))
	//base64.StdEncoding.Encode(encodedHashedPassword, hashed)
	//user.Password = string(encodedHashedPassword)

	encoder := util.NewArgon2PasswordEncoder()
	encodedPassword, err := encoder.EncodePassword(password)
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
