package gorm

import (
	"github.com/google/uuid"
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

// FindLayouts 特定のイベントに関する配信レイアウトを全件取得
func (repo *Repository) FindLayouts(eventID string) ([]*domain.Layout, error) {
	var ls []*entity.Layout

	// レコード取得
	err := repo.db.Find(&ls, "eventId = ?", eventID).Error
	if err != nil {
		return nil, err
	}

	// entity.Layoutをdomain.Layoutに変換
	var dl []*domain.Layout
	for _, l := range ls {
		dl = append(dl, &domain.Layout{
			ID:        l.ID,
			ImageType: l.ImageType,
			ImageURL:  l.ImageURL,
			EventID:   l.EventID,
		})
	}

	return dl, nil
}

// CreateLayout 配信レイアウトを作成
func (repo *Repository) CreateLayout(imageType int, imageURL string, eventID string) (*domain.Layout, error) {

	l := &entity.Layout{
		ImageType: imageType,
		ImageURL:  imageURL,
		EventID:   eventID,
	}

	// ID生成
	u, err := uuid.NewRandom()
	if err != nil {
		return nil, err
	}

	l.ID = u.String()

	// レコード作成
	err = repo.db.Create(&l).Error
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
