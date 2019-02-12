var express = require('express');
var router = express.Router();
var passport = require('passport');

var allUsers = [
  {name: 'Pedro', lastName: 'Garcia', age: 45},
  {name: 'María', lastName: 'Perez', age: 34},
  {name: 'Andrés', lastName: 'Garces', age: 12},
  {name: 'Ignacio', lastName: 'Nava', age: 23},
  {name: 'Juan', lastName: 'Agudelo', age: 43},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(allUsers);
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/users/login' }),
    function(req, res) {
        res.redirect('/users/profile');
    });

router.get('/logout',
    function(req, res){
        req.logout();
        res.redirect('/');
    });

router.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
        res.render('profile', { user: req.user });
    });

module.exports = router;
