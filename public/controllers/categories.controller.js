'use strict';

app.controller('CategoriesCtrl', ['$scope', '$http', '$stateParams',
  function ($scope, $http, $stateParams) {
    $http.get('/categories')
      .then(
        function success(response) {
          $scope.categories = response.data;
        },
        function error(response) {
          console.log(response.data);
        }
    );
  }
]);