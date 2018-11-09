/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var random = Math.floor(Math.random()*100);

    function ask () {

    var choice = prompt("guess a number between 0 and 100", "number");

    if (choice == random) {
      alert("Well played the number is " + random);
      location.reload();
    } else if ( choice > random) {
      alert("The number you chose (" + choice+ ") is bigger");
      ask();
    } else if (choice < random) {
      alert("The number you chose (" + choice + ") is smaller");
      ask();
    } else {
      alert("please enter a valid number");
      ask();
    }
}

ask();
})();
