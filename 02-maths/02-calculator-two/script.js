/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElememntById("element-id").value

    var performOperation = function(operation) {

      var one = document.getElementById("op-one").value;
      var two = document.getElementById("op-two").value;

        switch (operation) {

          case "addition" :
          alert(parseFloat(one) + parseFloat(two));
          break;

          case "substraction" :
          alert(parseFloat(one) - parseFloat(two));
          break;

          case "multiplication" :
          alert(parseFloat(one) * parseFloat(two));
          break;

          case "division" :
          alert(parseFloat(one) / parseFloat(two));
          break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
