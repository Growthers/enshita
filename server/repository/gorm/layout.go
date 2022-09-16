package gorm

import (
	"github.com/growthers/enshita/server/model/domain"
	"github.com/growthers/enshita/server/model/entity"
)

// FindLayout 配信レイアウトを取得
func (repo *Repository) FindLayout(id string) (*domain.Layout, error) {
	var l entity.Layout

	// レコード取得
	err := repo.db.First(&l, "id = ?", id).Error
	if err != nil {
		return nil, err
	}

	return &domain.Layout{
		ID:        l.ID,
		ImageType: l.ImageType,
		ImageURL:  l.ImageURL,
		EventID:   l.EventID,
	}, nil
}
