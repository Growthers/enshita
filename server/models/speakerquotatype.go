package models

type SpeakerQuotaType struct {
	ID               string  `json:"id"               gorm:"column:id;primaryKey;not null"`
	Name             string  `json:"name"             gorm:"column:name;type:varchar(128);not null"`
	SpeakingDuration int     `json:"speakingDuration" gorm:"column:speakingDuration;type:int;not null"`
	Event            []Event `json:"event"            gorm:"column:eventId;foreignKey:ID;not null"`
}
