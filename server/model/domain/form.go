package domain

import "time"

type Form struct {
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Deadline    time.Time `json:"deadline"`
	Questions   struct {
		Name                 string             `json:"name"`
		Email                string             `json:"email"`
		SpeakerQuotaTypeList []SpeakerQuotaType `json:"speakerQuotaTypeList"`
		Title                string             `json:"title"`
		Paragraph            string             `json:"paragraph"`
	} `json:"questions"`
}
