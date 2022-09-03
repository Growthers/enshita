package domain

import "time"

type GetFormResponse struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Deadline  time.Time `json:"deadline"`
	Enable    bool      `json:"enable"`
	Questions Question  `json:"questions"`
}
