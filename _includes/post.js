window.addDependencyCallback(function () {
  loadjs('/js/background-image.js');
  postPostProcessing();
});

function postPostProcessing() {
  /* Adds a dropcap to the first letter */
  $('.post-content').first().find('p').first().addClass('post-first-paragraph');
  /* Convert images to clickable light-boxes */
  $('.post-content img').each(function(which, el) {
    var $img = $(this);
    var $imageLink = $('<a></a>');
    $img.before($imageLink);
    $img.remove();

    $imageLink.prepend($img);
    $imageLink.attr('data-target', 'image-modal');
    $imageLink.attr('data-image-modal-url', $img.attr('src'));
  });
  window.setupImageModal();
}
