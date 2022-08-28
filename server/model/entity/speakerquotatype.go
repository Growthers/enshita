package entity

type SpeakerQuotaType struct {
	ID               string `gorm:"column:id;primaryKey;not null"`
	Name             string `gorm:"column:name;type:varchar(128);not null"`
	SpeakingDuration int    `gorm:"column:speakingDuration;type:int;not null"`

	Speakers []Speaker `gorm:"foreignKey:SpeakerQuotaTypeID"`

	EventID string `gorm:"column:eventId;not null"`
}
