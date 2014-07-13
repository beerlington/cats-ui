import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('cat');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('newCat', this.store.createRecord('cat'));
  }
});
