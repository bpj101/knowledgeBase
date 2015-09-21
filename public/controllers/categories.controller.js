(function () {
  'use strict';

  angular.module('kB')
    .controller('CategoriesCtrl', ['categories',
      function (categories) {
        this.categories = categories;
        console.log(this.categories);
      }
    ])
})();