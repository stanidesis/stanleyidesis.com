/** When using, remember to supply exitPopupCookie and exitPopupExp */
window.addDependencyCallback(function() {
  loadjs('/js/glio.min.js', function() {
    window.exitPopupShown = exitPopupCookie && Cookies.get(exitPopupCookie) && defaultBehavior;
    var revealExitPopup = function() {
      if (window.exitPopupShown) {
        return;
      }
      window.exitPopupShown = true;
      if (exitPopupCookie && exitPopupExp) {
        Cookies.set(exitPopupCookie, 'shown', {expires: exitPopupExp});
      }
      setTimeout(function() {
        var $exitPopup = $('#exit-popup');
        $exitPopup.addClass('is-active');
        $exitPopup.find('.modal-background').animateCss('fadeIn');
        $exitPopup.find('.modal-content').animateCss('fadeInUp');
      }, 500);
    };
    /* Hide on click/tap outside */
    $('#exit-popup').find('.modal-background, .modal-close').click(function() {
      $exitPopup = $(this).parent();
      $exitPopup.find('.modal-content').animateCss('fadeOutDown');
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
