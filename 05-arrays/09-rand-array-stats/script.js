/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById("run").addEventListener("click", display);

  function display () {
    var numbers = [];
    for (var numberIndex = 0; numberIndex < 10; numberIndex ++) {
      numbers.push(Math.floor(Math.random() * 100));
    }

  for (var i = 0; i < numbers.length; i ++) {
    var l =  i + 1;
    document.getElementById("n-" + l).innerHTML = numbers[i];
  }

  var min = Math.min.apply(null,numbers);
  document.getElementById("min").innerHTML = min;

  var max = Math.max.apply(null,numbers);
  document.getElementById("max").innerHTML = max;

  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  document.getElementById("sum").innerHTML = sum;

  var average = sum / numbers.length;
  document.getElementById("average").innerHTML = average;
}
})();
