BeTogether.CampingListItemController= Ember.ObjectController.extend({
  updateNeedStatus: function(key,value){
      if(value === undefined){
        return this.get("need");
      }else {
        this.set("need",value);
        this.get('model').save();
      }
  }.property('model.updateNeedStatus')

});
