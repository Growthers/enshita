package gorm

import (
	"github.com/growthers/enshita/server/password"
	"gorm.io/gorm"
)

type Repository struct {
	db              *gorm.DB
	passwordEncoder password.Encoder
}

func NewGormRepository(db *gorm.DB, passwordEncoder password.Encoder) *Repository {
	repo := &Repository{
		db:              db,
		passwordEncoder: passwordEncoder,
	}

	return repo
}
