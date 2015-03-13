BeTogether.CampingListItemController= Ember.ObjectController.extend({
  original: true,
  actions: {
    more: function() {
      this.incrementProperty('amount');
      this.set("need", true);
      this.get('model').save();

      var newCampingListItem = this.store.createRecord('campingListItem',{
        name: this.get("name"), need: true, amount: 1, trip: this.get('trip')
      });

      newCampingListItem.set("original", false);

      newCampingListItem.save();

      var trip = this.get('trip');

      trip.get("campingListItems").then(function(items){
        items.pushObject(newCampingListItem);
      });

    },
    less: function() {
      this.decrementProperty('amount');
      if (this.get('amount') === 0){
        this.set("need", false);
        this.get('model').save();
      }
      if (this.get('amount') < 0) {
        this.set("amount", 0);
      }
    }
  }


});
