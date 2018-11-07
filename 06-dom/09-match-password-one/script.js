/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
      input1.style.border = "1px solid green";
      input2.style.border = "1px solid green";
      alert("bingo");

    } else {
      input1.style.border = "1px solid red";
      input2.style.border = "1px solid red";
      alert("password not matching");
    }
    }
})();
