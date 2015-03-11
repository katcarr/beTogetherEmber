BeTogether.CampingListItemRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('campingListItem', params.campingListItem_id);
  }
});
