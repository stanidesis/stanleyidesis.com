// let getUserFeed = function(target, userId, clientId, limit){
//   var userFeed = new Instafeed({
//     target: target,
//     get: 'user',
//     userId: userId,
//     clientId: clientId,
//     sortBy: 'most-recent',
//     resolution: 'standard_resolution',
//     limit: limit,
//     template: '<div class="instagram-feed-item"> \
//       <a href=\"{{link}}\"> \
//         <img class="img-responsive img-rounded" src="{{image}}"/> \
//       </a> \
//       <p>{{likes}} | {{caption}}</p> \
//     </div>'
//   });
//   userFeed.run();
// }

let getUserFeed = function(target, userId, clientId, limit){
  var userFeed = new Instafeed({
    target: target,
    get: 'user',
    userId: userId,
    clientId: clientId,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    limit: limit,
    template: '<div class="instagram-item"><div class="instagram-wrapper1"><div class="instagram-wrapper2"><img class="img-responsive" src="{{image}}"/></div><p><a href="{{link}}" target="_blank">{{caption}}</a></p><p>A photo posted by Stanley Idesis (@sisedi)</p></div></div>'
  });
  userFeed.run();
}