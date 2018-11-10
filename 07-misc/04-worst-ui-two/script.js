/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var one = document.getElementById("part-one");
  var two = document.getElementById("part-two");
  var three = document.getElementById("part-three");
  var four = document.getElementById("part-four");
  var target = document.getElementById("target");

  var oneValue = 460;
  var twoValue = 0;
  var threeValue = 0;
  var fourValue = 0;

  function displayNum() {
    one.innerHTML = oneValue;
    two.innerHTML = twoValue;
    three.innerHTML = threeValue;
    four.innerHTML = fourValue;

      if (twoValue < 10) {
      two.innerHTML = "0" + twoValue;
    } if(threeValue < 10) {
      three.innerHTML = "0" + threeValue;
    } if(fourValue < 10) {
      four.innerHTML = "0" + fourValue;
    }

  target.innerHTML = "+" + oneValue.toString() + two.innerHTML + three.innerHTML + four.innerHTML;
}

  one.addEventListener("click", function() {
    oneValue++;
    displayNum();
  });

  two.addEventListener("click", function() {
    twoValue++;
    displayNum();
  });

  three.addEventListener("click", function() {
    threeValue++;
    displayNum();
  });

  four.addEventListener("click", function() {
    fourValue++;
    displayNum();
  });

displayNum();

})();
