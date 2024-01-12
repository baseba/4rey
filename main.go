package main

import (
	"4rey/handler"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.Static("/static", "assets")
	// deck := handler.GenerateDeck()
	gameHandler := handler.GameHandler{Deck: nil} // Use keyed field
	e.GET("/", gameHandler.HandleGameShow)

	// Acá va la logica de jugar una nueva carta y mostrarla y que se valla del mazo y toda la wea esa
	e.POST("/play", func(c echo.Context) error {
		return c.String(200, gameHandler.HandleGamePlay(c))
	})

	// aca va otra logica pero no la he hecho aun jaja
	e.POST("/test", func(c echo.Context) error {
		c.Response().Header().Set("Content-Type", "text/html")
		return c.String(200, "<div>htmx is working</div>")
	})
	e.Logger.Fatal(e.Start(":42069"))
}
