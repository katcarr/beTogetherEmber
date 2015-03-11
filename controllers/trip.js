BeTogether.TripController = Ember.ObjectController.extend({
  list: false,
  actions: {
    startList: function(){
      this.set("list", true);
    },

    addItem: function(){
      var addedItem = this.store.createRecord("campingListItem", {
        name: this.get('itemName'),
        need: true,
        trip: this.get('model')
      });
      addedItem.save();
        this.get("campingListItems").then(function(items){
          items.pushObject(addedItem);
        });
          this.set('itemName', null);
    }

  }
});
