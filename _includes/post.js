window.addDependencyCallback(function () {
  loadjs('/js/background-image.js');
  postPostProcessing();
});

function postPostProcessing() {
  /* Adds a dropcap to the first letter */
  $('.content').first().find('p').first().addClass('post-first-paragraph');
}
