var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express Framework ' });
});


router.get('/student/:id/course/:cid', function(req, res, next) {
    res.render('student', { result: req.params });
    //res.json(req.params); JSON GET DATA in GET Request 
});


router.post('/student/submit', function(req, res, next) {
    var id = req.body.studentId;
    var cid = req.body.CourseId;
    res.redirect('/student/' + id + '/course/' + cid);
    //res.json(req.body); //JSON GET DATA in post request 
})

module.exports = router;