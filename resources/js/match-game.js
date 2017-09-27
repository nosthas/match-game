var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
    //Card Set variables
    var orderedCardSet = [];
    var randomCardsSet = [];

    //Generates the Ordered Card Sets
    for (var i = 1; i <= 8; i++) {
      orderedCardSet.push(i);
      orderedCardSet.push(i);
    }

    while(orderedCardSet.length != 0){
      var randomIndex = Math.floor(Math.random() * (orderedCardSet.length - 1 + 1)) + 1;
      randomCardsSet.push(orderedCardSet[randomIndex - 1]);
      orderedCardSet.splice(randomIndex-1,1);
    }

    return randomCardsSet;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
