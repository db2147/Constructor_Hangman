var word = require(inquirer);

var Wordsearch = function user(people, places, things) {
    this.people = people;
    this.places = places;
    this.things = things;

    this.getword = function() {

        word.find({ search: this.places})
                    function(err, result) {
            if (err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
                    };
    };
}

var newWord = new Wordsearch(process.argv[2], process.argv[3]);
newWord.getword();
module.exports();