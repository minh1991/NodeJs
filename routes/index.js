var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('alo alo')
  res.render('index', { title: 'Express 12345' });
});

/* thêm trang tin tức */
router.get('/tin', function(req, res, next) {
  res.render('tin1', { title: 'Tin tức 1', content:'bài này đã xong từ hôm qua' });
});

/* tạo danh sách chứa mảng */
router.get('/danh-sach', function(req, res, next) {
  // tạo một danh sách 
  let data1 = {danhsach1: ['minh', 'nam', 'huyen', 'nho']};
  res.render('danh-sach', { 
    title: 'Danh sách SV',  
    // gọi Object danhsach1
    nameSv: data1
  });
});


/* GET about page. */
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* Ví dụ tạo trang tin1 trong trang about. */
router.get('/about/tin1.html', function(req, res, next) {
  res.render('tin1', { title: 'tin1' });
});

/* Ví dụ tạo trang tin1 trong trang about. */
router.get('/about/:id-content', function(req, res, next) {
  res.render('tin1', { title: 'tin1' });
  
});

/* Ví dụ tạo trang tin1 trong trang about. */
router.get('/about/:id-content', function(req, res, next) {
  res.render('tin1', { title: 'tin1' });
});

/* Ví dụ tạo trang tin1 trong trang about. */
//đặt hàm gọi theo kiểu *
router.get('*/:id-content', function(req, res, next) {
//gọi bài viết theo link id-content
  res.send('làm thử mẫu link' + req.params.id-content);
});

/*cookie*/
router.get('/cookie_test/:id', function(req, res, next) {
  //lưu một bộ nhớ tên là vitri, với dữ liệu truyền vào lấy ở req.params.id
  res.cookie('vitri', req.params.id);
  res.send("vị trí id là: "+ req.params.id);
});

router.get('/cookie_test1', function(req, res, next) {
  res.send("vị trí id của cookie là: "+ req.cookies.vitri);
});

router.get('/xoa_cookie', function(req, res, next) {
  res.clearCookie('vitri');
  res.send("Đã xóa");
});

router.get('/session/:vitri_session', function(req, res, next) {
  req.session.vitri_session = req.params.vitri_session;
  res.send("Đã tạo session");
});

router.get('/sd_session', function(req, res, next) {
  res.send("Đã tạo session tên là: "+ req.session.vitri_session);
});





module.exports = router;
