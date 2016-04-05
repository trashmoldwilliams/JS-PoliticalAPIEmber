import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var output = [];
    for(var i = 1; i <= 2; i++) {
      var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&per_page=50&page=' + i + '&apikey=858d9aa76d2144b196ed0ce17edd5954';
       Ember.$.getJSON(url).then(function(responseJSON) {
        for(var j = 0; j < responseJSON.results.length; j++) {
          output.push(responseJSON.results[j].name);
        }
        setTimeout(function(){ console.log( output)},1100);

      });
    }
  }
});
