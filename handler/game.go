package handler

import (
	"4rey/views/indexView"
	"fmt"
	"math/rand"

	"github.com/labstack/echo/v4"
)

type card struct {
	pinta       string
	num         int
	description string
}

func GenerateDeck() []card {
	reglas := map[int]string{}
	reglas[1] = "As"
	reglas[2] = "Dos"
	reglas[3] = "Tres"
	reglas[4] = "Cuatro"
	reglas[5] = "Cinco"
	reglas[6] = "Seis"
	reglas[7] = "Siete"
	reglas[8] = "Ocho"
	reglas[9] = "Nueve"
	reglas[10] = "Diez"
	reglas[11] = "Jota"
	reglas[12] = "Quina"
	reglas[13] = "Rey"

	var deck []card
	var pintas = []string{"♠", "♣", "♦", "♥"}
	for i := 0; i < 4; i++ {
		for j := 1; j < 14; j++ {
			deck = append(deck, card{pinta: pintas[i], num: j, description: reglas[j]})
		}
	}
	return deck
}

func drawCard(d []card, index int) []card {
	newDeck := append(d[:index], d[index+1:]...)
	return newDeck
}

type GameHandler struct {
	Deck []card
}

func (h GameHandler) HandleGameShow(c echo.Context, user string) error {
	return render(c, indexView.Show(user))
}

func (h GameHandler) HandleGamePlay(c echo.Context) string {
	// revisar si hay deck en la base de datos
	deckExists := checkForDeck()
	// si no hay deck, generar uno nuevo
	if !deckExists {
		h.Deck = GenerateDeck()
	}
	// si hay deck, usar ese
	if deckExists {
		//opraciones para transformar string en deck o algo asi
		h.Deck = nil
	}
	// sacar una carta del deck
	randomIndex := rand.Intn(len(h.Deck))
	carta := h.Deck[randomIndex]
	newDeck := drawCard(h.Deck, randomIndex)
	h.Deck = newDeck

	// mostrar la carta
	fmt.Println("tu carta es: " + carta.description + " de " + carta.pinta)
	// guardar el deck en la base de datos

	return carta.description + " de " + carta.pinta
}

func checkForDeck() bool {
	return false
}
