package domain

type Question struct {
	Name                 string             `json:"name"`
	Email                string             `json:"email"`
	Title                string             `json:"title"`
	Paragraph            string             `json:"paragraph"`
	SpeakerQuotaTypeList []SpeakerQuotaType `json:"speakerQuotaTypeList"`
}
