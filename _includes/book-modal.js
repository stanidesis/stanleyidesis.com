function showHideStore($btn, url) {
  $btn.hide();
  if (url) {
    $btn.attr('href', url);
    $btn.show();
  }
}

function showHideBookModal(show) {
  var $bookModal = $('#book-modal');
  if (show) {
    $bookModal.addClass('is-active');
    $bookModal.children('.modal-background').animateCss('fadeIn');
    $bookModal.children('.modal-content').animateCss('fadeInUp');
  } else {
    $bookModal.children('.modal-content').animateCss('fadeOutDown');
    $bookModal.children('.modal-background').animateCss('fadeOut', function() {
      $bookModal.removeClass('is-active');
    });
  }
}

window.setupBookModal = function() {
  /* Hide Book-modal when necessary */
  $('#book-modal').find('.modal-background, .modal-close').click(function() {
    showHideBookModal(false);
  });
  $(`a[data-target='book-modal']`).click(function() {
    var $link = $(this);
    var $bookModal = $('#book-modal');
    $bookModal.find('img.book-modal-cover').attr('src', $link.attr('data-url-cover-2x3'));
    showHideStore($bookModal.find('a.book-modal-kindle-btn'), $link.attr('data-url-kindle'));
    showHideStore($bookModal.find('a.book-modal-google-play-btn'), $link.attr('data-url-google-play'));
    showHideStore($bookModal.find('a.book-modal-kobo-btn'), $link.attr('data-url-kobo'));
    showHideStore($bookModal.find('a.book-modal-paperback-btn'), $link.attr('data-url-paperback'));
    showHideStore($bookModal.find('a.book-modal-bn-btn'), $link.attr('data-url-bn'));
    showHideStore($bookModal.find('a.book-modal-pdf-mobi-epub-btn'), $link.attr('data-url-pdf-mobi-epub'));
    showHideBookModal(true);
  });
}
