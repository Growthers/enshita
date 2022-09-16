package echo

import (
	"github.com/growthers/enshita/server/repository"
	"github.com/labstack/echo"
)

type Controller struct {
	api              *echo.Group
	userRepository   repository.UserRepository
	eventRepository  repository.EventRepository
	layoutRepository repository.LayoutRepository
}

func NewController(api *echo.Group, ur repository.UserRepository, er repository.EventRepository, lr repository.LayoutRepository) *Controller {
	c := &Controller{
		api:              api,
		userRepository:   ur,
		eventRepository:  er,
		layoutRepository: lr,
	}

	return c
}
