package domain

import "time"

type GetPresentationOrderResponse struct {
	ID       string    `json:"id"`
	Name     string    `json:"name"`
	Title    string    `json:"title"`
	Duration time.Time `json:"duration"`
}
