const request = require('request');
/* All Helper Functions Belong Here
   Use callbacks to return values back to the routes */

// Helper functions for Yelp API
exports.getYelpToken = function(cb){
}

exports.queryYelp = function(query, cb){
}

exports.searchEventBrite = function(category, query, lat, long, cb) {
  request('https://www.eventbriteapi.com/v3/events/search/' +
    '?location.latitude=' + lat +
    '&location.longitude=' + long +
    '&location.within=100mi' +
    '&categories=' + category +
    '&q=' + query +
    '&token=UQOCU57TT67WA4W7V6RE', function(error, res, req) {
      cb(JSON.parse(res.body));
  });
}
