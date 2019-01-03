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
    /* CTA attention getter */
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
  /* Lock nav in place on Tablet+ */
  if ($('div.post-nav-content').css('display') !== 'none') {
    /* We're on desktop */
    var $postMain = $('section.post-main').first();
    var $nav = $('div.post-nav-content').first();
    var topOfNav = $nav.offset().top;
    var topOfPost = $postMain.offset().top;
    var docked = false;
  
    $(window).scroll(function() {
        if(!docked && ($(window).scrollTop() > topOfPost)) {
          $nav.css('position', 'fixed');
          $nav.css('top', (topOfNav - topOfPost) + 'px');
          docked = true;
        } else if (docked && ($(window).scrollTop() <= topOfPost)) {
          $nav.css('position', 'inherit');
          $nav.css('top', '');
          /* Resets the top in case of window size change */
          topOfPost = $postMain.offset().top;
          topOfNav = $nav.offset().top;
          docked = false;
        }
    });
  }
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
  /* Setup save & share buttons */
  var $saveBtn = $('#post-nav-action-save');
  var $shareBtn = $('#post-nav-action-share');
  var $saveDropdown = $('#post-nav-action-dropdown-save');
  var $shareDropdown = $('#post-nav-action-dropdown-share');
  var saveShown = false, shareShown = false;
  $saveBtn.click(function() {    
    if (saveShown) {
      revealNavDropdown($saveDropdown, false);
      enableNavAction($saveBtn, false);
      saveShown = false;
    } else {
      if (shareShown) {
        revealNavDropdown($shareDropdown, false);
        enableNavAction($shareBtn, false);
        shareShown = false;
      }
      revealNavDropdown($saveDropdown, true);
      enableNavAction($saveBtn, true);
      saveShown = true;
    }
  });
  $shareBtn.click(function() {    
    if (shareShown) {
      revealNavDropdown($shareDropdown, false);
      enableNavAction($shareBtn, false);
      shareShown = false;
    } else {
      if (saveShown) {
        revealNavDropdown($saveDropdown, false);
        enableNavAction($saveBtn, false);
        saveShown = false;
      }
      revealNavDropdown($shareDropdown, true);
      enableNavAction($shareBtn, true);
      shareShown = true;
    }
  });
  /* Setup share buttons */
  loadjs(['/js/social-share-media.min.js'], function() {
    var shareUrl = $shareDropdown.attr('data-share-url');
    var shareTitle = $shareDropdown.attr('data-share-title');
    var shareDescription = $shareDropdown.attr('data-share-description');
    var shareImageUrl = $shareDropdown.attr('data-share-image');
    const socialmedia = GetSocialMediaSites_WithShareLinks_OrderedByPopularity();
    const socialmediaurls = GetSocialMediaSiteLinks_WithShareLinks({
      'url': shareUrl,
      'title': shareTitle,
      'desc': shareDescription,
      'image': shareImageUrl
    });

    $shareDropdown.find('a.post-nav-action-dropdown-share-facebook').attr('href', socialmediaurls['facebook']);
    $shareDropdown.find('a.post-nav-action-dropdown-share-twitter').attr('href', socialmediaurls['twitter']);
    $shareDropdown.find('a.post-nav-action-dropdown-share-linkedin').attr('href', socialmediaurls['linkedin']);
    $shareDropdown.find('a.post-nav-action-dropdown-share-email').attr('href', socialmediaurls['email']);
  });
}

function revealNavDropdown($dropDown, reveal) {
  if (reveal) {
    $dropDown.css('display', 'inherit');
  } else {
    $dropDown.css('display', 'none');
  }
}

function enableNavAction($btn, enable) {
  if (enable) {
    $btn.addClass('post-nav-action-button-active');
  } else {
    $btn.removeClass('post-nav-action-button-active');
  }
}