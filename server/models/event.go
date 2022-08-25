package models

import "time"

type Event struct {
	ID          string    `json:"id"          gorm:"column:id;primaryKey;not null"`
	Title       string    `json:"title"       gorm:"column:title;type:varchar(128);not null"`
	Date        time.Time `json:"date"        gorm:"column:date;type:date;not null"`
	Venue       string    `json:"venue"       gorm:"column:venue;type:varchar(256);not null"`
	Description string    `json:"description" gorm:"column:description;type:text;not null"`
	OGP         string    `json:"ogp"         gorm:"column:ogp;type:varchar(256);not null"`
	Status      int       `json:"status"      gorm:"column:status;type:int(1);not null"`
	HashTag     string    `json:"hashtag"     gorm:"column:hashTag;type:varchar(128);not null"`
}
