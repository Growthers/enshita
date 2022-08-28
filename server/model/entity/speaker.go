package entity

type Speaker struct {
	ID            string `gorm:"column:id;primaryKey;not null"`
	Title         string `gorm:"column:title;type:varchar(128);not null"`
	Name          string `gorm:"column:name;type:varchar(128);not null"`
	Email         string `gorm:"column:email;type:varchar(128);not null"`
	Duration      int    `gorm:"column:duration;type:int;not null"`
	SpeakingOrder int    `gorm:"column:speakingOrder;type:int;not null"`

	SpeakerQuotaTypeID string `gorm:"column:speakerQuotaTypeId;not null"`
	EventID            string `gorm:"column:eventId;not null"`
}
