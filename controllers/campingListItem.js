BeTogether.CampingListItemController= Ember.ObjectController.extend({
  updateNeedStatus: function(key,value){
      if(value === undefined){
        return this.get("need");
      }else {

        if(!this.get("need")){
          this.set('amount',1);
        }
        else{
          this.set('amount', 0);
        }

        this.set("need",value);
        this.get('model').save();
        return this.get("need");
      }
  }.property('model.updateNeedStatus'),

  actions: {
    more: function() {
      this.incrementProperty('amount');
      this.set("need", true);
      this.get('model').save();
      this.get("updateNeedStatus");
    },
    less: function() {
      this.decrementProperty('amount');
    }
  }


});
