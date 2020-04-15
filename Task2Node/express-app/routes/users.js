var express = require('express');
var router = express.Router();

var userDetails=require('../helpers/user-helper').userDetails;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',function(req,res,next){
  res.send({
    status:"ok",
  });
});
router.get('/:name',function(req,res){
  const pathParam=req.params;
  const user=userDetails(pathParam.name);
  if (!user) {
    return res.send('User not found'); 
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(user.email);
  // res.write(JSON.stringify(user.post));
  // ,{'Content-type':'application/json'});
  console.log(user);
});

// router.get('/routes/users',function(req,res){
//   // res.sendFile(path.join(__dirname, '../public/login.html'));
//   router.use(express.static(path.join(__dirname, 'public','login.html')));
// });
// function redirect(){
//   console.log("in redirect");

//   // router.use(ex.static('./public/login.html'));
//   router.use(express.static(path.join(__dirname,'public','login')));
// }


module.exports = router;

