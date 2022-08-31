package domain

type ShowDeliveryLayoutResponse struct {
	Title  string  `json:"title"`
	Images []Image `json:"images"`
}
