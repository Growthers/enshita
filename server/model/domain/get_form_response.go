package domain

import "time"

type GetFormResponse struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	DeadLine  time.Time `json:"deadLine"`
	Enable    bool      `json:"enable"`
	Questions struct {
		Name             string `json:"name"`
		Email            string `json:"email"`
		Title            string `json:"title"`
		Paragraph        string `json:"paragraph"`
		SpeakerQuotaType []struct {
			ID           string    `json:"id"`
			Name         string    `json:"name"`
			Time         time.Time `json:"time"`
			CurrentCount int       `json:"currentCount"`
			Total        int       `json:"total"`
		} `json:"speakerQuotaType"`
	}
}
