package entity

type Layout struct {
	ID        string `gorm:"column:id;primaryKey;not null"`
	ImageType int    `gorm:"column:imageType;type:integer;not null"`
	ImageURL  string `gorm:"column:imageURL;type:varchar(256);not null"`
	EventID   string `gorm:"column:eventId;foreignKey:ID;not null"`
}
