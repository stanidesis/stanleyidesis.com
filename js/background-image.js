$('.has-js-background-image').each(function(i, el) {
  var targetOpacity = $(this).attr('data-js-target-opacity');
  var source = $(this).attr('data-js-bg-source');
  var $container = $(this);
  var $here = $(this).contents().first();
  var $tempImg = $('<img/>').attr('src', source).on('load', function() {
    $(this).remove();
    var $bg = $('<div class="js-background-image"></div>');
    $bg.css('background-image', `url(${source})`);
    $bg.css('top', $container.position().top);
    $bg.css('left', $container.position().left);
    $bg.css('height', $container.outerHeight(true));
    $bg.css('z-index', -1);
    $bg.insertBefore($here);
    setTimeout(function() {
      $bg.css('opacity', targetOpacity);
    }, 200);
  })
});

/* This guarantees consistent height for responsive sites */
$(window).resize(function() {
  var $bgImages = $('.js-background-image').each(function(i, elem) {
    var $parent = $(elem).parent().first();
    var position = $parent.position();
    $(elem).css('height', $parent.outerHeight(true))
      .css('left', position.left)
      .css('top', position.top);
  });
})
