package domain

import "time"

type GetForm struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Deadline  time.Time `json:"deadline"`
	Enable    bool      `json:"enable"`
	Questions struct {
		Name             string `json:"name"`
		Mail             string `json:"mail"`
		Title            string `json:"title"`
		Paragraph        string `json:"paragraph"`
		SpeakerQuotaType []struct {
			ID           string    `json:"id"`
			Name         string    `json:"name"`
			Time         time.Time `json:"time"`
			CurrentCount int       `json:"current_count"`
			Total        int       `json:"total"`
		} `json:"speaker_quota_type"`
	}
}