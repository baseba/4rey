
const deck = [
    { value: 2, name: "Clovers_2", description: "rule 2 of clovers" },
    { value: 3, name: "Clovers_3", description: "rule 3 of clovers" },
    { value: 4, name: "Clovers_4", description: "rule 4 of clovers" },
    { value: 5, name: "Clovers_5", description: "rule 5 of clovers" },
    { value: 6, name: "Clovers_6", description: "rule 6 of clovers" },
    { value: 7, name: "Clovers_7", description: "rule 7 of clovers" },
    { value: 8, name: "Clovers_8", description: "rule 8 of clovers" },
    { value: 9, name: "Clovers_9", description: "rule 9 of clovers" },
    { value: 10, name: "Clovers_10", description: "rule 10 of clovers" },
    { value: 11, name: "Clovers_Jack", description: "rule 11 of clovers" },
    { value: 12, name: "Clovers_Queen", description: "rule 12 of clovers" },
    { value: 13, name: "Clovers_King", description: "rule 13 of clovers" },
    { value: 1, name: "Clovers_A", description: "rule 14 of clovers" },

    { value: 2, name: "Tiles_2", description: "rule 2 of Tiles" },
    { value: 3, name: "Tiles_3", description: "rule 3 of Tiles" },
    { value: 4, name: "Tiles_4", description: "rule 4 of Tiles" },
    { value: 5, name: "Tiles_5", description: "rule 5 of Tiles" },
    { value: 6, name: "Tiles_6", description: "rule 6 of Tiles" },
    { value: 7, name: "Tiles_7", description: "rule 7 of Tiles" },
    { value: 8, name: "Tiles_8", description: "rule 8 of Tiles" },
    { value: 9, name: "Tiles_9", description: "rule 9 of Tiles" },
    { value: 10, name: "Tiles_10", description: "rule 10 of Tiles" },
    { value: 11, name: "Tiles_Jack", description: "rule 11 of Tiles" },
    { value: 12, name: "Tiles_Queen", description: "rule 12 of Tiles" },
    { value: 13, name: "Tiles_King", description: "rule 13 of Tiles" },
    { value: 1, name: "Tiles_A", description: "rule 14 of Tiles" },
    
    { value: 2, name: "Hearts_2", description: "rule 2 of Hearts" },
    { value: 3, name: "Hearts_3", description: "rule 3 of Hearts" },
    { value: 4, name: "Hearts_4", description: "rule 4 of Hearts" },
    { value: 5, name: "Hearts_5", description: "rule 5 of Hearts" },
    { value: 6, name: "Hearts_6", description: "rule 6 of Hearts" },
    { value: 7, name: "Hearts_7", description: "rule 7 of Hearts" },
    { value: 8, name: "Hearts_8", description: "rule 8 of Hearts" },
    { value: 9, name: "Hearts_9", description: "rule 9 of Hearts" },
    { value: 10, name: "Hearts_10", description: "rule 10 of Hearts" },
    { value: 11, name: "Hearts_Jack", description: "rule 11 of Hearts" },
    { value: 12, name: "Hearts_Queen", description: "rule 12 of Hearts" },
    { value: 13, name: "Hearts_King", description: "rule 13 of Hearts" },
    { value: 1, name: "Hearts_A", description: "rule 14 of Hearts" },

    { value: 2, name: "Pikes_2", description: "rule 2 of Pikes" },
    { value: 3, name: "Pikes_3", description: "rule 3 of Pikes" },
    { value: 4, name: "Pikes_4", description: "rule 4 of Pikes" },
    { value: 5, name: "Pikes_5", description: "rule 5 of Pikes" },
    { value: 6, name: "Pikes_6", description: "rule 6 of Pikes" },
    { value: 7, name: "Pikes_7", description: "rule 7 of Pikes" },
    { value: 8, name: "Pikes_8", description: "rule 8 of Pikes" },
    { value: 9, name: "Pikes_9", description: "rule 9 of Pikes" },
    { value: 10, name: "Pikes_10", description: "rule 10 of Pikes" },
    { value: 11, name: "Pikes_Jack", description: "rule 11 of Pikes" },
    { value: 12, name: "Pikes_Queen", description: "rule 12 of Pikes" },
    { value: 13, name: "Pikes_King", description: "rule 13 of Pikes" },
    { value: 1, name: "Pikes_A", description: "rule 14 of Pikes" },
];

function drawCard() {
    const index = Math.floor(Math.random() * deck.length);
    const card = deck.splice(index, 1)[0];
    return card;
}


function setCardImage(image) {
    // event.preventDefault();
    if (image !== null) {
        const card = drawCard();
        image.src = `/static/cards/PNG/white/${card.name}_white.png`;
    }
}

console.log("javascriptt loaded");

const card = drawCard();
// grab the image element
const image = document.getElementsByTagName("img")
console.log(image);


console.log(card);
setCardImage(image);

console.log(image);
console.log(drawCard());
console.log(deck);
