package domain

import "time"

type EventResponse struct {
	EventID              string             `json:"eventId"`
	Title                string             `json:"title"`
	Description          string             `json:"description"`
	StartDate            time.Time          `json:"startDate"`
	EndDate              time.Time          `json:"endDate"`
	Venue                string             `json:"venue"`
	OGP                  string             `json:"ogp"`
	Status               string             `json:"status"`
	HashTag              string             `json:"hashTag"`
	Deadline             string             `json:"deadline"`
	SpeakerQuotaTypeList []SpeakerQuotaType `json:"speakerQuotaTypeList"`
}
