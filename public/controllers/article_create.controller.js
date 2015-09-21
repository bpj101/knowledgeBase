(function () {
  'use strict';

  angular.module('kB')
    .controller('ArticleCreateCtrl', ['$state', 'ArticlesServices', 'CategoriesServices', 'categories',
      function ($state, ArticlesServices, CategoriesServices, categories) {

        this.categories = categories;


        this.addArticle = function () {
          var new_article = {
            title: this.title,
            body: this.body,
            category: this.category
          };
          console.log(data);
          ArticlesServices.addArticle(new_article);
          CategoriesServices.updateCategories();
          new_article = {
            title: '',
            body: '',
            category: ''
          };
          $state.go('articles');
        };
      }
    ]);
})();