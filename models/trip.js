BeTogether.Trip = DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  campingListItems: DS.hasMany('campingListItem', { async: true })
});
