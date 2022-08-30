package domain

type ShowDeliveryLayoutResponse struct {
	Title  string `json:"title"`
	Images []struct {
		Type string `json:"type"`
		URL  string `json:"url"`
	} `json:"images"`
}
