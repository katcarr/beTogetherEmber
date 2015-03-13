BeTogether.CampingListItemController= Ember.ObjectController.extend({


  actions: {
    more: function() {
      this.incrementProperty('amount');
      this.set("need", true);
      this.get('model').save();

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
