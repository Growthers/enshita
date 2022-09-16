package gorm

import (
	"github.com/growthers/enshita/server/model/domain"
	"github.com/growthers/enshita/server/model/entity"
)

// FindEvent イベントを取得
func (repo *Repository) FindEvent(id string) (*domain.Event, error) {
	var e entity.Event

	// レコード取得
	err := repo.db.First(&e, "id = ?", id).Error
	if err != nil {
		return nil, err
	}

	// entity.Speakerをdomain.Speakerに変換
	var ds []domain.Speaker
	for _, s := range e.Speakers {
		ds = append(ds, domain.Speaker{
			ID:                 s.ID,
			Title:              s.Title,
			Name:               s.Name,
			Email:              s.Email,
			Duration:           s.Duration,
			SpeakingOrder:      s.SpeakingOrder,
			Paragraph:          s.Paragraph,
			SpeakerQuotaTypeID: s.SpeakerQuotaTypeID,
			EventID:            s.EventID,
		})
	}

	// entity.Applicationをdomain.Applicationに変換
	var da []domain.Application
	for _, a := range e.Applications {
		da = append(da, domain.Application{
			ID:       a.ID,
			Deadline: a.Deadline,
			Status:   a.Status,
			EventID:  a.EventID,
		})
	}

	// entity.SpeakerQuotaTypeをdomain.SpeakerQuotaTypeに変換
	var dsq []domain.SpeakerQuotaType
	for _, sq := range e.SpeakerQuotaTypes {
		dsq = append(dsq, domain.SpeakerQuotaType{
			ID:   sq.ID,
			Name: sq.Name,
			// TODO: 残りのフィールドを追加する
		})
	}

	return &domain.Event{
		ID:                e.ID,
		Title:             e.Title,
		StartDate:         e.StartDate,
		EndDate:           e.EndDate,
		Venue:             e.Venue,
		Description:       e.Description,
		OGP:               e.OGP,
		Status:            e.Status,
		HashTag:           e.HashTag,
		Speakers:          ds,
		Applications:      da,
		SpeakerQuotaTypes: dsq,
	}, nil
}
