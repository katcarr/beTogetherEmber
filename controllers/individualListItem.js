BeTogether.IndividualListItemController = Ember.ObjectController.extend({
  original: true,
  actions: {
    more: function() {
      this.incrementProperty('amount');
      this.set("need", true);
      this.get('model').save();

      var newIndividualListItem = this.store.createRecord('individualListItem',{
        original: false,
        name: this.get("name"), need: true, amount: 1, trip: this.get('trip')
      });

      newIndividualListItem.save();

      this.get('trip').then(function(trip){
        trip.get("individualListItems").then(function(items){
          items.pushObject(newCampingListItem);
          trip.save();
        });
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
