'use strict';


angular.module('kB')
  .service('ArticlesServices', ['$http', '$q',
    function ($http, $q) {
      var articlesModel = this,
        articles = null;

      articlesModel.getArticles = getArticles;
      articlesModel.getArticleById = getArticleById;
      articlesModel.getArticlesByCategory = getArticlesByCategory;
      articlesModel.addArticle = addArticle;
      articlesModel.updateArticle = updateArticle;

      _.mixin({
        'findByValues': function (collection, property, values) {
          return _.filter(collection, function (item) {
            return _.contains(values, item[property]);
          });
        }
      });

      /*=============================================
      =            Core Data Extract & Cache            =
      =============================================*/
      function extract(result) {
        return result.data;
      }

      function cacheArticles(result) {
        articles = extract(result);
        return articles;
      }

      function findArticleById(articlesId) {
        return _.find(articles, function (article) {
          return article._id === articlesId;
        });
      }

      function findArticlesByCategory(the_category) {
        var cat_articles = [];
        cat_articles = _.filterByValues(articles, 'category', the_category);
        console.log(cat_articles);
        return cat_articles;
      }

      /*=====     End of Section Core Data  ======*/

      /*==========================================
      =            Get Data Functions            =
      ==========================================*/
      function getArticles() {
        var deferred = $q.defer();

        if (articles) {
          console.log(articles);
          deferred.resolve(articles);
        } else {
          $http.get('/articles')
            .then(function (response) {
              console.log(response);
              deferred.resolve(cacheArticles(response));
            });
        }
        return deferred.promise;
      }

      function getArticleById(articleId) {
        var deferred = $q.defer();

        if (articles) {
          console.log(articles);
          deferred.resolve(findArticleById(articleId));
        } else {
          getArticles().then(function () {
            deferred.resolve(findArticleById(articleId));
          });
        }
        return deferred.promise;
      }

      function getArticlesByCategory(category) {
        var deferred = $q.defer();

        if (articles) {
          deferred.resolve(findArticlesByCategory(category));
        } else {
          getArticles().then(function () {
            deferred.resolve(findArticlesByCategory(category));
          });
        }
        return deferred.promise;
      }

      /*=====  End of Get Data Functions  ======*/

      /*========================================
      =      Post create, edit, delete Article    =
      ========================================*/
      function addArticle(article) {
        $http.post('/articles', article);
        articles = null;
        getArticles();
      }

      function updateArticle(article) {
        $http.put('/articles', article);
        articles = null;
        getArticles();
      }
      /*=====  End of Post new Article  ======*/
    }
  ]);