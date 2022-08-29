package domain

type WebSocketResponse[T any] struct {
	Type    string
	Payload T
}

type SceneChange struct {
	SceneType string `json:"screenType"`
	Volume    int    `json:"volume"`
}

type ChangeVolume struct {
	Volume int `json:"volume"`
}

type MessageUpdate struct {
	Message []string
}

type Comments struct {
	Platform string `json:"platform"`
	Name     string `json:"Name"`
	IconURL  string `json:"iconURL"`
	Content  string `json:"content"`
}
type SpeakerChange struct {
	SlotID string `json:"slotID"`
}

type MemoUpdate struct {
	Contents string `json:"contents"`
}
