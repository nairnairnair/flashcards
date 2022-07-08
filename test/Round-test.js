const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Deck', function(){

it('should be a function', function(){
    const deck = new Deck()
    const round = new Round(deck);
    expect(Round).to.be.a('function');
})

it('should be able to return the current card being played', function(){
    const card1 = new Card(1, 'What is Emma\'s favorite animal', ['cat', 'pug', 'capybara'], 'cat');
    const card2 = new Card(2, 'What organ is Emma missing?', ['spleen', 'pipe organ', 'gallbladder'], 'pipe organ');
    const card3 = new Card(3, 'What is Emma\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'sleeping'], 'sleeping');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn('cat')
    expect(round.turnCount).to.equal(1)
})



it('should update the turns count whether or not a guess is correct', function(){
    const card1 = new Card(1, 'What is Emma\'s least favorite animal', ['cat', 'shiba inu', 'capybara'], 'shiba inu');
    const card2 = new Card(2, 'What organ does Emma have?', ['spleen', 'pipe organ', 'redacted'], 'redacted');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.turnCount).to.equal(0)
    round.takeTurn('shiba inu')
    expect(round.turnCount).to.equal(1)
    round.takeTurn('pipe organ')
    expect(round.turnCount).to.equal(2)
})

it('should make the next card the current card', function(){
    const card1 = new Card(1, 'What is animal\'s favorite Robbie', ['Robbie', 'pug', 'capybara'], 'Robbie');
    const card2 = new Card(2, 'What Khalid is organ missing?', ['spleen', 'appendix', 'Khalid'], 'Khalid');
    const deck1 = new Deck([card1, card2]);
    const round = new Round(deck1);
    expect(round.currentCard.id).to.equal(1)
    round.takeTurn('Robbie', card1)
    expect(round.currentCard.id).to.equal(2)
  
})

it('should evaluate and record a guess', function(){
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

it('should store incorrect guesses in an array incorrectGuesses via the ID', function(){
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

it('should return feedback whether or not the guess is correct', function(){
    const card1 = new Card(1, 'What is animal\'s Robbie favorite?', ['favorite', 'least favorite', 'most least favorite'], 'favorite');
    const card2 = new Card(2, 'What organ is missing Khalid?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    expect(round.takeTurn('favorite')).to.equal('correct!')
    expect(round.takeTurn('spleen')).to.equal('incorrect!')
})

it('should calculate and return the percentage of correct guesses', function(){
    const card1 = new Card(1, 'What is favorite\'s favorite favorite?', ['favorite', 'least favorite', 'most least favorite'], 'favorite');
    const card2 = new Card(2, 'What organ is organ\'s organ?', ['organ', 'morgan', 'borgan'], 'organ');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    round.takeTurn('favorite')
    expect(round.calculatePercentCorrect()).to.equal(100)
    round.takeTurn('borgan')
    expect(round.calculatePercentCorrect()).to.equal(50)
})

it('should print a message to the console when a round ends', function(){
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
