package domain

type ShowLayoutResponse struct {
	Title  string  `json:"title"`
	Images []Image `json:"images"`
}
