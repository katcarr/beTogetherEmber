BeTogether.TripController = Ember.ObjectController.extend({
  list: false,
  actions: {
    startList: function(){
      this.set("list", true);
      var newItem1 = {name: "1-person tent"};
      var newItem2 = {name: "2-person tent"};
      var newItem3 = {name: "3-person tent"};
      var newItem4 = {name: "4-person tent"};
      var newItem5 = {name: "5-person tent"};

      this.get('model').then(function(trip){
        trip.get("campingList").then(function(campingList) {
          campingList.get("items").then(function(items){
            items.pushObject("newItem1");
            items.save();
            campingList.save();
          });
        });
      });

    }
  }
});
