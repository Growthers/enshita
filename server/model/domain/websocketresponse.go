package domain

type WebSocketResponse[T any] struct {
	Type    string `json:"type"`
	Payload T      `json:"payload"`
}

type SceneChange struct {
	SceneType string `json:"sceneType"`
	Volume    int    `json:"volume"`
}

type ChangeVolume struct {
	Volume int `json:"volume"`
}

type MessageUpdate struct {
	Message []string `json:"message"`
}

type Comments struct {
	Platform string `json:"platform"`
	Name     string `json:"name"`
	IconURL  string `json:"iconURL"`
	Content  string `json:"content"`
}
type SpeakerChange struct {
	SpeakerQuotaTypeID string `json:"speakerQuotaTypeID"`
}

type MemoUpdate struct {
	Contents string `json:"contents"`
}
