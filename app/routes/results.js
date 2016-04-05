import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=858d9aa76d2144b196ed0ce17edd5954&zip=' + params.zip;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
  }
});
