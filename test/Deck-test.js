const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');



describe ('Deck', function(){

    it('should have an array of card objects', function(){
        const card6 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
        const card7 = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
        const card16 = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator")
        const deck = new Deck([card6, card7, card16]);
        expect(deck.cardData).to.equal(cardData)
    });

    it('should know how many cards are in the deck', function(){
        const card1 = new Card(1, "What is a pejorative word for a talkative, obnoxious cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Meowsebag')
        const card2 = new Card(2, "What is a pejorative word for a slow, meandering cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Frowsebag')
        const card3 = new Card(3, "What is a neutral word for a chatty, playful cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Nyannerpuss')
        const deck = new Deck([card1, card2, card3])
        deck.countCards()
        expect(deck.countCards()).to.equal(3)
    });

});