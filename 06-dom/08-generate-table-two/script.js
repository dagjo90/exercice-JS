/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var target = document.getElementById("target");
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');

  for (var i = 0; i < 10; i++) {

    var tr = document.createElement('tr');
    var td = document.createElement('td');

    td.appendChild(document.createTextNode('10 x ' + (i+1) +" = " + (i+1)*10));
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  target.appendChild(table);

})();
