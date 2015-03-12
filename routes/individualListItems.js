BeTogether.IndividualListItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('individualListItems');
  }
});
