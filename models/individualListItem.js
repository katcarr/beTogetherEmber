BeTogether.IndividualListItem = DS.Model.extend({
  trip: DS.belongsTo('trip',{async: true}),
  need: DS.attr(),
  name: DS.attr(),
  amount: DS.attr()
});
