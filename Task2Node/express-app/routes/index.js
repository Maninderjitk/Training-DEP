var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var userDetails = require('../helpers/user-helper').userDetails;
var user_authentication = require('../middleware/auth-middleware').user_authentication;
/* GET users listing. */

var urlencodedParser = bodyParser.urlencoded({ extended: false });


router.get('/', function (req, res, next) {
  if (req.cookies.auth_token) {
    res.status(301).sendFile(path.join(__dirname, '../public/home.html'));
  }
  else {
    res.status(301).sendFile(path.join(__dirname, '../public/landing.html'));
  }
});
router.get('/login', function (req, res, next) {
  res.status(301).sendFile(path.join(__dirname, '../public/login.html'));
});
router.post('/logout', (req, res, next) => {
  res.clearCookie('auth_token');
  res.clearCookie('username');
  res.status(301).header({ Location: '/login' }).send({});
});
router.get('/user_Profile', user_authentication, function (req, res, next) {
  res.status(301).sendFile(path.join(__dirname, '../public/userProfile.html'));
});

router.get('/:name', user_authentication, function (req, res) {
  const pathParam = req.params;
  const user = userDetails(pathParam.name);
  if (!user) {
    return res.send('User not found');
  }
  res.status(301).sendFile(path.join(__dirname, '../public/post.html'));
});






module.exports = router;
