/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function(){\r\n\t'use strict';\r\n\t\r\n\tlet tabs = __webpack_require__(/*! ./parts/tabs */ \"./src/parts/tabs.js\"),\r\n\t\ttimer = __webpack_require__(/*! ./parts/timer */ \"./src/parts/timer.js\"),\r\n\t\tmodal = __webpack_require__(/*! ./parts/modal */ \"./src/parts/modal.js\"),\r\n\t\tforms = __webpack_require__(/*! ./parts/form */ \"./src/parts/form.js\"),\r\n\t\tslider = __webpack_require__(/*! ./parts/slider */ \"./src/parts/slider.js\"),\r\n\t\tcalculate = __webpack_require__(/*! ./parts/calculate */ \"./src/parts/calculate.js\"),\r\n\t\tscrolling = __webpack_require__(/*! ./parts/scrolling */ \"./src/parts/scrolling.js\");\r\n\r\n\r\n\ttabs();\r\n\ttimer();\r\n\tmodal();\r\n\tforms();\r\n\tslider();\r\n\tcalculate();\r\n\tscrolling();\r\n\t\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/calculate.js":
/*!********************************!*\
  !*** ./src/parts/calculate.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calculate (){\r\n\tlet persons = document.querySelectorAll('.counter-block-input')[0],\r\n\t\trestDays = document.querySelectorAll('.counter-block-input')[1],\r\n\t\tplace = document.getElementById('select'),\r\n\t\ttotalValue = document.getElementById('total'),\r\n\t\tpersonsSum = 0,\r\n\t\tdaysSum = 0,\r\n\t\ttotal = 0;\r\n\r\n\t\ttotalValue.innerHTML = 0;\r\n\r\n\t\tpersons.addEventListener('input', function(){\r\n\t\tpersonsSum = +this.value;\r\n\t\ttotal = (daysSum + personsSum)*4000;\r\n\t\tif(restDays.value == '' || persons.value == ''){\r\n\t\t\ttotalValue.innerHTML = 0;\r\n\t\t} else {\r\n\t\t\t//totalValue.innerHTML = total;\r\n\t\t\ttotalValue.innerHTML = total * place.options[place.selectedIndex].value;\r\n\r\n\t\t}\r\n\t});\r\n\r\n\trestDays.addEventListener('input', function(){\r\n\t\tdaysSum = +this.value;\r\n\t\ttotal = (daysSum + personsSum)*4000;\r\n\t\tif(persons.value == '' || restDays.value == ''){\r\n\t\t\ttotalValue.innerHTML = 0;\r\n\t\t} else {\r\n\t\t\t//totalValue.innerHTML = total;\r\n\t\t\ttotalValue.innerHTML = total * place.options[place.selectedIndex].value;\r\n\t\t}\r\n\t});\r\n\r\n\trestDays.addEventListener('keyup', () => {\r\n\t\trestDays.value = restDays.value.replace(/[^0-9]/g, '');\r\n\t});\r\n\tpersons.addEventListener('keyup', () => {\r\n\t\tpersons.value = persons.value.replace(/[^0-9]/g, '');\r\n\t})\r\n\r\n\tplace.addEventListener('change', function(){\r\n\t\tif(restDays.value == '' || persons.value == ''){\r\n\t\t\ttotalValue.innerHTML = 0;\r\n\t\t} else {\r\n\t\t\tlet a = total;\r\n\t\t\ttotalValue.innerHTML = a * place.options[place.selectedIndex].value;\r\n\t\t}\r\n\t});\r\n\r\n\r\n\r\n}\r\nmodule.exports = calculate;\n\n//# sourceURL=webpack:///./src/parts/calculate.js?");

/***/ }),

/***/ "./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function forms (){\r\n\tconst message = {\r\n\t\tloading: '<img src=\"img/ajax-loader.gif\" alt=\"Загрузка...\">',\r\n\t\tsucces: '<img src=\"img/tenor.gif\" alt=\"Спасибо! Скоро мы с вами свяжемся!\">',\r\n\t\tfailure: '<img src=\"img/warning.png\" alt=\"Что-то пошло не так...\">'\r\n\t};\r\n\t\r\n\tconst form = document.querySelector('.main-form'),\r\n\t\tinput = form.getElementsByTagName('input'),\r\n\t\tstatusMessage = document.createElement('div'),\r\n\t\tformUserData = document.querySelector('#form'),\r\n\t\tinputUserData = formUserData.getElementsByTagName('input');\r\n\t\r\n\t\tstatusMessage.classList.add('status');\r\n\t\r\n\t\tformUserData.addEventListener('submit', (event) => {\r\n\t\t\tevent.preventDefault();\r\n\t\t\tsendMessage(formUserData)\r\n\t\t.then(() => statusMessage.innerHTML = message.loading)\r\n\t\t.then(() => statusMessage.innerHTML = message.succes)\r\n\t\t.catch(() => statusMessage.innerHTML = message.failure)\r\n\t\t.then(clearInputs);\r\n\t\t});\r\n\t\r\n\t\tform.addEventListener('submit', (event) => {\r\n\t\t\t event.preventDefault();\r\n\t\t\t sendMessage(form)\r\n\t\t.then(() => statusMessage.innerHTML = message.loading)\r\n\t\t.then(() => statusMessage.innerHTML = message.succes)\r\n\t\t.catch(() => statusMessage.innerHTML = message.failure)\r\n\t\t.then(clearInputs);\r\n\t\t});\r\n\t\r\n\t\tlet sendMessage = (form) => {\r\n\t\r\n\t\t\tform.appendChild(statusMessage);\r\n\t\t\tlet formData = new FormData(form); \r\n\t\r\n\t\t\t return new Promise((resolve, reject) => {\r\n\t\r\n\t\t\t\tlet request = new XMLHttpRequest();\r\n\t\t\t\trequest.open('POST', 'server.php');\r\n\t\t\t\trequest.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); \r\n\t\t\t\tlet obj = {};\r\n\t\t\t\tformData.forEach((value, key) => {\r\n\t\t\t\t\tobj[key] = value;\r\n\t\t\t\t});\r\n\t\t\t\tlet json = JSON.stringify(obj);\r\n\t\t\t\r\n\t\t\t\trequest.addEventListener('readystatechange', () => {\r\n\t\t\t\t\tif(request.readyState < 4){\r\n\t\t\t\t\t\tresolve();\r\n\t\t\t\t\t} else if (request.readyState === 4 ){\r\n\t\t\t\t\t\tif(request.status == 200 && request.status < 3){\r\n\t\t\t\t\t\t\tresolve();\r\n\t\t\t\t\t\t}else {\r\n\t\t\t\t\t\t\treject();\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t}); \r\n\t\t\t\trequest.send(json);\r\n\t\t\t\t});\r\n\t\r\n\t\t};\r\n\t\r\n\t\tfunction clearInputs(){\r\n\t\t\tfor (let i = 0; i < input.length; i++) {\r\n\t\t\t\tinput[i].value = '';\r\n\t\t\t}\r\n\t\t\t\r\n\t}\r\n\t\r\n\tinputUserData[1].addEventListener('keyup', (e) => {\r\n\te.target.value = e.target.value.replace(/[^\\d\\+]/g,'');\r\n\t\r\n\t});\r\n\t\r\n\tinput[0].addEventListener('keyup', (e) => {\r\n\t\te.target.value = e.target.value.replace(/[^\\d\\+]/g,'');\r\n\t\t\r\n\t\t});\r\n\t\r\n}\r\nmodule.exports = forms;\n\n//# sourceURL=webpack:///./src/parts/form.js?");

/***/ }),

/***/ "./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal(){\r\n\tconst more = document.querySelector('.more'),\r\n\toverlay = document.querySelector('.overlay'),\r\n\tclose = document.querySelector('.popup-close'),\r\n\tcontainer = document.querySelector('#about');\r\n\r\n\r\n\tlet showModal = (a) => {\r\n\t\toverlay.style.display = 'block';\r\n\t\ta.classList.add('more-splash');\r\n\t\tdocument.body.style.overflow = 'hidden';\r\n\t}\r\n\t\r\n\tcontainer.addEventListener('click', (event) => {\r\n\t\tif(event.target && event.target.matches('.description-btn') || event.target == more){\r\n\t\tshowModal(event.target);\r\n\t\t}\r\n\r\n\t});\r\n\r\n\tclose.addEventListener('click', () => {\r\n\t\toverlay.style.display = 'none';\r\n\t\tmore.classList.remove('more-splash');\r\n\t\tdocument.body.style.overflow = '';\r\n\t});\r\n}\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/parts/modal.js?");

/***/ }),

/***/ "./src/parts/scrolling.js":
/*!********************************!*\
  !*** ./src/parts/scrolling.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function scrolling(){\r\n\tconst menu = document.querySelector('ul'); \r\n\tlet h, timerScroll;\r\n\r\n\tmenu.addEventListener('click', (event) => {\r\n\t\tif(event.target.matches('a')){\r\n\t\tevent.preventDefault();\r\n\t\th = event.target.href.replace(/[^#]*(.*)/, '$1');\r\n\t\ttimerScroll = setInterval(() => requestAnimationFrame(move), 30);\t\t\r\n\r\n\t\t}\r\n\t});\r\n\r\n\tlet step = 1,\r\n\t move = () => {\r\n\t\tlet count = Math.round(document.querySelector(h).getBoundingClientRect().top) + Math.round(document.documentElement.scrollTop);\r\n\t\tif(Math.round(document.documentElement.scrollTop) < count){\r\n\t\t\tif(Math.round(document.documentElement.scrollTop) != count){\r\n\t\t\t\tdocument.documentElement.scrollTop += step;\r\n\t\t\t\t\trequestAnimationFrame(move);\r\n\t\t\t} \r\n\t\t} else if(Math.round(document.documentElement.scrollTop) > count){\r\n\t\t\t\tif(Math.round(document.documentElement.scrollTop) != count){\r\n\t\t\t\tdocument.documentElement.scrollTop -= step;\r\n\t\t\t\t\trequestAnimationFrame(move);\r\n\t\t\t}\r\n\t\t} else { clearInterval(timerScroll);}\r\n\t\t\r\n\t\t\t\r\n\r\n\t\t\r\n\t};\r\n}\r\nmodule.exports = scrolling;\n\n//# sourceURL=webpack:///./src/parts/scrolling.js?");

/***/ }),

/***/ "./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider (){\r\n\tlet slideIndex = 1;\r\n const\tslides = document.querySelectorAll('.slider-item'),\r\n\tprev= document.querySelector('.prev'),\r\n\tnext= document.querySelector('.next'),\r\n\tdotsWrap = document.querySelector('.slider-dots'),\r\n\tdots = document.querySelectorAll('.dot');\r\n\r\n\tfunction showSlides(n){\r\n\t\tif(n > slides.length){\r\n\t\t\tslideIndex = 1;\r\n\t\t}\r\n\t\tif(n < 1){\r\n\t\t\tslideIndex = slides.length;\r\n\t\t}\r\n\t\tslides.forEach((item) => item.style.display = 'none');\r\n\t\tdots.forEach((item) => item.classList.remove('dot-active'));\r\n\t\tslides[slideIndex-1].style.display = 'block';\r\n\t\tdots[slideIndex-1].classList.add('dot-active');\r\n\t}\r\n\r\nshowSlides(slideIndex);\r\n\r\n\r\nfunction plusSlides(n){\r\n\tshowSlides(slideIndex += n);\r\n\r\n}\r\n\r\nfunction currentSlide(n){\r\n\tshowSlides(slideIndex = n);\r\n}\r\n\r\nprev.addEventListener('click', () => {\r\n\tplusSlides(-1);\r\n});\r\n\r\nnext.addEventListener('click', () => {\r\n\tplusSlides(1);\r\n});\r\n\r\ndotsWrap.addEventListener('click', (event) => {\r\n\tfor(let i = 0; i < dots.length +1; i++){\r\n\t\tif(event.target.classList.contains('dot') && event.target == dots[i-1]){\r\n\t\t\tcurrentSlide(i);\r\n\t\t}\r\n\t}\r\n});\r\n}\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/parts/slider.js?");

/***/ }),

/***/ "./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs(){\r\n\t\r\n\tconst tab = document.querySelectorAll('.info-header-tab'),\r\n\t\tinfo = document.querySelector('.info-header'),\r\n\t\ttabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n\tlet hideTabs = (a = 1) => {\r\n\t\tfor (let i = a; i < tabContent.length; i++) {\r\n\t\t\ttabContent[i].classList.remove('show');\r\n\t\t\ttabContent[i].classList.add('hide');\r\n\t\t\t \r\n\t\t}\r\n\t}\r\n\r\n\thideTabs();\r\n\r\n\tlet showTabs = (b) => {\r\n\r\n\t\tif(tabContent[b].classList.contains('hide')){\r\n\t\t\ttabContent[b].classList.remove('hide');\r\n\t\t\ttabContent[b].classList.add('show');\r\n\t\t}\r\n\t};\r\n\r\n\tinfo.addEventListener('click', (event) => {\r\n\t\tif(event.target && event.target.classList.contains('info-header-tab')){\r\n\t\t\tfor (let i = 0; i < tab.length; i++) {\r\n\t\t\t\tif(event.target == tab[i]){\r\n\t\t\t\thideTabs(0);\r\n\t\t\t\tshowTabs(i);\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t});\r\n}\r\n\r\nmodule.exports =  tabs;\n\n//# sourceURL=webpack:///./src/parts/tabs.js?");

/***/ }),

/***/ "./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer (){\r\n\tconst deadline = '2019-03-24';\r\n\r\nlet getTimeRemaining = (endtime) => {\r\n\tlet t = Date.parse(endtime) - Date.parse(new Date()),\r\n\tseconds = Math.floor((t/1000) % 60),\r\n\tminutes = Math.floor((t/1000/60) % 60),\r\n\thours = Math.floor((t/(1000*60*60)));\r\n\r\n\treturn {\r\n\t\t'total': t,\r\n\t\t'hours' : hours,\r\n\t\t'minutes': minutes,\r\n\t\t'seconds': seconds\r\n\t};\r\n\r\n}\r\n\tlet setClock = (id, endtime) => {\r\n\r\n\t\tlet timer = document.getElementById(id),\r\n\t\thours = timer.querySelector('.hours'),\r\n\t\tminutes = timer.querySelector('.minutes'),\r\n\t\tseconds = timer.querySelector('.seconds'),\r\n\t\tupdateClock = () => {\r\n\t\t\tlet t = getTimeRemaining(endtime);\r\n\t\t\t(t.hours < 10) ? (t.hours = String('0' + t.hours)) : (t.minutes < 10) ? (t.minutes = String('0' + t.minutes)) : (t.seconds < 10) ? (t.seconds = String('0' + t.seconds\t)) : {};\r\n\t\t\thours.textContent = t.hours;\r\n\t\t\tminutes.textContent = t.minutes;\r\n\t\t\tseconds.textContent = t.seconds;\r\n\r\n\t\t\tif(t.total <= 0){\r\n\t\t\t\tconst zero = '00';\r\n\t\t\t\tclearInterval(timeInterval);\r\n\t\t\t\thours.textContent = zero;\r\n\t\t\t\tminutes.textContent = zero;\r\n\t\t\t\tseconds.textContent = zero;\r\n\t\t\t}\r\n\r\n\t\t\r\n\r\n\t\t}\r\n\t\tlet timeInterval = setInterval(updateClock, 1000);\r\n\t}\r\n\r\n\r\n\tsetClock('timer', deadline);\r\n}\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/parts/timer.js?");

/***/ })

/******/ });