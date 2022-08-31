package domain

import "time"

type Form struct {
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Deadline    time.Time `json:"deadline"`
	Questions   Question  `json:"questions"`
}
