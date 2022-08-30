package domain

import "time"

type GetFormResponse struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Deadline  time.Time `json:"deadline"`
	Enable    bool      `json:"enable"`
	Questions struct {
		Name                 string             `json:"name"`
		Email                string             `json:"email"`
		Title                string             `json:"title"`
		Paragraph            string             `json:"paragraph"`
		SpeakerQuotaTypeList []SpeakerQuotaType `json:"speakerQuotaTypeList"`
	}
}
