package domain

import "time"

type SpeakerQuotaType struct {
	ID           string    `json:"id"`
	Name         string    `json:"name"`
	Time         time.Time `json:"time"`
	CurrentCount int       `json:"currentCount"`
	Total        int       `json:"total"`
}
