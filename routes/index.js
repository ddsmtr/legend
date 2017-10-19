/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Легенда' });
};
exports.about = function(req,res){
  res.render('about', { title: 'О нас' });
};
exports.filials = function(req,res){
  res.render('filials', { title: 'Филиалы' });
};
exports.table = function(req,res){
  res.render('table', { title: 'Расписание' });
};
exports.coach = function(req,res){
  res.render('coach', { title: 'Тренер' });
};
exports.prod = function(req,res){
  res.render('prod', { title: 'Продукция' });
};
exports.price = function(req,res){
  res.render('price', { title: 'Цены' });
};
exports.contacts = function(req,res){
  res.render('contacts', { title: 'Контакты' });
};
