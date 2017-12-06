var inquirer = require('inquirer');

var names = require("./word.js") // created a variable requiring my animal names from word.js


var guessedLetters = [];  //array will hold what we guess
var guessesLeft = 9; // this is what well use to count down

var numWins = 0;  // counter for the wins/losses
var numLosses = 0;
var animalLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//constructor functions

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


    names = function
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

      // Function will be called when we reset everything
      var reset = function() {
        guessesLeft = 9;
        guessedLetters = [];
        updateLetterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
      }; 
      
       // Execute on page load.
    updateLetterToGuess();
    updateGuessesLeft();


      

        // If we are out of guesses...
      if (guessesLeft === 0) {

        losses++;

         // We'll check if there's a match.
      if (letter === letterToGuess) {

        // If there is then we win and we'll update the HTML to display the win.
        wins++;

}


