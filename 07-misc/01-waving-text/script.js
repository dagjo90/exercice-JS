/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById("target").value;
    var array = JSON.parse("[" + target + "]");

    for (var i = 0; i < array.length; i++) {
      array[i].style.fontSize = "17-large";
    }

})();
