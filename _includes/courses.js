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
      /* Reset rotation icon */
      $fullStoryIcon.removeClass('courses-full-story-icon-rotated'); 
      $fullStoryIcon.attr('keep-animating', 'true');
      animateStoryIcon();
      /* Collapse the story */
      $fullStory.css('max-height', '0');
      fullStoryExpanded = false;     
    } else {
      /* Rotate the icon */
      $fullStoryIcon.addClass('courses-full-story-icon-rotated');
      $fullStoryIcon.attr('keep-animating', 'false');
      /* Expand the story */
      $fullStory.css('max-height', $fullStory[0].scrollHeight + 'px');
      fullStoryExpanded = true;
    }
  });
});

function animateStoryIcon() {
  var $fullStoryIcon = $('#courses-full-story-icon');
  if (fullStoryExpanded || $fullStoryIcon.attr('keep-animating') === 'false') {
    return;
  }
  $fullStoryIcon.animateCss('fadeInDown');
  setTimeout(animateStoryIcon, 3000);
};
