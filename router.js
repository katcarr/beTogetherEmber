BeTogether.Router.map(function(){
  this.resource('home', {path: '/'});
  this.resource('profile', function(){
    this.resource('trip', {path: 'trips/:name'});
  });
});
