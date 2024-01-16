package auth

import (
	"log"
	"os"

	"github.com/gorilla/sessions"
	"github.com/joho/godotenv"
	"github.com/markbates/goth"
	"github.com/markbates/goth/gothic"
	"github.com/markbates/goth/providers/auth0"
)

const (
	key    = "randomstring"
	MaxAge = 86400 * 15
	IsProd = false
)

func NewAuth() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("error loading env variables")
	}
	auth0ClientID := os.Getenv("AUTH0_CLIENT_ID")
	auth0ClientSecret := os.Getenv("AUTH0_CLIENT_SECRET")
	auth0Domain := os.Getenv("AUTH0_DOMAIN")
	auth0CallbackURL := os.Getenv("AUTH0_CALLBACK_URL")

	store := sessions.NewCookieStore([]byte(key))
	store.MaxAge(MaxAge)
	store.Options.Path = "/"
	store.Options.HttpOnly = true
	store.Options.Secure = IsProd

	gothic.Store = store

	goth.UseProviders(
		auth0.New(auth0ClientID, auth0ClientSecret, auth0CallbackURL, auth0Domain),
	)
}
