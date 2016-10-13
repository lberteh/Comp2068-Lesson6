var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lesson 6 - Part 2',
    message: 'CRUD with MongoDB'
});
});

module.exports = router;
