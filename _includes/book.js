window.dependenciesReady = function() {
  window.setupBookModal();
  window.setupSampleModal();

  /* Setup scroll tracking, might move this to nav.js if necessary */
  var $navbar = $('.navbar').first();
  var topOfNav = $navbar.offset().top;
  var height = $navbar.outerHeight();
  var $bookNavContent = $('.book-nav-content');

  $(window).scroll(function() {
    if($(window).scrollTop() > (topOfNav + height)) {
       $bookNavContent.css('position', 'fixed');
       $bookNavContent.css('top', '2rem');
    } else {
       $bookNavContent.css('position', 'inherit');
       $bookNavContent.css('top', '0');
    }
  });

  /* Check for mobile nav, fix it in position if necessary */
  var $bookNavMobile = $('.book-nav-mobile').first();
  if ($bookNavMobile.css('display') !== 'none') {
    /* We're on Mobile */
    $('main').css('padding-bottom', $bookNavMobile.outerHeight());
  }
}
