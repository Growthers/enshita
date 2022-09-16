package echo

import (
	"net/http"
	"strconv"

	"github.com/growthers/enshita/server/model/domain"
	"github.com/labstack/echo"
)

// ShowLayout 配信レイアウトの表示
func (c *Controller) ShowLayout(ctx echo.Context) error {
	eventId := ctx.Param("id")

	e, err := c.eventRepository.FindEvent(eventId)
	if err != nil {
		return err
	} else if e == nil {
		return ctx.JSON(http.StatusNotFound, nil)
	}

	ls, err := c.layoutRepository.FindLayouts(eventId)
	if err != nil {
		return err
	} else if ls == nil {
		return ctx.JSON(http.StatusNotFound, nil)
	}

	imgs := make([]domain.Image, len(ls))
	for i, l := range ls {
		imgs[i].Type = strconv.Itoa(l.ImageType)
		imgs[i].URL = l.ImageURL
	}

	return ctx.JSON(http.StatusOK, domain.ShowLayoutResponse{
		Title:  e.Title,
		Images: imgs,
	})
}
