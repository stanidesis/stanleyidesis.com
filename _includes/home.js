window.addDependencyCallback(function() {
  window.setupBookModal();
  if ($('#talents-level p').first().is(':hidden')) {
    loadjs('https://unpkg.com/tippy.js@3/dist/tippy.all.min.js');
  }
});
