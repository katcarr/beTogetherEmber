BeTogether.Item = DS.Model.extend({
  campingList: DS.belongsTo('campingList',{async: true}),
  name: DS.attr()
});
