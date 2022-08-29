package domain

import "time"

type EventRequest struct {
	Title       string    `json:"title"`
	StartDate   time.Time `json:"startDate"`
	EndDate     time.Time `json:"endDate"`
	Venue       string    `json:"venue"`
	Description string    `json:"description"`
	OGP         string    `json:"ogp"`
	Status      string    `json:"status"`
}
