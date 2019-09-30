let deck = { 
    suits : ["hearts", "spades", "clubes", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickCard = Math.floor(Math.random() * 52);
            let pickSuit = Math.floor(pickCard / 13);

            return {suit: this.suits[pickSuit], card: pickCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card " + pickedCard.card + " of " + pickedCard.suit);