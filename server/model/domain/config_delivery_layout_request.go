package domain

type ConfigDeliveryLayoutRequest struct {
	Images []struct {
		Type string `json:"type"`
		URL  string `json:"url"`
	} `json:"images"`
}
