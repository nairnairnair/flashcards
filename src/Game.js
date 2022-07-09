const Card = require('./Card');
const Deck = require('../src/Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null
    this.start()
  }

  start(){
    var questionArray = prototypeQuestions.map( (card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer) })
    
    let deck = new Deck(questionArray)
    this.currentRound = new Round(deck)
    
    this.printMessage(this.deck, this.currentRound)
    this.printQuestion(currentRound)
  }

  printMessage(deck, currentRound) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;