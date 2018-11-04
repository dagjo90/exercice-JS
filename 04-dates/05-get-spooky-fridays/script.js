/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

document.getElementById("run").addEventListener("click", displaySpookyDays);
    function displaySpookyDays(year) {
      var year = document.getElementById('year').value;
      var count = 0;
      for (var month = 0; month < 12; month++) {
          var spookyDay = new Date(year,month,13);

          if (spookyDay.getDay() === 5){
            switch (month) {

              case 0 :
              alertMonth = "janvier";
              break;

              case 1 :
              alertMonth = "février";
              break;

              case 2 :
              alertMonth = "mars";
              break;

              case 3 :
              alertMonth = "avril";
              break;

              case 4 :
              alertMonth = "mai";
              break;

              case 5 :
              alertMonth = "juin";
              break;

              case 6 :
              alertMonth = "juillet";
              break;

              case 7 :
              alertMonth = "aout";
              break;

              case 8 :
              alertMonth = "septembre";
              break;

              case 9 :
              alertMonth = "octobre";
              break;

              case 10 :
              alertMonth = "novembre";
              break;

              case 11 :
              alertMonth = "décembre";
              break;
            }
            alert ("Le vendredi 13 " + alertMonth);
         }
      }

  }

})();
