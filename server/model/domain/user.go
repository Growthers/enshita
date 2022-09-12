package domain

type User struct {
	ID       string   `json:"id"`
	Email    string   `json:"email"`
	Name     string   `json:"name"`
	Password string   `json:"password"`
	Role     UserRole `json:"role"`
}

// userRole ユーザーのロール
type UserRole int

const (
	Admin    UserRole = 0
	Operator UserRole = 1
)
