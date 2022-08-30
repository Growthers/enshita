package gorm

import (
	"github.com/growthers/enshita/server/repository"
	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func NewGormRepository(db *gorm.DB) repository.Repository {
	repo := &Repository{
		db: db,
	}

	return repo
}
