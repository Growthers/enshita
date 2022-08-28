package entity

import "time"

type Event struct {
	ID          string    `gorm:"column:id;primaryKey;not null"`
	Title       string    `gorm:"column:title;type:varchar(128);not null"`
	StartDate   time.Time `gorm:"column:startdate;type:date;not null"`
	EndDate     time.Time `gorm:"column:enddate;type:date;not null"`
	Venue       string    `gorm:"column:venue;type:varchar(256);not null"`
	Description string    `gorm:"column:description;type:text;not null"`
	OGP         string    `gorm:"column:ogp;type:varchar(256);not null"`
	Status      int       `gorm:"column:status;type:int(1);not null"`
	HashTag     string    `gorm:"column:hashTag;type:varchar(128);not null"`

	Speakers          []Speaker          `gorm:"foreignKey:EventID"`
	Applications      []Application      `gorm:"foreignKey:EventID"`
	SpeakerQuotaTypes []SpeakerQuotaType `gorm:"foreignKey:EventID"`
}
