BeTogether.CampingListRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('campingList', params.campingList_id);
  }
});
