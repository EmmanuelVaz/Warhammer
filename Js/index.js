// Ajoute les classes pour les animations
function BarAnimation() {
    document.getElementById('progress_univers_slide_left').classList.add('bar_Univers');
    document.getElementById('progress_saga_slide_right').classList.add('bar_saga');
    document.getElementById('progress_carte_left').classList.add('bar_pp');
  }
  
  // Check si l'element passé en param est affiché sur l'écran
  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  
  //Regarde si la div competence est affichée toutes les 250ms puis désactive l'interval
  var interval = setInterval(function() {
      if ( checkVisible(document.getElementById('competences')))     {
          BarAnimation();
          clearInterval(interval); // Désactive le SetInterval
      }
  }, 250);