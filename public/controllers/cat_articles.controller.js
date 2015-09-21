(function () {
  'use strict';

  angular.module('kB')
    .controller('CategoryArticlesCtrl', ['cat_articles', '$stateParams', 'PreviousStateService',
      function (cat_articles, $stateParams, PreviousStateService) {

        this.cat_articles = cat_articles;
        this.category = $stateParams.category;
        this.goback = PreviousStateService.goback();
        console.log(this.goback);
      }
    ])
})();