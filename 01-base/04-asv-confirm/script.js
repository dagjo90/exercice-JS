/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var age = prompt("Quel âge as-tu", "age");
    var ville = prompt("Dans quelle ville habites-tu ?","ville");
    var sexe = prompt("De quel sexe es-tu ?", "sexe");
    var recap = prompt("Ces informations sont elles exactes ? \n Avez vous " + age + " ans ? \n Venez vous de " + ville + " ? \n Êtes-vous de sexe " + sexe + " ?", "oui/non");

    if (recap === "oui" || recap === "Oui") {
      alert("Merci pour vos réponses.");
    } else {
      alert("veuillez modifier les informations svp");
      location.reload();
    }
})();
