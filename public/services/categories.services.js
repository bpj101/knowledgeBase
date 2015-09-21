'use strict';


angular.module('kB')
  .service('CategoriesServices', ['$http', '$q',
    function ($http, $q) {
      var categoriesModel = this,
        categories = null;

      categoriesModel.getCategories = getCategories;
      categoriesModel.getCategory = getCategory;
      categoriesModel.getCategoriesByCategory = getCategoriesByCategory;
      categoriesModel.updateCategories = updateCategories;


      /*=============================================
      =            Core Data Extract & Cache            =
      =============================================*/
      function extract(result) {
        return result.data;
      }

      function cacheCategories(result) {
        categories = extract(result);
        return categories;
      }

      function findCategoryById(categoriesId) {
        return _.find(categories, function (category) {
          return category._id === categoriesId;
        });
      }

      function findCategoriesByCategory(category) {
        var cat_categories = [];
        cat_categories.push(_.find(categories, function (category) {
          return category.category === category;
        }));
        console.log(cat_categories);
        return cat_categories;
      }

      /*=====     End of Section Core Data  ======*/




      /*==========================================
      =            Get Data Functions            =
      ==========================================*/
      function getCategories() {
        var deferred = $q.defer();

        if (categories) {
          console.log(categories);
          deferred.resolve(categories);
        } else {
          $http.get('/categories')
            .then(function (response) {
              console.log(response);
              deferred.resolve(cacheCategories(response));
            });
        }
        return deferred.promise;
      }

      function getCategory(categoryId) {
        var deferred = $q.defer();

        if (categories) {
          deferred.resolve(findCategoryById(categoryId));
        } else {
          getCategories().then(function () {
            deferred.resolve(findCategoryById(categoryId));
          });
        }
        return deferred.promise;
      }

      function getCategoriesByCategory(category) {
        var deferred = $q.defer();

        if (categories) {
          deferred.resolve(findCategoriesByCategory(category));
        } else {
          getCategories().then(function () {
            deferred.resolve(findCategoriesByCategory(category));
          });
        }
        return deferred.promise;
      }

      function updateCategories() {
        categories = null;
        getCategories();
      }
      /*=====  End of Get Data Functions  ======*/
    }
  ]);