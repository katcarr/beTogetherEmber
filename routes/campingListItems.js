BeTogether.CampingListItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('campingListItem');
  }
});
