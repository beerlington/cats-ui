import Ember from 'ember';

export default Ember.ArrayController.extend({
  persistedCats: function() {
    return this.filterBy('id');
  }.property('@each.id'),
  uploading: false,
  actions: {
    createCat: function() {
      var _this = this;

      this.get('newCat').save().then(function() {
        _this.set('newCat', _this.store.createRecord('cat'));
      });
    }
  }
});
