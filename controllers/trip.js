BeTogether.TripController = Ember.ObjectController.extend({
  list: false,
  individualList: false,

  actions: {
    startList: function(){
      this.set("list", !this.get('list'));
    },

    editIndividualList: function(){
      this.set("individualList", !this.get("individualList"));
    },

    addItem: function(itemType){
      var addedItem = this.store.createRecord(itemType, {
        name: this.get('itemName'),
        need: true,
        trip: this.get('model')
      });
      addedItem.save();
      this.get(itemType + "s").then(function(items){
        items.pushObject(addedItem);
      });

      this.get('model').save();
      this.set('itemName', null);
    },

    addCampItems: function(){
      this.set('list', false);

    }
  }
});
