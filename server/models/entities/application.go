package entities

import (
	"time"
)

type Application struct {
	ID       string    `gorm:"column:id;primaryKey;not null"`
	DeadLine time.Time `gorm:"column:deadLine;type:date;not null"`
	Status   int       `gorm:"column:status;type:int;not null"`
	Event    []Event   `gorm:"column:eventId;foreignKey:ID;not null"`
}
