var express = require('express');
var router = express.Router();
var path=require('path');
var bodyParser = require('body-parser');
var checkLogin=require('../helpers/auth-helper');
let userDetails=require('../helpers/user-helper').userDetails;
let addPost=require('../helpers/user-helper').addPost;
var authentication=require('../middleware/auth-middleware').authentication;



router.post('/auth', function (req, res, next) {
    const cred = req.body;
    console.log("cred",cred);
   
    
  
    if (!cred.userName || !cred.password) {
      return res.status(400).send({ status: 'not ok' });
    }
  
    const isValid = checkLogin(cred.userName, cred.password);
    if (isValid) {
      var randomNumber = Math.random().toString();
      randomNumber = randomNumber.substring(2, randomNumber.length);
      res.cookie('username', cred.userName, { httpOnly: true, maxAge: 6000000 });
      res.cookie('auth_token', randomNumber, { httpOnly: true, maxAge: 6000000 });
    }
  
    if (isValid) {
      res.status(301).header({ Location: '/'+cred.userName }).send({});
    }
    else {
      res.status(200).send("<h1>Invalid Credentials</h1>");
    }
});
router.get('/user', authentication, function (req, res, next) {
   const obj = userDetails(req.cookies.username);
   if (obj) {
      res.status(200).send(user);
    }
    else {
      res.send("User does not exist");
    }
});
router.get('/posts', authentication, function (req, res, next) {
   const obj = userDetails(req.cookies.username);
   if (obj) {
    res.status(200).send(user.post);
  }
  else {
    res.send("User does not exist");
  }
});

router.post('/posts/new', authentication, function (req, res, next) {

  const result = req.body;
  
  console.log("IN NEW POST ROUTE------->>> NEW POST----->>",result);
  if (!result.message) {
    
    return res.status(400).send({ status: 'not ok' });
  }
  const added=addPost(req.cookies.username, result.message);
  if(added){
    console.log("in added defined------->>>.>>>>");
    res.status(301).header({Location:'/'+req.cookies.username}).send({});
  }
  else{
    res.send("user not found");
  }

});





module.exports=router;