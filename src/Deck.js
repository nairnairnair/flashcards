
class Deck {
    constructor(cardData = []) {
        this.cardData = cardData
    }
    countCards(){
        return this.cardData.length
    }
}

module.exports = Deck