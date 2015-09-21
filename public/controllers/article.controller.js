(function () {
  'use strict';

  angular.module('kB')
    .controller('ArticleDetailCtrl', ['$state', 'article', 'PreviousStateService', 'ArticlesServices',
      function ($state, article, PreviousStateService, ArticlesServices) {
        var articleDetail = this;
        articleDetail.article = article;
        articleDetail.goback = PreviousStateService.goback();
        console.log(articleDetail.article);
      }
    ]);
})();