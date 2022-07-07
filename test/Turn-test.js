const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

//instantiated with two arguments:

//a string (that represents a user’s guess to the question

//Card object for the current card in play

describe('Turn', function(){

    it('should be a function', function() {
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });
    
    it('should be an instance of Turn', function() {
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn)
    });

    it('should be able to store a guess', function(){
        const card = new Card(1, "What is a pejorative word for a slow, meandering cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Frowsebag')
        const turn = new Turn('Frowsebag', card);
        expect(turn.guess).to.equal('Frowsebag')
    });

    it('should be able to store a Card', function(){
        const card = new Card(1, "What is a pejorative word for a talkative, obnoxious cat?", ['Meowsebag', 'Frowsebag', 'Nyannerpuss'], 'Meowsebag')
        const turn = new Turn('Meowsebag', card);
        expect(turn.card).to.equal(card)
    });

    it('should be able to return a guess', function(){
        const card = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()")
        const turn = new Turn('map()', card);
        turn.returnGuess();
        expect(turn.returnGuess()).to.equal('map()')
    })

    it('should be able to return a Card', function(){
        const card = new Card(7, "Which array prototype is not an accessor method?", ["join()", "slice()", "splice()"], "splice()")
        const turn = new Turn('splice()', card);
        turn.returnCard();
        expect(turn.returnCard()).to.equal(turn.card)
    })

    it('should be able to return a boolean', function(){
        const card = new Card(21, "Which iteration method is best for DOM manipulation?", ["forEach()", "map()", "reduce()"], "forEach()")
        
        const turnTrue = new Turn("forEach()", card);
        turnTrue.evaluateGuess();
        expect(turnTrue.evaluateGuess()).to.equal(true)

        const turnFalse = new Turn("map()", card);
        turnFalse.evaluateGuess();
        expect(turnFalse.evaluateGuess()).to.equal(false)
    })

    it('should be able to return correct or incorrect', function(){
        const card = new Card(16, "What does the callback function for reduce() return?", ["the accumulator", "the current element", "the initializer"], "the accumulator")

        const turnCorrect = new Turn("the accumulator", card);
        turnCorrect.giveFeedback();
        expect(turnCorrect.giveFeedback()).to.equal('correct!')

        const turnIncorrect = new Turn("the current element", card);
        turnIncorrect.giveFeedback();
        expect(turnIncorrect.giveFeedback()).to.equal('incorrect!')
    });

});



//returnGuess: method that returns the guess

//returnCard: method that returns the Card

//evaluateGuess: method that returns a boolean indicating
//if the user’s guess matches the correct answer on the card

//giveFeedback - method that returns either ‘incorrect!’ or 
//‘correct!’ based on whether the guess is correct or not.

