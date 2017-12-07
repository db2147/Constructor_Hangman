var Letter = require("./Letter.js");


function Word(word) {
    this.word = word;
    this.wordArray = this.word.split('');
    this.wordLength = this.word.length;
    this.wordState = function () {
        var arr = this.wordArray;
        var letterArr = arr.map(function (val) {
            return new Letter(val);
        });
        return letterArr;
    }
}

module.exports = Word;