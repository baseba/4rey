package main

import (
	"4rey/auth"
	"4rey/handler"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/markbates/goth/gothic"
)

func writeCookie(c echo.Context, key string, val string) error {
	cookie := new(http.Cookie)
	cookie.Name = key
	cookie.Value = val
	cookie.Expires = time.Now().Add(24 * time.Hour)
	c.SetCookie(cookie)
	return c.String(http.StatusOK, "write a cookie")
}

func main() {

	if err := godotenv.Load(); err != nil {
		log.Fatalf("Failed to load the env vars: %v", err)
	}
	auth.NewAuth()
	e := echo.New()
	e.Use(session.Middleware(sessions.NewCookieStore([]byte("Secret"))))
	e.Static("/static", "assets")

	e.GET("/auth/callback", func(c echo.Context) error {
		gothUser, err := gothic.CompleteUserAuth(c.Response(), c.Request())
		if err != nil {
			fmt.Println(c.Response(), c.Request())
			return nil
		}

		sess, err := session.Get("session", c)
		if err != nil {
			return err
		}
		sess.Options = &sessions.Options{
			Path:     "/",
			MaxAge:   0,
			HttpOnly: false,
			Secure:   false,
		}
		sess.Values["example"] = "jhon smith"
		// sess.Values["acces-token"] = gothUser.AccessToken
		// sess.Values["UserID"] = gothUser.UserID
		save := sess.Save(c.Request(), c.Response())
		fmt.Println("tokeeennn")
		fmt.Println(save)
		c.Response().Header().Set("Content-Type", "text/html")
		t, _ := template.New("foo").Parse(userTemplate)
		t.Execute(c.Response(), gothUser)
		return nil
		// return c.NoContent(http.StatusOK)
	})

	e.GET("/auth", func(c echo.Context) error {
		if gothUser, err := gothic.CompleteUserAuth(c.Response(), c.Request()); err == nil {
			t, _ := template.New("foo").Parse(userTemplate)
			t.Execute(c.Response(), gothUser)
			sess, err := session.Get("session", c)
			if err != nil {
				return err
			}
			sess.Options = &sessions.Options{
				Path:     "/",
				MaxAge:   0,
				HttpOnly: false,
				Secure:   false,
			}
			sess.Values["example"] = "jhon smith"
			// sess.Values["acces-token"] = gothUser.AccessToken
			// sess.Values["UserID"] = gothUser.UserID
			sess.Save(c.Request(), c.Response())
			return nil

		} else {
			gothic.BeginAuthHandler(c.Response(), c.Request())
			t, _ := template.New("foo").Parse(userTemplate)
			t.Execute(c.Response(), gothUser)

			sess, err := session.Get("session", c)
			if err != nil {
				return err
			}
			sess.Options = &sessions.Options{
				Path:     "/",
				MaxAge:   0,
				HttpOnly: false,
				Secure:   false,
			}
			sess.Values["example"] = "jhon smith"
			// sess.Values["acces-token"] = gothUser.AccessToken
			// sess.Values["UserID"] = gothUser.UserID
			sess.Save(c.Request(), c.Response())
			return nil
		}
	})

	e.GET("/logout", func(c echo.Context) error {
		gothic.Logout(c.Response(), c.Request())
		c.Response().Header().Set("location", "/")
		c.Response().WriteHeader(http.StatusTemporaryRedirect)
		return nil
	})

	gameHandler := handler.GameHandler{Deck: nil} // Use keyed field
	e.GET("/", func(c echo.Context) error {
		user, ok := gothic.CompleteUserAuth(c.Response(), c.Request())
		if ok != nil {
			fmt.Println(ok)
		}
		err := gameHandler.HandleGameShow(c, user.Name)
		return err
	})
	e.GET("/whoami", func(c echo.Context) error {
		sess, err := session.Get("session", c)
		if err != nil {
			return err
		}

		return c.JSON(http.StatusOK, sess.Values["example"])
	})

	// e.GET("/login")

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

var userTemplate = `
<p><a href="/logout?provider={{.Provider}}">logout</a><a href="/">home</a></p>
<p>Name: {{.Name}} [{{.LastName}}, {{.FirstName}}]</p>
<p>Email: {{.Email}}</p>
<p>NickName: {{.NickName}}</p>
<p>Location: {{.Location}}</p>
<p>AvatarURL: {{.AvatarURL}} <img src="{{.AvatarURL}}"></p>
<p>Description: {{.Description}}</p>
<p>UserID: {{.UserID}}</p>
<p>AccessToken: {{.AccessToken}}</p>
<p>ExpiresAt: {{.ExpiresAt}}</p>
<p>RefreshToken: {{.RefreshToken}}</p>
`
