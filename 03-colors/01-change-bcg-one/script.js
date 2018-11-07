/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



 document.getElementById("red").addEventListener("click", red);
 document.getElementById("green").addEventListener("click", green);
 document.getElementById("yellow").addEventListener("click", yellow);
 document.getElementById("blue").addEventListener("click", blue);

 function red (){
    document.documentElement.style.backgroundColor = "red";
}
  function green (){
    document.documentElement.style.backgroundColor = "green";
}
  function yellow (){
    document.documentElement.style.backgroundColor = "yellow";
}
  function blue (){
    document.documentElement.style.backgroundColor = "blue";
}
