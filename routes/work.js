const express=require('express');
const router=express.Router();
const routDir=require('../util/path');
const adminData=require('./admin');
const path=require('path');

router.get('/',(req, res, next) => {
    console.log('Work file is in progress!');
    const products =adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
   // res.render('shop', {prods: products, pageTitle: 'Shop',path: '/'}); // to call templating engine pug file.
    //console.log(adminData.products);
    //res.sendFile(path.join(routDir,'views','work.html'));
    //res.sendFile(path.join(__dirname,'..','views','work.html'));
    //res.sendFile(path.join(__dirname,'../','views','work.html')); this is as same as the above line..
   // res.send('<h1>Hello from Express!</h1>');
});

module.exports=router;