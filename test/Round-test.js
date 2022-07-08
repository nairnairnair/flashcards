const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Deck', function(){

it.skip('should be a function', function(){
    const round = new Round();
    expect(Round).to.be.a('function');
})

it.skip('should be able to return the current card being played', function(){
    const card1 = new Card(11, 'What is Emma\'s favorite animal', ['cat', 'pug', 'capybara'], 'cat');
    const card2 = new Card(12, 'What organ is Emma missing?', ['spleen', 'pipe organ', 'gallbladder'], 'pipe organ');
    const card3 = new Card(13, 'What is Emma\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'sleeping'], 'sleeping');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.returnCurrentCard()
    expect(round.deck.id).to.deep.equal(11)
})

it.skip('should create a new instance of Turn when a guess is made', function(){
    const round = new Round();
    round.takeTurn()
    expect(round.turn).to.be.an.instanceof(Turn);
})

it.skip('should update the turns count whether or not a guess is correct', function(){
    const card1 = new Card(1, 'What is Emma\'s least favorite animal', ['cat', 'shiba inu', 'capybara'], 'shiba inu');
    const card2 = new Card(2, 'What organ does Emma have?', ['spleen', 'pipe organ', 'redacted'], 'redacted');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.turns).to.equal(0)
    round.takeTurn('shiba inu')
    expect(round.turns).to.equal(1)
    round.takeTurn('pipe organ')
    expect(round.turns).to.equal(2)
})

it.skip('should make the next card the current card', function(){
    const card1 = new Card(1, 'What is animal\'s favorite Robbie', ['Robbie', 'pug', 'capybara'], 'Robbie');
    const card2 = new Card(2, 'What Khalid is organ missing?', ['spleen', 'appendix', 'Khalid'], 'Khalid');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.deck.id).to.deep.equal(1)
    round.takeTurn()
    expect(round.deck.id).to.deep.equal(2)
})

it.skip('should evaluate and record a guess', function(){
    const card1 = new Card(1, "What is a pejorative word for a talkative, obnoxious cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Meowsebag')
    const card2 = new Card(2, "What is a pejorative word for a slow, meandering cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Frowsebag')
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.incorrectGuesses.length).to.equal(0)
    round.takeTurn('Nyannerpuss')
    expect(round.incorrectGuesses.length).to.equal(1)
    round.takeTurn('Frowsebag')
    expect(round.incorrectGuesses.length).to.equal(1)

})

it.skip('should store incorrect guesses in an array incorrectGuesses via the ID', function(){
    const card1 = new Card(1, "What is a pejorative word for a talkative, obnoxious cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Meowsebag')
    const card2 = new Card(2, "What is a pejorative word for a slow, meandering cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Frowsebag')
    const card3 = new Card(3, "What is a neutral word for a chatty, playful cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Nyannerpuss')
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('Nyannerpuss')
    round.takeTurn('Meowsebag')
    round.takeTurn('Nyannerpuss')
    expect(round.incorrectGuesses).to.deep.equal([1, 2])
  
})

it.skip('should return feedback whether or not the guess is correct', function(){
    const card1 = new Card(1, 'What is animal\'s Robbie favorite?', ['favorite', 'least favorite', 'most least favorite'], 'favorite');
    const card2 = new Card(2, 'What organ is missing Khalid?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('favorite')
    expect(round.takeTurn()).to.equal('correct!')
    round.takeTurn('spleen')
    expect(round.takeTurn()).to.equal('incorrect!')
})

it.skip('should calculate and return the percentage of correct guesses', function(){
    const card1 = new Card(1, 'What is favorite\'s favorite favorite?', ['favorite', 'least favorite', 'most least favorite'], 'favorite');
    const card2 = new Card(2, 'What organ is organ\'s organ?', ['organ', 'morgan', 'borgan'], 'organ');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('favorite')
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('borgan')
    expect(round.calculatePercentCorrect()).to.equal(50)
})

it.skip('should print a message to the console when a round ends', function(){
    const card1 = new Card(1, 'What is Robbie\'s Robbie Robbie?', ['favorite', 'least favorite', 'Robbie'], 'Robbie');
    const card2 = new Card(2, 'What Khalid is Khalid\'s Khalid?', ['Khalid', 'morgan', 'borgan'], 'Khalid');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('Robbie')
    round.takeTurn('morgan')
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
})

})

// round.takeTurn('spleen')
// expect(round.calculatePercentCorrect).to.equal(50)
// round.takeTurn('spleen')
// expect(round.calculatePercentCorrect).to.equal(50)
