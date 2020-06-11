const path = require('path');
const express=require('express');
const routDir=require('../util/path');
const router=express.Router();
const products=[];

//const bodyParser=require('body-parser');

router.get('/add-product',(req, res, next) => {
    console.log('In add product!');
    res.render('add-product', { pageTitle: 'Add Product', path: '/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
    //res.render('add-product',{pageTitle: 'Add Product',path:'/add-product'}); pug 
    //res.sendFile(path.join(routDir, 'views', 'add-product.html'));  //(3)
    //res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); (2)
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); this cmd is as same as above cmd..(1)
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    //next(); // Allows the request to continue to the next middleware in line
});

//router.use(bodyParser.urlencoded({extended: false}));

router.post('/add-product',(req, res, next) => {
    products.push({title: req.body.title});
    //console.log(req.body);
    res.redirect('/');
});

//module.exports=router;
exports.routes=router;
exports.products=products;