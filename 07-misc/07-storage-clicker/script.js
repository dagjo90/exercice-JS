/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
  var count = JSON.parse( localStorage.getItem("counter")) ;
  if (isNaN(parseFloat(count))){
    count = 0;
  }
  target.innerHTML = count;
  document.getElementById("increment").addEventListener("click", inputCheck);

 function inputCheck () {
   var target = document.getElementById("target");
   count++;
   target.innerHTML = count;
   localStorage.setItem("counter", JSON.stringify(count));

}

})();
