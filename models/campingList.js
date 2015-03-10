BeTogether.CampingList = DS.Model.extend({
  trip: DS.belongsTo('trip',{async: true}),
  items: DS.hasMany('items', {async: true})
});
