/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var input = document.getElementById("pass-one");
  var string = document.getElementById("pass-one").value;
  input.maxLength = 10;

    input.onkeyup = function() {
      var count = document.getElementById("counter");
      string = document.getElementById("pass-one").value;
      count.textContent = (string.length) + "/10";
    };

})();
