var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res, next) {
    // var query = 'select * from products WHERE id=4';//single record get specific id 
    var query = 'select * from products ';

    db.query(query, function(err, rows, fields) {
        if (err) throw err;
        /*If you are creating api then get response in json format*/
        //res.json(rows[0]);//single record get 
        //res.json(rows);
        res.render('products', { title: 'Products', products: rows });

    });
});

router.get('/create-form', function(req, res, next) {
    res.render('createform', { title: 'Create Product' });
})

router.post('/create', function(req, res, next) {
    var product_name = req.body.product_name;
    var sku = req.body.sku;
    var price = req.body.price;

    var sql = `INSERT INTO products (product_name, sku, price, created_at) VALUES ("${product_name}", "${sku}", "${price}", NOW())`;
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log('record inserted');
        res.redirect('/products');
    });
});


module.exports = router;