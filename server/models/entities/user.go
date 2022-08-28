package entities

type User struct {
	ID       string `gorm:"column:id;primaryKey;not null"`
	Email    string `gorm:"column:email;type:varchar(128);unique;not null"`
	Name     string `gorm:"column:name;type:varchar(128);unique;not null"`
	Password string `gorm:"column:password;type:char(60);not null"`
	Role     int    `gorm:"column:role;type:int;not null"`
}
