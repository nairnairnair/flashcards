// This is where your project starts.
const Game = require('./src/Game')
const data = require('./src/data');
const prototypeData = data.prototypeData
const game = new Game
game.start(prototypeData)

console.log('Your project is running...'); 
