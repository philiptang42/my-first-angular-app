app.controller('MainController',
['$scope', function($scope) {
  $scope.title = 'My Own Title';
  $scope.promo = 'Austin 3:16';
  $scope.products = [
    {
      name: 'The Book of Trees',
      price: 19,
      pubdate: new Date('2014', '03', '08'),
      cover: 'img/the-book-of-trees.jpeg',
      likes: 0
    },
    {
      name: 'Program or be Programmed',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/program-or-be-programmed.jpeg',
      likes: 0
    },
    {
      name: 'Book 3',
      price: 666,
      pubdate: new Date('2000', '06', '06'),
      cover: '',
      likes: 0
    },
    {
      name: 'Book 4',
      price: 777,
      pubdate: new Date('1999', '12', '12'),
      cover: '',
      likes: 0
    }
  ];
    $scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
    };
}]);
