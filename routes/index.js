var express = require('express');
var router = express.Router();

var list = [1,2,3,4,5,6];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', function (req, res) {
  res.json(list);
});

module.exports = router;
