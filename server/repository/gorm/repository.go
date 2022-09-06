package gorm

import (
	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewGormRepository(db *gorm.DB) *Repository {
	repo := &Repository{
		db: db,
	}

	return repo
}
