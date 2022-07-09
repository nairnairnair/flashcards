const Card = require('./Card');
const Deck = require('../src/Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0
  }
  start(prototypeQuestions){
    this.currentRound++
    prototypeQuestions.map((card) => {
       new Card(card.id, card.question, card.answers, card.correctAnswer) })
    this.questions = prototypeQuestions
  let deck = new Deck(prototypeQuestions)
    this.deck = deck
  
    let round = new Round(deck);
    this.round = round
    
    this.printMessage(deck, round)
    this.printQuestion(round)
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