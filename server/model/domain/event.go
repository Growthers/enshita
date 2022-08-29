package domain

import "time"

type Event struct {
	EventID              string    `json:"eventId"`
	Title                string    `json:"title"`
	Description          string    `json:"description"`
	StartDate            time.Time `json:"startDate"`
	EndDate              time.Time `json:"endDate"`
	Venue                string    `json:"venue"`
	OGP                  string    `json:"ogp"`
	Status               string    `json:"status"`
	HashTag              string    `json:"hashTag"`
	Deadline             string    `json:"deadline"`
	SpeakerQuotaTypeList []struct {
		ID           string `json:"id"`
		Name         string `json:"name"`
		Time         int    `json:"time"`
		CurrentCount int    `json:"currentCount"`
		Total        int    `json:"total"`
	} `json:"speakerQuotaTypeList"`
}
