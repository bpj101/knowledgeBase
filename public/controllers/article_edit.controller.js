(function () {
  'use strict';

  angular.module('kB')
    .controller('ArticleEditCtrl', ['$state', '$stateParams', 'ArticlesServices', 'CategoriesServices', 'categories', 'edit_article',
      function ($state, $stateParams, ArticlesServices, CategoriesServices, categories, edit_article) {
        var articleEdit = this;

        //variable declarations
        articleEdit.categories = categories;
        articleEdit.article = edit_article;
        articleEdit.show_article = angular.copy(articleEdit.article);

        // function declarations 
        articleEdit.editArticle = editArticle;
        articleEdit.cancelEdit = cancelEdit;

        console.log(articleEdit.article);


        function editArticle() {
          articleEdit.article = angular.copy(articleEdit.show_article);
          ArticlesServices.updateArticle(articleEdit.show_article);
          CategoriesServices.updateCategories();
          $state.go('article.detail', {
            id: $stateParams.id
          }, {
            reload: true
          });
        }

        function cancelEdit() {
          articleEdit.show_article = angular.copy(articleEdit.article);
          console.log('you are here', edit_article);
          $state.go('article.detail', {
            id: $stateParams.id
          }, {
            reload: true
          });
        }
      }
    ])
})();