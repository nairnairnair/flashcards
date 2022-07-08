const Card = require('./Card');
const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
    constructor(deck){
        this.turnCount = 0
        this.deck = deck.cardData
        this.currentCard = this.returnCurrentCard()
        this.incorrectGuesses = []
    }
    

    returnCurrentCard(){
        const currentIndex = this.turnCount
        return this.deck[currentIndex]
    }


    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)
        if (turn.correct === false) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.turnCount++
        this.currentCard = this.deck[this.turnCount]
        turn.evaluateGuess()
        this.calculatePercentCorrect()
        return turn.giveFeedback()
        
    }

    calculatePercentCorrect() {
        if (this.incorrectGuesses.length === 0) {
            return 100 
        }
        else {
            return 100 * this.incorrectGuesses.length / this.turnCount }
    }

    endRound(){
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }


}

module.exports = Round

//