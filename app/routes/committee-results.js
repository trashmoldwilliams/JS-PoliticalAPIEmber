import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log("test");
    var output = ["stringTest"];
    for(var i = 1; i <= 5; i++) {
     var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&page=' + i + '&apikey=858d9aa76d2144b196ed0ce17edd5954';
      Ember.$.getJSON(url).then(function(responseJSON) {
      for(var j = 0; j < responseJSON.results.length; j++) {
         output.push(responseJSON.results[j].name);
       }
     });
   }
   console.log(output);
   return output;
  }
});
