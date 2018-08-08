window.addDependencyCallback(function() {
  var $tawkToButton = $('#navbar-talk-to-stanley');
  if ($tawkToButton.length) {
    setTimeout(function() {
      $tawkToButton.css('opacity', '1').animateCss('jackInTheBox', animateChatButton);
    },2000);
  }
});

function animateChatButton() {
  var attentionGetters = [
    'bounce',
    'flash',
    'pulse',
    'rubberBand',
    'shake',
    'swing',
    'swing',
    'tada',
    'wobble',
    'jello',
  ];
  setTimeout(function() {
     $('#navbar-talk-to-stanley').animateCss(attentionGetters[Math.floor(Math.random() * attentionGetters.length)], animateChatButton);
  }, 4000);
};

/* Get all "navbar-burger" elements */
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

/* Check if there are any navbar burgers */
if ($navbarBurgers.length > 0) {
  /* Add a click event on each of them */
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {

      /* Get the target from the "data-target" attribute */
      var target = $el.dataset.target;
      var $target = document.getElementById(target);

      /* Toggle the class on both the "navbar-burger" and the "navbar-menu" */
      $el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
}
