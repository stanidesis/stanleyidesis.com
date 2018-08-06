window.addDependencyCallback(function() {
  loadjs('/js/glio.min.js', function() {
    window.exitPopupShown = false;
    var revealExitPopup = function() {
      if (window.exitPopupShown) {
        return;
      }
      /* TODO: Cookie that saves this for a bit... */
      window.exitPopupShown = true;
      setTimeout(function() {
        var $exitPopup = $('#exit-popup');
        $exitPopup.addClass('is-active');
        $exitPopup.find('.modal-background').animateCss('fadeIn');
        $exitPopup.find('.modal-content').animateCss('zoomIn');
      }, 500);
    };
    /* Hide on click/tap outside */
    $('#exit-popup').find('.modal-background').click(function() {
      $exitPopup = $(this).parent();
      $exitPopup.find('.modal-content').animateCss('zoomOut');
      $exitPopup.find('.modal-background').animateCss('fadeOut', function() {
        $exitPopup.removeClass('is-active');
      });
    });
    glio.config.centerTopHeight = 20;
    glio.config.heightTopLeft = 50;
    glio.config.heightTopRight = 50;
    glio.init(
      [ 'top', revealExitPopup ],
      [ 'top-left', revealExitPopup ],
      [ 'bottom-left', revealExitPopup ],
      [ 'bottom-right', revealExitPopup ],
    );
  });
});
