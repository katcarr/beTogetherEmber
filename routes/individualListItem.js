BeTogether.IndividualListItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('individualListItem', params.individualListItem_id);
  }
});
