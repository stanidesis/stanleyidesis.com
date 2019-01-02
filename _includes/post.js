window.addDependencyCallback(function () {
  loadjs('/js/jquery.inview.min.js', function() {
    $('#share-button').on('inview', function(event, isInView) {
      var $shareButton = $('#share-button');
      if (isInView) {
        $shareButton.css('opacity', 1);
        $shareButton.animateCss('jackInTheBox');
        $shareButton.attr('keep-animating', 'true');
        animateShareButton();
      } else {
        $shareButton.css('opacity', 0);
        $shareButton.attr('keep-animating', 'false');
      }
    });
    
    $('div.post-content .post-cta').each(function(which, el) {
      var $cta = $(this);
      $cta.one('inview', function(event, isInView) {
        $cta.css('opacity', 1);
        $cta.animateCss(getRandomAttentionGetter());
      });
    });
  });
  postPostProcessing();
});

function animateShareButton() {
  setTimeout(function() {
    var $shareButton = $('#share-button');
    if ($shareButton.attr('keep-animating') === 'false') {
      return
    }
    $shareButton.animateCss(getRandomAttentionGetter(), animateShareButton);
  }, 1000);
};

function getRandomAttentionGetter() {
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
  return attentionGetters[Math.floor(Math.random() * attentionGetters.length)];
}

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
