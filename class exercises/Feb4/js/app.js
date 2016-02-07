  var app = angular.module('basketball', [ ]);

  app.controller ('BasketballController', function($scope) {
    // $scope.sortType = "last";
    $scope.sortReverse = false;
    $scope.searchPlayers = "";
    this.players = data;
  });

  app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
