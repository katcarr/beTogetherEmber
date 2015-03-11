BeTogether.TripsController = Ember.Controller.extend({
  actions: {
    createTrip: function(){
      var newTrip = this.store.createRecord('trip', {
        name: this.get("tripName")
      });


      var newItem = this.store.createRecord('campingListItem', {
        name: "tent", need: false
      });

      newItem.set("trip", newTrip);

      newItem.save();

      newTrip.get("campingListItems").then(function(items){
        items.pushObject(newItem);
      });

      newTrip.save();

      this.set("tripName", null);
    }
  }
});
