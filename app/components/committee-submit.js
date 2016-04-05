import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    comSearch() {
      this.sendAction('comSearch');
    }
  }
});
