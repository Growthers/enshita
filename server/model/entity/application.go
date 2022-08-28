package entity

import (
	"time"
)

type Application struct {
	ID       string    `gorm:"column:id;primaryKey;not null"`
	DeadLine time.Time `gorm:"column:deadLine;type:date;not null"`
	Status   int       `gorm:"column:status;type:int;not null"`

	EventID string `gorm:"column:eventId;not null"`
}
