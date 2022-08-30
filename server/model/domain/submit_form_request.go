package domain

type SubmitFormRequest struct {
	Name               string `json:"name"`
	Email              string `json:"email"`
	SpeakerQuotaTypeID string `json:"speakerQuotaTypeId"`
	Title              string `json:"title"`
	Paragraph          string `json:"paragraph"`
}
