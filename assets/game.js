
const deck = [
    { value: 2, name: "Clovers_2", description: " 2 de tréboles" },
    { value: 3, name: "Clovers_3", description: " 3 de tréboles" },
    { value: 4, name: "Clovers_4", description: " 4 de tréboles" },
    { value: 5, name: "Clovers_5", description: " 5 de tréboles" },
    { value: 6, name: "Clovers_6", description: " 6 de tréboles" },
    { value: 7, name: "Clovers_7", description: " 7 de tréboles" },
    { value: 8, name: "Clovers_8", description: " 8 de tréboles" },
    { value: 9, name: "Clovers_9", description: " 9 de tréboles" },
    { value: 10, name: "Clovers_10", description: " 10 de tréboles" },
    { value: 11, name: "Clovers_Jack", description: " J de tréboles" },
    { value: 12, name: "Clovers_Queen", description: " Q de tréboles" },
    { value: 13, name: "Clovers_King", description: " K de tréboles" },
    { value: 1, name: "Clovers_A", description: " A de tréboles" },

    { value: 2, name: "Tiles_2", description: " 2 de diamantes" },
    { value: 3, name: "Tiles_3", description: " 3 de diamantes" },
    { value: 4, name: "Tiles_4", description: " 4 de diamantes" },
    { value: 5, name: "Tiles_5", description: " 5 de diamantes" },
    { value: 6, name: "Tiles_6", description: " 6 de diamantes" },
    { value: 7, name: "Tiles_7", description: " 7 de diamantes" },
    { value: 8, name: "Tiles_8", description: " 8 de diamantes" },
    { value: 9, name: "Tiles_9", description: " 9 de diamantes" },
    { value: 10, name: "Tiles_10", description: " 10 de diamantes" },
    { value: 11, name: "Tiles_Jack", description: " J de diamantes" },
    { value: 12, name: "Tiles_Queen", description: " Q de diamantes" },
    { value: 13, name: "Tiles_King", description: " K de diamantes" },
    { value: 1, name: "Tiles_A", description: " A de diamantes" },
    
    { value: 2, name: "Hearts_2", description: " 2 de corazones" },
    { value: 3, name: "Hearts_3", description: " 3 de corazones" },
    { value: 4, name: "Hearts_4", description: " 4 de corazones" },
    { value: 5, name: "Hearts_5", description: " 5 de corazones" },
    { value: 6, name: "Hearts_6", description: " 6 de corazones" },
    { value: 7, name: "Hearts_7", description: " 7 de corazones" },
    { value: 8, name: "Hearts_8", description: " 8 de corazones" },
    { value: 9, name: "Hearts_9", description: " 9 de corazones" },
    { value: 10, name: "Hearts_10", description: " 10 de corazones" },
    { value: 11, name: "Hearts_Jack", description: " J de corazones" },
    { value: 12, name: "Hearts_Queen", description: " Q de corazones" },
    { value: 13, name: "Hearts_King", description: " K de corazones" },
    { value: 1, name: "Hearts_A", description: " A de corazones" },

    { value: 2, name: "Pikes_2", description: " 2 de picas" },
    { value: 3, name: "Pikes_3", description: " 3 de picas" },
    { value: 4, name: "Pikes_4", description: " 4 de picas" },
    { value: 5, name: "Pikes_5", description: " 5 de picas" },
    { value: 6, name: "Pikes_6", description: " 6 de picas" },
    { value: 7, name: "Pikes_7", description: " 7 de picas" },
    { value: 8, name: "Pikes_8", description: " 8 de picas" },
    { value: 9, name: "Pikes_9", description: " 9 de picas" },
    { value: 10, name: "Pikes_10", description: " 10 de picas" },
    { value: 11, name: "Pikes_Jack", description: " J de picas" },
    { value: 12, name: "Pikes_Queen", description: " Q de picas" },
    { value: 13, name: "Pikes_King", description: " K de picas" },
    { value: 1, name: "Pikes_A", description: " A de picas" },
];

const s = new Map([
    [1, 'todos toman (1 o 2, depende si están jugando tranqui o jarcor)'],
    [2, 'pongale'],
    [3, 'el dedo: el wn se queda con la carta y puede poner el dedo en la mesa cuando quiera, el último en poner el dedo toma'],
    [4, 'cultura chupistica'],
    [5, 'cascada'],
    [6, 'amigo'],
    [7, 'decir números y aplaudir y cambiar sentido cuando toca un múltiplo o que contenga siete'],
    [8, 'vaquero: cada mano es una pistola con 1 o 2 "balas" (sorbos)'],
    [9, 'nunca nunca'],
    [10, 'animales o vikingo'],
    [11, 'regla: se inventa una regla, se pueden borrar las que están e inventar otra'],
    [12, 'taritá'],
    [13, 'nada, hasta el 4to']
  ]);
  

function drawCard() {
    const index = Math.floor(Math.random() * deck.length);
    const card = deck.splice(index, 1)[0];
    return card;
}


function setCardImage(image) {
    // event.preventDefault();
    if (image !== null) {
        const card = drawCard()
        image.src = `/static/cards/PNG/white/${card.name}_white.png`
        const rule = document.getElementById("rule")
        console.log(rule.innerHTML);
        rule.innerHTML = s.get(card.value);
        const nombre = document.getElementById("card-name")
        nombre.innerHTML = card.description;

    }
}

// const rule = document.getElementById("rule");
console.log();

console.log("javascriptt loaded");

// const card = drawCard();
// grab the image element
const image = document.getElementById("card-image")

console.log(image);



// console.log(card);
// setCardImage(image);


// console.log(image);
// console.log(drawCard());
// console.log(deck);
