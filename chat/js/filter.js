(function() {
  angular
  .module('firstMod')
  .filter ('filterDate', function() {
    return function (time) {
      return moment(time).fromNow();
    }
  })
})();