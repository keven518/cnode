var validator = require('validator');
var TopicModel = require('../models/topic');
exports.showCreate = function(req, res){
  res.render('topic/create');
};

exports.create = function(req, res){
  var title = validator.trim(req.body.title);
  var tab = validator.trim(req.body.tab);
  var content = validator.trim(req.body.t_content);

  var hasEmptyInfo = [title, tab, content].some(function(item){
    return item === '';
  })
  if(hasEmptyInfo){
    res.status(422);
    return res.render('topic/create', {error: '您填写的信息不完整'});
  }
  var topicData = {
    title: title,
    content: content,
    tab: tab,
    username: req.session.user.username,
    insertTime: Date.now()
  };
  TopicModel.addTopic(topicData, function(err, result){
    return res.render('topic/create', {success: '发表话题成功！'});
  })
}