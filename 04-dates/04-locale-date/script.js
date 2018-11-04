/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    var dayDate = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var target = document.getElementById('target');

    target.textContent = day + " " + dayDate +" " + month + " " + year + "," + hours + ':' + minutes + ':' + seconds;

    var interval = setInterval(function() {
      date = new Date();
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();

      if (hours <10) {
        hours = "0" + hours;
    }  if (minutes <10) {
        minutes = "0" + minutes;
    }  if (seconds <10) {
        seconds = "0" + seconds;
    }

    switch (day) {

      case 0 :
      day = "Dimanche";
      break;

      case 1 :
      day = "Lundi";
      break;

      case 2 :
      day = "Mardi";
      break;

      case 3 :
      day = "Mercredi";
      break;

      case 4 :
      day = "Jeudi";
      break;

      case 5 :
      day = "Vendredi";
      break;

      case 6 :
      day = "Samedi";
      break;

    }

    switch (month) {

      case 0 :
      month = "janvier";
      break;

      case 1 :
      month = "février";
      break;

      case 2 :
      month = "mars";
      break;

      case 3 :
      month = "avril";
      break;

      case 4 :
      month = "mai";
      break;

      case 5 :
      month = "juin";
      break;

      case 6 :
      month = "juillet";
      break;

      case 7 :
      month = "aout";
      break;

      case 8 :
      month = "septembre";
      break;

      case 9 :
      month = "octobre";
      break;

      case 10 :
      month = "novembre";
      break;

      case 11 :
      month = "décembre";
      break;
    }



    target.textContent = day + " " + dayDate +" " + month + " " + year + "," + hours + ':' + minutes + ':' + seconds;
    }, 1000);

})();
