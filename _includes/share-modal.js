window.addDependencyCallback(setupShareModal);

function showHideShareModal(show) {
  var $modal = $('#share-modal');
  if (show) {
    $modal.addClass('is-active');
    $modal.children('.modal-background').animateCss('fadeIn');
    $modal.children('.modal-content').animateCss('fadeInUp');
    const { cancel } = emojisplosions({
      container: $modal[0],
      emojiCount: () => Math.random() * 20 + 20,
      emojis: ["💖", "💕", "💗", "💓", "💝"],
      physics: { fontSize: { max: 54, min: 24 } },
    });
    setTimeout(cancel, 5000);
  } else {
    $modal.children('.modal-content').animateCss('fadeOutDown');
    $modal.children('.modal-background').animateCss('fadeOut', function() {
      $modal.removeClass('is-active');
    });
  }
}

function setupShareModal() {
  /* Hide Book-modal when necessary */
  $('#share-modal').find('.modal-background, .modal-close').click(function() {
    showHideShareModal(false);
  });
  loadjs(['/js/social-share-media.min.js',
          'https://unpkg.com/emojisplosion/lib/global.js'],
          function() {
    $(`a[data-target="share-modal"]`).click(function() {
      var $button = $(this);
      var shareUrl = $button.attr('data-share-url');
      var shareTitle = $button.attr('data-share-title');
      var shareDescription = $button.attr('data-share-description');
      var shareImageUrl = $button.attr('data-share-image');
      const socialmedia = GetSocialMediaSites_WithShareLinks_OrderedByPopularity();
      const socialmediaurls = GetSocialMediaSiteLinks_WithShareLinks({
      	'url': shareUrl,
        'title': shareTitle,
        'desc': shareDescription,
        'image': shareImageUrl
      });

      var $shareModal = $('#share-modal');
      $shareModal.find('#share-modal-facebook-btn').attr('href', socialmediaurls['facebook']);
      $shareModal.find('#share-modal-twitter-btn').attr('href', socialmediaurls['twitter']);
      $shareModal.find('#share-modal-linkedin-btn').attr('href', socialmediaurls['linkedin']);
      $shareModal.find('#share-modal-email-btn').attr('href', socialmediaurls['email']);
      showHideShareModal(true);
    });
  })
}
