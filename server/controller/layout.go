package controller

import "github.com/labstack/echo"

type LayoutController interface {
	// ShowLayout 配信レイアウトの表示
	ShowLayout(ctx echo.Context) error
	// SetLayout 配信レイアウトの設定
	SetLayout(ctx echo.Context) error
}
