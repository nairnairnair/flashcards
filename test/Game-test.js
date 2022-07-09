const chai = require('chai');
const expect = chai.expect;
const Round = require('../src/Round');

describe ('Game', function(){

it('should keep track of the current round', function(){
    expect(this.currentRound).to.equal(null)
})

it('should be able to start a round', function(){
    expect(this.currentRound).to.be.an.instanceOf(Round)
})


});