var inquirer = require('inquirer');

var names = require("./word.js") // created a variable requiring my animal names from word.js
//constructor functions

var guessedLetters = [];  //array will hold what we guess
var guessesLeft = 9; // this is what well use to count down

var wins = 0;  // counter for the wins/losses
var losses = 0;

function Word(word) {
    this.word = word;
    this.wordArray = this.word.split(' ');
    this.wordLength = this.word.length;
    this.drawBoard = function () {
        var arr = this.wordArray;
        var start = arr.map(function (val) {
            return "* ";
        });

        console.log("/nWELCOME TO HANGMAN/n");

        console.log(stars.join(' '));
        console.log("/n");
    }

}

// var myWord = new Word("computer");

// guess()

function guess() {
    myWord.drawBoard();
    inquirer
        .prompt([{
            type: "input",
            name: "choice",
            message: "PLEASE GUESS A LETTER"
        }])
        .then(function (val) {
            var n = val.choice;

    // show I have 10 guesses left


    // create a function to get the words





            // need to create function to check if guessed letter is correct
        // var guessedLetter = function(){
        //     validate: function(value){
        //         if(letter(value)==true)
        //             return true;
        //         } else {
        //             return false;
        //         }
        }



        });

        
}


