BeTogether.ProfileRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('trip');
  },
  
  controllerName: 'trips'
});
