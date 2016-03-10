app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'My Own Title';
  $scope.promo = 'Austin 3:16';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08')
  }
}]);
