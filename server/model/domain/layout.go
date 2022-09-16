package domain

type Layout struct {
	ID        string `josn:"id"`
	ImageType int    `json:"imageType"`
	ImageURL  string `json:"imageURL"`
	EventID   string `json:"eventId"`
}
