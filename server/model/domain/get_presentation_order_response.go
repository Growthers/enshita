package domain


type GetPresentationOrderResponse struct {
	ID       string    `json:"id"`
	Name     string    `json:"name"`
	Title    string    `json:"title"`
	Duration string    `json:"duration"`
}
