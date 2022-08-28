package models

type WebSocketResponse[T any] struct {
	Type    string
	Payload T
}

type SceneChange struct {
	SceneType string
	Volume    int
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
	IconUrl  string
	Content  string
}
type SpeakerChange struct {
	SlotID string
}

type MemoUpdate struct {
	Contents string
}
