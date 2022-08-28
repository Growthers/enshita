package models

type SpeakerQuotaType struct {
	ID               string  `gorm:"column:id;primaryKey;not null"`
	Name             string  `gorm:"column:name;type:varchar(128);not null"`
	SpeakingDuration int     `gorm:"column:speakingDuration;type:int;not null"`
	Event            []Event `gorm:"column:eventId;foreignKey:ID;not null"`
}
