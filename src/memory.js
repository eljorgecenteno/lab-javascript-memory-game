class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }

  shuffleCards() {
   if (!this.cards){
    return undefined
   }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  

  checkIfPair(card1, card2) {
    if (card1 && card2){
      this.pairsClicked++
    } 
    if (card1 === card2){
      this.pairsGuessed++
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed===0){
      return false
    }
    let totalPairs = this.cards.length/2
   if(this.pairsGuessed<totalPairs){
    return false
   }
   else{
    return true
   }
  }
}
