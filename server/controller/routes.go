package controller

func (c *Controller) Register() {
	events := c.api.Group("/events")
	events.GET("/:id/layout", c.showLayout)
	events.POST("/:id/layout", c.setLayout)
}
