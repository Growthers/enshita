package echo

func (c *Controller) Register() {
	events := c.api.Group("/events")
	events.GET("/:id/layout", c.ShowLayout)
	events.POST("/:id/layout", c.SetLayout)
}
