var express = require('express');
var router = express.Router();

router.get('/', function(){
	res.render('signup.ejs', {});
});

module.exports = router;