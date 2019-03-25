require('formdata-polyfill');
require('es6-promise').polyfill();
window.addEventListener('DOMContentLoaded', function(){
	'use strict';
	
	let tabs = require('./parts/tabs'),
		timer = require('./parts/timer'),
		modal = require('./parts/modal'),
		forms = require('./parts/form'),
		slider = require('./parts/slider'),
		calculate = require('./parts/calculate'),
		scrolling = require('./parts/scrolling');


	tabs();
	timer();
	modal();
	forms();
	slider();
	calculate();
	scrolling();
	
});