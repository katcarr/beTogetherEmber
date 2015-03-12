BeTogether.IndividualListItemController = Ember.ObjectController.extend({
  amount: 0,
  updateNeedStatus: function(key, value){
    if(value === undefined){
      return this.get("need");
    }else {
      this.set("need", value);
      this.get("model").save();
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
