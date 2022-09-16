package repository

import (
	"github.com/growthers/enshita/server/model/domain"
)

type EventRepository interface {
	// FindEvent イベントを取得
	FindEvent(id string) (*domain.Event, error)
}
