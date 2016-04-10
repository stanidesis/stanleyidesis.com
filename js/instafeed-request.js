var userFeed = new Instafeed({
    get: 'user',
    userId: '182831931',
    clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
    resolution: 'low_resolution',
    sortBy: 'most-recent',
    limit: 9 * 2,
    target: 'instagram-tiles',
    template: '<div class="instagram-tile"><div class="instagram-overlay"></div><a href="{{link}}"><img src="{{image}}"/></a></div>'
  });
userFeed.run();