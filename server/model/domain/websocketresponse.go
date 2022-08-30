package domain

type WebSocketResponse[T any] struct {
	Type    string `json:"type"`
	Payload T
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
	SlotID string `json:"slotID"`
}

type MemoUpdate struct {
	Contents string `json:"contents"`
}
