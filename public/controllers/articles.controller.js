(function () {
  'use strict';

  angular.module('kB')
    .controller('ArticlesCtrl', ['articles',
      function (articles) {

        this.articles = articles;
        console.log(articles);
      }
    ])
})();