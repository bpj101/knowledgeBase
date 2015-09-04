'use strict';

app.controller('ArticlesCtrl', ['$scope', '$http', '$stateParams',
  function ($scope, $http, $stateParams) {
    $http.get('/articles')
      .then(
        function success(response) {
          $scope.articles = response.data;
        },
        function error(response) {
          console.log(response.data);
        }
    );
  }
]);