package domain

// Operatorのresponse
type GetOperatorResponse struct {
	ID    string `json:"id"`
	Email string `json:"email"`
	Name  string `json:"name"`
}

type GetOperatorListResponse []GetOperatorResponse
