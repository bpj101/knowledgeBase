'use strict';

var app = angular.module('kB', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('categories', {
        url: '/categories',
        templateUrl: 'views/categories.view.html',
        controller: 'CategoriesCtrl'
      })
      .state('articles', {
        url: '/articles',
        templateUrl: 'views/articles.view.html',
        controller: 'ArticlesCtrl'
      })
      .state('category', {
        abstract: true,
        templateUrl: 'views/category.view.html',
        controller: 'CategoriesCtrl'
      })
      .state('article', {
        abstract: true,
        templateUrl: 'views/article.view.html',
        controller: 'ArticlesCtrl'
      })
      .state('article.add', {
        url: '/article/add',
        templateUrl: 'views/add_article.view.html',
        controller: 'ArticlesCtrl'
      })
      .state('article.detail', {
        url: '/article/:id',
        templateUrl: 'views/article.view.html',
        controller: 'ArticlesCtrl'
      })
      .state('category.articles', {
        url: '/category/articles/:category',
        templateUrl: 'views/articles.view.html',
        controller: 'CategoriesCtrl'
      })
      .state('article.edit', {
        url: '/article/edit/:id',
        templateUrl: 'views/edit_article.view.html',
        controller: 'ArticlesCtrl'
      });

    $urlRouterProvider.otherwise('/categories');
  }
]);