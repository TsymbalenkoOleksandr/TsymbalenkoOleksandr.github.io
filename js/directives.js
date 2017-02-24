(function() {
  angular
  .module('firstMod')
  .directive('bottomBox', function () {
    return {
      restrict: 'E',
      templateUrl: 'bottom-box.html'
    };
  })
  .directive('user', function () {
    return {
      restrict: 'E',
      templateUrl: 'user.html'
    };
  })
  .directive('wraper', function () {
    return {
      restrict: 'E',
      controller: 'flow',
      controllerAs: 'main'
    };
  });
})();