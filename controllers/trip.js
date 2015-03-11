BeTogether.TripController = Ember.ObjectController.extend({
  list: false,
  actions: {
    startList: function(){
      this.set("list", true);
    }
  }
});
