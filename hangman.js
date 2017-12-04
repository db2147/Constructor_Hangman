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
     
    }
}


