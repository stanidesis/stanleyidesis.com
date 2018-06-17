function showHideStore($btn, url) {
  $btn.hide();
  if (url) {
    $btn.attr('href', url);
    $btn.show();
  }
}

window.setupBookModal = function() {
  /* Hide Book-modal when necessary */
  $('#book-modal').find('.modal-background, .modal-close').click(function() {
    $(this).parent().toggleClass('is-active');
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
    $('#book-modal').toggleClass('is-active');
  });
}
