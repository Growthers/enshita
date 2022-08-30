package domain

import "time"

type UpdateFormInfoRequest struct {
	Title       string    `json:"title"`
	Description string    `json:"description"`
	Deadline    time.Time `json:"deadline"`
	Questions   struct {
		Name                 string `json:"name"`
		Email                string `json:"email"`
		SpeakerQuotaTypeList []struct {
			ID           string    `json:"id"`
			Name         string    `json:"name"`
			Time         int `json:"time"`
			CurrentCount int       `json:"currentCount"`
			Total        int       `json:"total"`
		} `json:"speakerQuotaTypeList"`
		Title     string `json:"title"`
		Paragraph string `json:"paragraph"`
	} `json:"questions"`
}
