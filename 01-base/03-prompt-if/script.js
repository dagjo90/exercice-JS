/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var reponse = prompt("Veux-tu du gâteau ?", "Oui/Non");

if (reponse === "Oui" || reponse === "oui") {
    alert("Félicitation, du gateau ça ne se refuse pas !");
    location.reload();
}

else if (reponse === "Non" || reponse === "non") {
    alert("Malotru, du gateau ça ne se refuse pas !!!");
    location.reload();
}

else {
  alert("Veuillez répondre par oui ou par non s'il vous plait!");
  location.reload();
}

})();
