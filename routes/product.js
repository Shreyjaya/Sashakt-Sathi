const express=require('express');
const router=express.Router(); //mini instance of app or mini server 
const{isLoggedIn}=require('../middleware');



router.get('/sashaktsathi', isLoggedIn,(req, res,next) => {
    res.render('products/index'); // Pass data like 'title' if needed
});

router.get('/aboutus',isLoggedIn, (req, res,next) => {
  res.render('products/about'); // Pass data like 'title' if needed
});

router.get('/legalrights',isLoggedIn, (req, res,next) => {
  res.render('products/legal'); // Pass data like 'title' if needed
});
router.get('/safeinsight',isLoggedIn, (req, res,next) => {
  res.render('products/safeinsight'); // Pass data like 'title' if needed
});
  


  module.exports = router;