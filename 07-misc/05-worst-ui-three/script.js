/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

var allButtons = document.getElementsByTagName('button');
var target = document.getElementById('target');
var timerList = [0,0,0,0];
var valueTabs = [];

Array.from(allButtons).forEach(function(button){
var indexButton = Array.from(allButtons).indexOf(button);
var input = document.getElementById(button.id.substring(4,button.id.length));
var max = input.getAttribute('data-max');
var min = input.getAttribute('data-min');
valueTabs.push(input.value);
timerList[indexButton] = setInterval(incrementInput, 50);
var timer = timerList[indexButton];

function incrementInput(){
  input.value < max ? input.value++ : input.value = min;
  if(input.value.length===1){
    input.value = "0"+input.value;
  }
  valueTabs[indexButton] = input.value;
  target.innerText = "+"+valueTabs[0]+valueTabs[1]+valueTabs[2]+valueTabs[3];
}

function stopIncrement(){
  clearInterval(timer);
  if(input.value.length===1){
    input.value = "0"+input.value;
  }
  button.innerHTML = "Start";
}

button.addEventListener('click', function(){

  timer = timerList[indexButton];
  if(timer>0){
    stopIncrement();
    timerList[indexButton] = 0;
  }else{
    timerList[indexButton] = setInterval(incrementInput, 50);
    button.innerHTML = "Stop";
  }
})
})
})();
// j'ai repris le code de Kevin
