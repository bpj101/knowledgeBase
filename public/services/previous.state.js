'use strict';


angular.module('kB')
  .service('PreviousStateService', ['$rootScope',
    function ($rootScope) {

      this.goback = function () {
        var where;
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from) {
          console.log(from.name);
          where = from.name;
          console.log(where);
        });

        return where;

      };
    }
  ]);