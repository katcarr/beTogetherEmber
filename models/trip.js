BeTogether.Trip = DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  campingList: DS.belongsTo('campingList', { async: true })
});
