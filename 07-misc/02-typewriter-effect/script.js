/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var target = document.getElementById("target");
    var texte = target.innerHTML;
    var array = texte.split("");
    target.innerHTML ="";
    var i =0;

    function myLoop () {
       setTimeout(function () {
         var span = document.createElement('span');
         span.appendChild(document.createTextNode(array[i]));
         target.appendChild(span);
          i++;
          if (i < array.length) {
             myLoop();
          }
       }, 200);
    }
myLoop();
})();
