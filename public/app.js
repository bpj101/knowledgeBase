'use strict';

var app = angular.module('kB', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories.view.html',
        controller: 'CategoriesCtrl'
      });

    $urlRouterProvider.otherwise('/categories');
  }
]);