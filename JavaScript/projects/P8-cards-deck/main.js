class CardsDeck {
  constructor() {
    this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    console.log('Generating new deck', this.cards);
  }

  mixCards = () => {
    this.cards.sort((a, b) => 0.5 - Math.random());

    console.log(
      'Randomly mixing the cards, the new cards deck order is:',
      this.cards
    );
  };

  pickCard = () => {
    const pickedCard = this.cards.pop();

    console.log("The card you've picked is:", pickedCard);
    console.log("The deck after you've picked a card is:", this.cards);

    return pickedCard;
  };

  cardInCue = insertedCard => {
    this.cards.unshift(insertedCard);

    console.log(
      "The deck after you've re-inserted the picked a card is:",
      this.cards
    );
  };
}

const deck = new CardsDeck();

deck.mixCards();

const p = deck.pickCard();

deck.cardInCue(p);
