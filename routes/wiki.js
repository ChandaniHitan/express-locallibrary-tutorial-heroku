var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Wiki home page');
});

router.get('/about', function(req, res, next) {
  res.send('About wiki');
});

module.exports = router;