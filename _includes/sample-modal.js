function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function showHideSampleModal(show) {
  var $modal = $('#sample-modal');
  if (show) {
    $modal.addClass('is-active');
    $modal.children('.modal-background').animateCss('fadeIn');
    $modal.children('.modal-content').animateCss('fadeInUp');
  } else {
    $modal.children('.modal-content').animateCss('fadeOutDown');
    $modal.children('.modal-background').animateCss('fadeOut', function() {
      $modal.removeClass('is-active');
    });
  }
}

window.setupSampleModal = function() {
  /* Hide Book-modal when necessary */
  $('#sample-modal').find('.modal-background, .modal-close').click(function() {
    showHideSampleModal(false)
  });

  $(`a[data-target='sample-modal']`).click(function() {
    var $link = $(this);
    var $sampleModal = $('#sample-modal');
    $sampleModal.find('img.sample-modal-img').attr('src', $link.attr('data-url-img-2x3'));
    $sampleModal.find('span.sample-span-title').text($link.attr('data-title'));
    $sampleModal.find('input.sample-input-title').attr('name', $link.attr('data-title'));
    $sampleModal.find('input.sample-input-type').attr('name', $link.attr('data-type'));
    /* Setup name input watching */
    $sampleModal.find(`input[type='text']`).change(function() {
      var $name = $(this);
      var $help = $sampleModal.find('p.sample-help-name');
      var $email = $sampleModal.find(`input[type='email']`);
      var enableSubmit = validateEmail($email.val());
      if ($name.val().length === 0) {
        enableSubmit = false;
        $name.addClass('is-danger');
        $help.toggleClass('is-invisible');
      } else {
        $help.toggleClass('is-invisible');
        $name.addClass('is-success');
      }
      $sampleModal.find('button').prop('disabled', !enableSubmit);
    });
    /* Setup email input watching */
    $sampleModal.find(`input[type='email']`).change(function() {
      var $email = $(this);
      var $help = $sampleModal.find('p.sample-help-email');
      var $name = $sampleModal.find(`input[type='text']`);
      var enableSubmit = $name.val().length > 0;
      if (!validateEmail($email.val())) {
        enableSubmit = false;
        $email.addClass('is-danger');
        $help.toggleClass('is-invisible');
      } else {
        $help.toggleClass('is-invisible');
        $email.addClass('is-success');
      }
      $sampleModal.find('button').prop('disabled', !enableSubmit);
    });
    showHideSampleModal(true)
  });
}
