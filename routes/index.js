
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('index', { title: "About" });
};

exports.aboutTitle = function(req, res, next){
  var theTitle = req.params.title
  res.render('index', {title: theTitle});
};
