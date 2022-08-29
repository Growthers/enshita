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
	Volume int
}

type MessageUpdate struct {
	Message []string
}

type Comments struct {
	Platform string
	Name     string
	IconURL  string
	Content  string
}
type SpeakerChange struct {
	SlotID string
}

type MemoUpdate struct {
	Contents string
}
