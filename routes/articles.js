'use strict';

var express = require('express');
var router = express.Router();

var Article = require('../models/article');

router.get('/', function (req, res, next) {
  Article.getArticles(function (err, articles) {
    if (err) {
      console.log(err);
    }
    res.json(articles);
  });
});

router.get('/:id', function (req, res, next) {
  Article.getArticleById(req.params.id, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.json(article);
  });
});

router.get('/category/:category', function (req, res, next) {
  Article.getArticlesByCategory(req.params.category, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.json(article);
  });
});

// Create Article
router.post('/', function (req, res, next) {
  // Get form values
  var title = req.body.title,
    category = req.body.category,
    body = req.body.body;

  // Set Article object
  var newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  // Create Article
  Article.createArticle(newArticle, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.location('/article');
    res.redirect('/article');
  });
});

router.put('/', function (req, res, next) {
  // Get form values
  var id = req.body._id,
    data = {
      title: req.body.title,
      category: req.body.category,
      body: req.body.body
    };

  // Update Article
  Article.updateArticle(id, data, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.location('/article');
    res.redirect('/article');
  });
});

//Remove Article
router.delete('/:id', function (req, res, next) {
  var id = req.params.id

  // Delete Article
  Article.deleteArticle(id, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.location('/article');
    res.redirect('/article');
  });
});

module.exports = router;