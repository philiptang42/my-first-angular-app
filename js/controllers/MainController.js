app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'My Own Title';
  $scope.promo = 'Austin 3:16';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpeg'
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpeg'
    }
  ]
}]);
