/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

document.getElementById("run").addEventListener("click", displayAge);

    function displayAge () {
    var dobDay = document.getElementById('dob-day').value;
    var dobMonth = document.getElementById('dob-month').value;
    var dobYear = document.getElementById('dob-year').value;

    var ageY = year - dobYear;
    var ageM = (month - dobMonth) + 1 /* compensation : month = 0->11 et dob-month = 1->12*/;

    if (ageM < 0 || ageM === 0 && day < dobDay) {
      ageY -= 1;
    }

alert(ageY);
}
})();
