import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CatsUiENV.locationType
});

Router.map(function() {
  this.resource('cats');
});

export default Router;
