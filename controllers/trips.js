BeTogether.TripsController = Ember.Controller.extend({
  actions: {
    createTrip: function(){
      var newTrip = this.store.createRecord('trip', {
        name: this.get("tripName")
      });
      var newList = this.store.createRecord('campingList');
      newList.save().then(function(newList) {
        newTrip.set('campingList', newList);
        newTrip.save()
      });
      this.set("tripName", null);
    }
  }
});
