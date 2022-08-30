package domain

type LoginOperatorAndAdminRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
