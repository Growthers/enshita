package domain

type User struct {
	ID    string   `json:"id"`
	Email string   `json:"email"`
	Name  string   `json:"name"`
	Role  UserRole `json:"role"`
}

// UserRole ユーザーのロール
type UserRole int

const (
	Admin    UserRole = 0
	Operator UserRole = 1
)
