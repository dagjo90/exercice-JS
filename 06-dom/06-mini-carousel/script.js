/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    var i = 0;
    var imgSrc = document.getElementsByTagName("img")[0].getAttribute("src");
    document.getElementById("next").addEventListener("click", loadImg);

    function loadImg() {
      if (i < gallery.length -1) {
      i++;
      imgSrc = document.getElementsByTagName("img")[0].src=gallery[i];
    } else {
        i = 0;
        imgSrc = document.getElementsByTagName("img")[0].src=gallery[i];
      }
    }


})();
