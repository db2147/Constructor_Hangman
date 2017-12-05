var inquirer = require('inquirer');

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


