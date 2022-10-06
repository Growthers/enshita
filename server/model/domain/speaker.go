package domain

type Speaker struct {
	ID            string `json:"id"`
	Title         string `json:"title"`
	Name          string `json:"name"`
	Email         string `json:"email"`
	Duration      int    `json:"duration"`
	SpeakingOrder int    `json:"speakingOrder"`
	Paragraph     string `json:"paragraph"`

	SpeakerQuotaTypeID string `json:"speakerQuotaTypeId"`
	EventID            string `json:"eventId"`
}
