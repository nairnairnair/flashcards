const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe ('Deck', function(){

it('should be a function', function(){
    const round = new Round();
    expect(Round).to.be.a('function');
})

it('should be able to return the current card being played', function(){
    const round = new Round();
    round.returnCurrentCard()
})

it('should create a new instance of Turn when a guess is made', function(){
    const round = new Round();
    round.takeTurn()
})

it('should update the turns count whether or not a guess is correct', function(){
    const round = new Round();
    round.takeTurn()
})

it('should make the next card the current card' function(){
    const round = new Round();
    round.takeTurn()
})

it('should evaluate and record guess' function(){
    const round = new Round();
    round.takeTurn()
})

it('should store incorrect guesses in an array incorrectGuesses via the ID' function(){
    const round = new Round();
    round.takeTurn()
})

it('should return feedback whether or not the guess is correct' function(){
    const round = new Round();
    round.takeTurn()
})

it('should calculate and return the percentage of correct guesses' function(){
    const round = new Round();
    round.calculatePercentCorrect()
})

it('should print a message to the console when a round ends' function(){
    const round = new Round();
    round.endRound()
})

})