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
    'tada',
    'wobble',
    'jello',
  ];
  return attentionGetters[Math.floor(Math.random() * attentionGetters.length)];
}

function isMobileNavActive($mobileNav) {
  var $mNav = $mobileNav || $(SEL_MOBILE_NAV);
  return typeof $mNav.attr('active') !== typeof undefined;
}

function setMobileNavActive(active) {
  var $canActivate = $(SEL_CAN_ACTIVATE);
  if (active) {
    $canActivate.attr('active', '');
  } else {
    $canActivate.removeAttr('active');
  }
}

function postPostProcessing() {
  if ($('aside.post-nav').css('display') == 'none') {
    /* We're on mobile, move the nav content to a new place */
    $('div.post-nav-content').detach().appendTo('div.post-mobile-nav-content-wrapper');
    /* On load, the mobile nav is hidden */
    setMobileNavActive(false);
    var toggleMobileNav = function(event) {
      event.preventDefault();
      var mobileNavActive = isMobileNavActive();
      if (ga) {
        ga('send', 'event', '{{site.ga.categories.resource}}',
        '{{site.ga.actions.click}}', 
        mobileNavActive ? '{{site.ga.labels.hide-nav}}' : '{{site.ga.labels.show-nav}}');
      }
      setMobileNavActive(!mobileNavActive);
    };
    $(SEL_MOBILE_NAV_FAB).click(toggleMobileNav);
    /* When the user taps an anchor link, hide the mobile nav */
    $('div.post-nav-content').find('div.post-nav-toc a').click(function () {
      setMobileNavActive(false);
    });
    /* Change Tawk.To behavior */
    window.onTawkLoad = function() {  
      Tawk_API.hideWidget();
      setupTawkAutohide();
    };
    if (Tawk_API && Tawk_API.hideWidget) {
      Tawk_API.hideWidget();
      setupTawkAutohide();
    }
  } else {
    /* We're on tablet+, lock the nav on scroll */  
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

  /* Setup MP3 Playback */
  var audio = $(SEL_AUDIO)[0];
  audio.onpause = updateControlsToPaused;
  audio.onplay = updateControlsToPlaying;
  audio.onended = function() {
    if (ga) {
      ga('send', 'event', '{{site.ga.categories.playback-resource}}',
      '{{site.ga.actions.click}}', '{{site.ga.labels.finished}}');
    }
    updateControlsToPaused();
  };
  $(SEL_PLAY_PAUSE_WRAPPER).find(SEL_PLAY_PAUSE_CLICK).first().click(function(event) {
    event.preventDefault();
    var audio = $(SEL_AUDIO)[0];
    /* src not set */
    if (audio.src == '') {
      audio.src = audio.dataset.mp3;
      updateControlsToLoading();
      audio.oncanplay = function() {
        audio.play();
      };
      audio.load();
      return;
    }
    /* It's not preloaded, so now we have to load the file */
    if (audio.readyState != 4) {
      return;
    }
    /* Google Analytics */
    if (ga) {
      ga('send', 'event', '{{site.ga.categories.playback-resource}}', '{{site.ga.actions.click}}',
      audio.paused ? '{{site.ga.labels.play}}' : '{{site.ga.labels.pause}}');
    }
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
  $(SEL_FORWARD_WRAPPER).find(SEL_FORWARD_CLICK).click(function(event) {
    event.preventDefault();
    if (ga) {
      ga('send', 'event', '{{site.ga.categories.playback-resource}}', '{{site.ga.actions.click}}', 
      '{{site.ga.labels.fast-forward}}');
    }
    var audio = $(SEL_AUDIO)[0];
    if (isNaN(audio.duration)) {
      return;
    }
    if (audio.currentTime + 30 >= audio.duration) {
      audio.currentTime = 0;
      audio.pause();
      return;
    }
    audio.currentTime += 30;
  });
  $(SEL_REWIND_WRAPPER).find(SEL_REWIND_CLICK).click(function(event) {
    event.preventDefault();
    if (ga) {
      ga('send', 'event', '{{site.ga.categories.playback-resource}}', '{{site.ga.actions.click}}',
      '{{site.ga.labels.rewind}}');
    }
    var audio = $(SEL_AUDIO)[0];
    if (isNaN(audio.duration)) {
      return;
    }
    if (audio.currentTime - 10 <= 0) {
      audio.currentTime = 0;
      return;
    }
    audio.currentTime -= 10;
  });
}

/* Freq. Selectors */
const SEL_AUDIO = '#post-nav-playback-audio';
const SEL_PLAYBACK_WRAPPER = 'div.post-nav-playback-wrapper';
const SEL_REWIND_WRAPPER = 'div.post-nav-playback-action-wrapper-rewind';
const SEL_REWIND_CLICK = 'span.post-nav-playback-action-icon-rewind';
const SEL_REWIND_ICON = 'span.post-nav-playback-action-icon-rewind svg';
const SEL_PLAY_PAUSE_WRAPPER = 'div.post-nav-playback-action-wrapper-play-pause';
const SEL_PLAY_PAUSE_CLICK = 'span.post-nav-playback-action-icon-play-pause';
const SEL_PLAY_PAUSE_ICON = 'span.post-nav-playback-action-icon-play-pause svg';
const SEL_PLAY_PAUSE_TEXT = 'span:last-child';
const SEL_FORWARD_WRAPPER = 'div.post-nav-playback-action-wrapper-forward';
const SEL_FORWARD_CLICK = 'span.post-nav-playback-action-icon-forward';
const SEL_FORWARD_ICON = 'span.post-nav-playback-action-icon-forward svg';
const SEL_MOBILE_NAV = 'div.post-mobile-nav';
const SEL_MOBILE_NAV_BACKDROP = 'div.post-mobile-nav-backdrop';
const SEL_MOBILE_NAV_FAB_WRAPPER = 'div.post-mobile-nav-fab-wrapper';
const SEL_MOBILE_NAV_FAB = 'div.post-mobile-nav-fab';
const SEL_CAN_ACTIVATE = 'div.can-activate';

/* Set to pause icon, enable forward/reverse */
function updateControlsToPlaying() {
  var $playbackWrapper = $(SEL_PLAYBACK_WRAPPER);
  var $playPauseWrapper = $playbackWrapper.find(SEL_PLAY_PAUSE_WRAPPER);
  $playPauseWrapper.removeAttr('disabled');
  $playPauseWrapper.find(SEL_PLAY_PAUSE_TEXT).text('pause');
  var $playPauseIcon = $playPauseWrapper.find(SEL_PLAY_PAUSE_ICON);
  $playPauseIcon.removeClass('fa-spinner');
  $playPauseIcon.removeClass('fa-pulse');
  $playPauseIcon.removeClass('fa-play-circle');
  $playPauseIcon.addClass('fa-pause-circle');
  $playbackWrapper.find(SEL_REWIND_WRAPPER).removeAttr('disabled');
  $playbackWrapper.find(SEL_FORWARD_WRAPPER).removeAttr('disabled');
}

/* Set to play icon, disable forward/reverse */
function updateControlsToPaused() {
  var $playbackWrapper = $(SEL_PLAYBACK_WRAPPER);
  var $playPauseWrapper = $playbackWrapper.find(SEL_PLAY_PAUSE_WRAPPER);
  $playPauseWrapper.removeAttr('disabled');
  $playPauseWrapper.find(SEL_PLAY_PAUSE_TEXT).text('play');
  var $playPauseIcon = $playPauseWrapper.find(SEL_PLAY_PAUSE_ICON);
  $playPauseIcon.removeClass('fa-spinner');
  $playPauseIcon.removeClass('fa-pulse');
  $playPauseIcon.removeClass('fa-pause-circle');
  $playPauseIcon.addClass('fa-play-circle');
  $playbackWrapper.find(SEL_REWIND_WRAPPER).attr('disabled', '');
  $playbackWrapper.find(SEL_FORWARD_WRAPPER).attr('disabled', '');
}

/* Set to spinning, disable all buttons */
function updateControlsToLoading() {
  var $playbackWrapper = $(SEL_PLAYBACK_WRAPPER);
  var $playPauseWrapper = $playbackWrapper.find(SEL_PLAY_PAUSE_WRAPPER);
  $playPauseWrapper.attr('disabled', '');
  $playPauseWrapper.find(SEL_PLAY_PAUSE_TEXT).text('…');
  var $playPauseIcon = $playPauseWrapper.find(SEL_PLAY_PAUSE_ICON);
  $playPauseIcon.removeClass('fa-pause-circle');
  $playPauseIcon.removeClass('fa-play-circle');
  $playPauseIcon.addClass('fa-spinner');
  $playPauseIcon.addClass('fa-pulse');
  $playbackWrapper.find(SEL_REWIND_WRAPPER).attr('disabled', '');
  $playbackWrapper.find(SEL_FORWARD_WRAPPER).attr('disabled', '');
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

function hideTawk() {
  console.log('Hiding that widget');
  Tawk_API.hideWidget();
}

/* Setup listeners to hide the widget whenever possible */
function setupTawkAutohide() {
  Tawk_API.onChatMinimized = hideTawk;
  Tawk_API.onChatEnded = hideTawk;
  Tawk_API.onChatMaximized = hideTawk;
}