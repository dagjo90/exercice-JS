/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var target = document.getElementById("target");
var texte = target.innerHTML;
var array = texte.split("");

function wave () {

target.innerHTML ="";

for (var i = 0; i < array.length; i++) {

  var span = document.createElement('span');
  span.classList.add("test");
  span.appendChild(document.createTextNode(array[i]));
  target.appendChild(span);
  }

var test = document.getElementsByClassName("test");

for (var l = 0; l < test.length; l++) {
    var j = Math.floor(Math.random()*20);
    test[l].style.fontSize = (25 + j) + "px";
    console.log(j);
}
}
wave();
