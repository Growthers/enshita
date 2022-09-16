package controller

import (
	"net/http"
	"strconv"

	"github.com/growthers/enshita/server/model/domain"
	"github.com/labstack/echo"
)

// ShowLayout 配信レイアウトの表示
func (c *Controller) showLayout(ctx echo.Context) error {
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

// SetLayout 配信レイアウトの設定
func (c *Controller) setLayout(ctx echo.Context) error {
	eventId := ctx.Param("id")

	params := &domain.SetLayoutRequest{}
	if err := ctx.Bind(params); err != nil {
		return ctx.JSON(http.StatusInternalServerError, nil)
	}

	if err := ctx.Validate(params); err != nil {
		return ctx.JSON(http.StatusBadRequest, err.Error())
	}

	for _, img := range params.Images {
		t, err := strconv.Atoi(img.Type)
		if err != nil {
			return ctx.JSON(http.StatusBadRequest, err.Error())
		}

		l, err := c.layoutRepository.CreateLayout(t, img.URL, eventId)
		if err != nil {
			return err
		} else if l == nil {
			return ctx.JSON(http.StatusNotFound, nil)
		}
	}

	return ctx.JSON(http.StatusOK, nil)
}
