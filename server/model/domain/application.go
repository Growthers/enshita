package domain

import "time"

type Application struct {
	ID       string    `json:"id"`
	Deadline time.Time `json:"deadLine"`
	Status   int       `json:"status"`
	EventID  string    `json:"eventId"`
}
