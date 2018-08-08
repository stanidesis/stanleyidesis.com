function showHideImageModal(show) {
  var $bookModal = $('#image-modal');
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

window.setupImageModal = function() {
  /* Hide Book-modal when necessary */
  $('#image-modal').find('.modal-background, .modal-close').click(function() {
    showHideImageModal(false);
  });
  $(`a[data-target='image-modal']`).click(function() {
    var $link = $(this);
    var $imageModal = $('#image-modal');
    $imageModal.find('img').attr('src', $link.attr('data-image-modal-url'));
    showHideImageModal(true);
  });
}
