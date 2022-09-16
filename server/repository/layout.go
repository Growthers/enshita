package repository

import "github.com/growthers/enshita/server/model/domain"

type LayoutRepository interface {
	// FindLayout 配信レイアウトを取得
	FindLayout(id string) (*domain.Layout, error)
	// FindLayouts 特定のイベントに関する配信レイアウトを全件取得
	FindLayouts(eventID string) ([]*domain.Layout, error)
	// CreateLayout 配信レイアウトを作成
	CreateLayout(imageType int, imageURL string, eventID string) (*domain.Layout, error)
}
