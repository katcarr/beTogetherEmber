BeTogether.IndividualListItemController = Ember.ObjectController.extend({
  updateNeedStatus: function(key, value){
    if(value === undefined){
      return this.get("need");
    }else {
      if(!this.get("need")){
        this.set('amount',1);
      }
      this.set("need", value);
      this.get("model").save();
      return this.get("need");
    }
  }.property('model.updateNeedStatus'),

  actions: {
    more: function() {
      this.incrementProperty('amount');
    },
    less: function() {
      this.decrementProperty('amount');
    }
  }

});
