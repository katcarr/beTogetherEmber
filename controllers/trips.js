BeTogether.TripsController = Ember.Controller.extend({
  actions: {
    createTrip: function(){
      var newTrip = this.store.createRecord('trip', {
        name: this.get("tripName")
      });


      var newItem = this.store.createRecord('campingListItem', {
        name: "tent", need: false, trip: newTrip
      });
      var newItem1 = this.store.createRecord('campingListItem', {
        name: "stove", need: false, trip: newTrip
      });
      var newItem2 = this.store.createRecord('campingListItem', {
        name: "tequila", need: false, trip: newTrip
      });
      var newItem3 = this.store.createRecord('campingListItem', {
        name: "ice-axe", need: false, trip: newTrip
      });

      newItem.save();
      newItem1.save();
      newItem2.save();
      newItem3.save();

      newTrip.get("campingListItems").then(function(items){
        items.pushObjects(newItem, newItem1, newItem2, newItem3);

      });

      newTrip.save();

      this.set("tripName", null);
    }
  }
});
