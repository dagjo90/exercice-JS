/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById("run").addEventListener("click", inputCheck);


function inputCheck () {



    var input1 = document.getElementById("pass-one");
    var input2 = document.getElementById("pass-two");

    if (input1.value === input2.value) {
      alert("bingo");

    } else {

      input1.classList.add("error");
      input2.classList.add("error");

    }
    }

})();
