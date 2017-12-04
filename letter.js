var letter = require(inquirer);

var Lettersearch = function user(word, length) {
    this.word = word;
    this.length = length;
   

    this.getletter = function() {

        letter.find({ search: this.places})
                    function(err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
                    };
    };
}

var newLetter = new Lettersearch(process.argv[2], process.argv[3]);
newletter.getletter();
module.exports();









module.exports();