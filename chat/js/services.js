(function() {
  angular
  .module('firstMod')
  .factory('Connection', [
    '$http', function ($http) {
      return $http.get('/js/users.json')
    }
    ])
  .service('Like', function() {
    this.datas = {
      _id: 1,
      avatar: 'img/admin.png',
      username: 'admin'
    };
  })
})();