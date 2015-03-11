BeTogether.CampingListItemController= Ember.ObjectController.extend({
  checked: false,
  actions: {
    updateNeedStatus: function(){
      this.set("need", !this.get("need"));
    }
  }

});
