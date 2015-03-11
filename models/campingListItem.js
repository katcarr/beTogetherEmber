BeTogether.CampingListItem = DS.Model.extend({
  trip: DS.belongsTo('trip',{async: true}),
  name: DS.attr()
});
