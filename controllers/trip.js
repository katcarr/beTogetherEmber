BeTogether.TripController = Ember.ObjectController.extend({
  list: false,
  actions: {
    showList: function(){
      this.set("list", true);
    }
  }
});
