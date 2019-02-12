var express = require('express');
var router = express.Router();

var allProducts = [
    {vegetables: ['apple', 'watermelon', 'pineapple']},
    {drinks: ['soda', 'juice', 'tequila']},
    {food: ['rice', 'chicken', 'meatballs']}
];

router.get('/', function (req, res, next) {
    res.json(allProducts);
});

module.exports = router;