package gorm

import (
	"github.com/growthers/enshita/server/util"
	"gorm.io/gorm"
)

type Repository struct {
	db              *gorm.DB
	passwordEncoder util.PasswordEncoder
}

func NewGormRepository(db *gorm.DB, paswodEncorder util.PasswordEncoder) *Repository {
	repo := &Repository{
		db:              db,
		passwordEncoder: paswodEncorder,
	}

	return repo
}
