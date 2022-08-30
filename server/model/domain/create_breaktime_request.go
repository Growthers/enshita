package domain

type CreateBreaktimeRequest struct {
	Title    string `json:"title"`
	Duration string `json:"duration"`
}
