var inquirer = require('inquirer');

var names = require("./word.js") // created a variable requiring my animal names from word.js

var game = {
    g: this,
    wordlist: ["computer", "braveheart", "skywalker", "seinfeld", "jim"],
    guesselLeft: 10,
    lettersGuessed: '',
    won: false,
    loss: false,
    gameover: false,
    word: function () {
        return new Word(this.wordList[1])
    },
    renderBoard: function () {
        var w = this.word().wordState();
        var r = w.map(function (val) {
            return val.displayState();
        });
        return r;


    },
    startGame: function () {
        console.log("/n------WELCOME TO HANGMAN--------/n");

        console.log(this.renderBoard());
        makeGuess(this);
    },

      evaluateGuess: function (guess) {
          var w = this.word().wordState();
          var leng = w.length;
          for (var i = 0; i < leng; i++) {
              if (guess === w[i].character) {

            }
        }
    }
}
game.startGame();

function makeGuess(game) {
    inquirer
        .prompt([{
            type: "input",
            name: "choice",
            message: "PLEASE GUESS A LETTER"
        }])
        .then(function (val) {
            var n = val.choice;
            console.log(n);
            game.evaluateGuess(n);
            // need to create function to check if guessed letter is correct

        });
}


 


 


 


