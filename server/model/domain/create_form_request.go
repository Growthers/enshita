package domain

import "time"

type CreateFormRequest struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Deadline    string `json:"deadline"`
	Questions   struct {
		Name             string `json:"name"`
		Email            string `json:"email"`
		SpeakerQuotaList struct {
			ID           string    `json:"id"`
			Name         string    `json:"name"`
			Time         time.Time `json:"time"`
			CurrentCount int       `json:"currentCount"`
			Total        int       `json:"total"`
		} `json:"speakerQuotaList"`
		Title     string `json:"title"`
		Paragraph string `json:"paragraph"`
	} `json:"questions"`
}
