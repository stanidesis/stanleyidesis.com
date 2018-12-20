var fullStoryExpanded = false;

window.addDependencyCallback(function() {
  var $fullStoryIcon = $('#courses-full-story-icon');
  loadjs('/js/jquery.inview.min.js', function() {
    $fullStoryIcon.on('inview', function(event, isInView) {
      if (isInView) {
        $fullStoryIcon.css('opacity', '1');
        $fullStoryIcon.attr('keep-animating', 'true');
        animateStoryIcon();
      } else {
        $fullStoryIcon.attr('keep-animating', 'false');
      }
    });  
  });
  /* Handle clicks to expand */
  var $fullStory = $('#courses-full-story');
  var $fullStorySeparator = $('#courses-full-story-separator');
  $fullStorySeparator.click(function () {
    if (fullStoryExpanded) {
      $fullStoryIcon.attr('keep-animating', 'true');
      $fullStoryIcon.text('+');
      animateStoryIcon();
      /* Collapse the story */
      $fullStory.css('max-height', '0');
      fullStoryExpanded = false;
      animateStoryIcon();
    } else {
      /* Rotate the icon */
      $fullStoryIcon.attr('keep-animating', 'false');
      /* Expand the story */
      $fullStory.css('max-height', $fullStory[0].scrollHeight + 'px');
      $fullStoryIcon.text('-');
      fullStoryExpanded = true;
    }
  });
});

function animateStoryIcon() {
  var $fullStoryIcon = $('#courses-full-story-icon');
  if (fullStoryExpanded || $fullStoryIcon.attr('keep-animating') === 'false') {
    return;
  }
  $fullStoryIcon.animateCss('pulse');
  setTimeout(animateStoryIcon, 3000);
};
