BeTogether.TripController = Ember.ObjectController.extend({
  lists: false,
  individualList: false,
  groupList: false,


  actions: {
    editGroupList: function(){
      this.set("groupList", !this.get('groupList'));
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

    showCompleteList: function(){
      this.set('lists', !this.get('lists'));
      this.set('individualList', false);
      this.set('groupList', false);
    }

  }
});
