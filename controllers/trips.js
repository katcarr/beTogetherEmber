BeTogether.TripsController = Ember.Controller.extend({
  showTrip: false,
  actions: {
    createTrip: function(){
      if(this.get('tripName')){
        var newTrip = this.store.createRecord('trip', {
          name: this.get("tripName")
        });

        var individualListItem = this.store.createRecord('individualListItem', {
          name: "sleeping-bag", need: false, trip: newTrip, amount: 0
        });
        var individualListItem1 = this.store.createRecord('individualListItem', {
          name: "water-bottle", need: false, trip: newTrip, amount: 0
        });
        var individualListItem2 = this.store.createRecord('individualListItem', {
          name: "down-jacket", need: false, trip: newTrip, amount: 0
        });

        individualListItem.save();
        individualListItem1.save();
        individualListItem2.save();

        newTrip.get("individualListItems").then(function(items){
          items.pushObjects(individualListItem, individualListItem1, individualListItem2);
        });

        var newItem = this.store.createRecord('campingListItem', {
          name: "tent", need: false, trip: newTrip, amount: 0
        });
        var newItem1 = this.store.createRecord('campingListItem', {
          name: "stove", need: false, trip: newTrip, amount: 0
        });
        var newItem2 = this.store.createRecord('campingListItem', {
          name: "tequila", need: false, trip: newTrip, amount: 0
        });
        var newItem3 = this.store.createRecord('campingListItem', {
          name: "ice-axe", need: false, trip: newTrip, amount: 0
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
    },

    showTrip: function(){
      this.set('showTrip', true);
    }
  }
});
