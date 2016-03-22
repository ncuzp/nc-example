'use strict';

let router = require('koa-router')(),
	config = require('./config');

module.exports = router.routes();

router.get('/', function* (){
	yield this.render('index', {
		config: config
	});
});

router.get('/registry', function* (){
	yield this.render('registry', {
		config: config,
		name: 'get'
	});
});

router.post('/registry', function* (){
	yield this.render('registry', {
		config: config,
		name: 'post'
	});
});