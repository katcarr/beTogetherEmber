BeTogether.CampingListRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('campingList');
  }
});
