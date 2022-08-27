package models

type User struct {
	ID       string `json:"id"       gorm:"column:id;primaryKey;not null"`
	Mail     string `json:"mail"     gorm:"column:mail;type:varchar(128);unique;not null"`
	Name     string `json:"name"     gorm:"column:name;type:varchar(128);unique;not null"`
	Password string `json:"password" gorm:"column:password;type:char(60);not null"`
	Role     int    `json:"role"     gorm:"column:role;type:int;not null"`
}
