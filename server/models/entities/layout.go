package entities

type Layout struct {
	ID        string `gorm:"column:id;primaryKey;not null"`
	ImageType int    `gorm:"column:imageType;type:integer;not null"`
	ImageURL  string `gorm:"column:imageURL;type:varchar(256);not null"`
	EventId   string `gorm:"column:eventId;foreignKey:ID;not null"`
}
