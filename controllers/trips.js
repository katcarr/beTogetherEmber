BeTogether.TripsController = Ember.Controller.extend({
  actions: {
    createTrip: function(){
      var newTrip = this.store.createRecord('trip', {
        name: this.get("tripName")
      });


      var newItem = this.store.createRecord('campingListItem', {
        name: "tent"
      });

      newItem.set("trip", newTrip);

      newItem.save();

      newTrip.get("campingListItems").then(function(items){
        items.pushObject(newItem);
      });

      newTrip.save();
      //
      // newItem.get('trip').then(function(trip){
      //   trip.save();
      // });

      this.set("tripName", null);
    }
  }
});
