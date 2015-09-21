'use strict';

angular.
module('kB', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('categories', {
          url: '/categories',
          templateUrl: 'views/categories.view.html',
          controller: 'CategoriesCtrl',
          controllerAs: 'as',
          resolve: {
            categories: ['CategoriesServices',
              function (CategoriesServices) {
                return CategoriesServices.getCategories();
              }
            ]
          }
        })
        .state('articles', {
          url: '/articles',
          templateUrl: 'views/articles.view.html',
          controller: 'ArticlesCtrl',
          controllerAs: 'as',
          resolve: {
            articles: ['ArticlesServices',
              function (ArticlesServices) {
                return ArticlesServices.getArticles();
              }
            ]
          }
        })
        .state('category', {
          abstract: true,
          templateUrl: 'views/category.view.html'
        })
        .state('article', {
          abstract: true,
          templateUrl: 'views/article.view.html'
        })
        .state('article.add', {
          url: '/article/add',
          templateUrl: 'views/add_article.view.html',
          controller: 'ArticleCreateCtrl',
          controllerAs: 'as',
          resolve: {
            categories: ['CategoriesServices',
              function (CategoriesServices) {
                return CategoriesServices.getCategories();
              }
            ]
          }
        })
        .state('article.detail', {
          url: '/article/:id',
          templateUrl: 'views/detail_article.view.html',
          controller: 'ArticleDetailCtrl',
          controllerAs: 'as',
          resolve: {
            article: ['$stateParams', 'ArticlesServices',
              function ($stateParams, ArticlesServices) {
                return ArticlesServices.getArticleById($stateParams.id);
              }
            ]
          }
        })
        .state('category.articles', {
          url: '/category/articles/:category',
          templateUrl: 'views/cat_articles.view.html',
          controller: 'CategoryArticlesCtrl',
          controllerAs: 'as',
          resolve: {
            cat_articles: ['$stateParams', 'ArticlesServices',
              function ($stateParams, ArticlesServices) {
                return ArticlesServices.getArticlesByCategory($stateParams.category);
              }
            ]
          }
        })
        .state('article.edit', {
          url: '/article/edit/:id',
          templateUrl: 'views/edit_article.view.html',
          controller: 'ArticleEditCtrl',
          controllerAs: 'as',
          resolve: {
            categories: ['CategoriesServices',
              function (CategoriesServices) {
                return CategoriesServices.getCategories();
              }
            ],
            edit_article: ['$stateParams', 'ArticlesServices',
              function ($stateParams, ArticlesServices) {
                return ArticlesServices.getArticleById($stateParams.id);
              }
            ]
          }
        });

      $urlRouterProvider.otherwise('/categories');
    }
  ]);