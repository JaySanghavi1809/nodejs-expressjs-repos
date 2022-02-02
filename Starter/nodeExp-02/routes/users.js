var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'User list' });
});


router.get('/details', function(req, res, next) {
    res.send('users details ');
});
module.exports = router;