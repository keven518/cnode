var express = require('express');
var router = express.Router();
var signController = require('../controllers/sign');
var auth = require('../middlewares/auth');

// 显示注册页面
router.get('/signup', signController.showSignup);

// 提交注册页面
router.post('/signup', signController.signup);

// 显示登陆页面
router.get('/signin', signController.showSignin);

// 提交登陆页面
router.post('/signin', signController.signin);

// 登出
router.get('/signout', signController.signout);

router.get('/kv', function(req, res){
  res.send(req.session.user)
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//显示发表话题页面
router.get('/topic/create', auth.requireLogin, function(req, res){
  res.render('topic/create');
});

//处理用户提交的话题信息
router.post('/topic/create', auth.requireLogin, function(req, res){

})

module.exports = router;
