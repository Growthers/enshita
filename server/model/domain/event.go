package domain

import (
	"time"
)

type Event struct {
	ID          string    `json:"id"`
	Title       string    `json:"title"`
	StartDate   time.Time `json:"startDate"`
	EndDate     time.Time `json:"endDate"`
	Venue       string    `json:"venue"`
	Description string    `json:"description"`
	OGP         string    `json:"ogp"`
	Status      int       `json:"status"`
	HashTag     string    `json:"hashTag"`

	Speakers          []Speaker          `json:"speakers"`
	Applications      []Application      `json:"applications"`
	SpeakerQuotaTypes []SpeakerQuotaType `json:"speakerQuotaTypes"`
}
