package models

import "time"

type Application struct {
	ID       string    `json:"id"       gorm:"column:id;primaryKey;not null"`
	DeadLine time.Time `json:"deadLine" gorm:"column:deadLine;type:date;not null"`
	Status   int       `json:"status"   gorm:"column:status;type:int;not null"`
	Event    []Event   `json:"event"    gorm:"column:eventId;foreignKey:ID;not null"`
}
