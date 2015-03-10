BeTogether.TripsController = Ember.Controller.extend({
  actions: {
    createTrip: function(){
      var newTrip = this.store.createRecord('trip', {
        name: this.get("tripName")
      });
      newTrip.save();
      this.set("tripName", null);
    }
  }
});
