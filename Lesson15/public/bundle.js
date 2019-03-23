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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//import "@babel/polyfill"; 
///import {tabs} from './parts/tabs';
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var tabs = __webpack_require__(/*! ./parts/tabs */ "./parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer */ "./parts/timer.js"),
      modal = __webpack_require__(/*! ./parts/modal */ "./parts/modal.js"),
      forms = __webpack_require__(/*! ./parts/form */ "./parts/form.js"),
      slider = __webpack_require__(/*! ./parts/slider */ "./parts/slider.js"),
      calculate = __webpack_require__(/*! ./parts/calculate */ "./parts/calculate.js"),
      scrolling = __webpack_require__(/*! ./parts/scrolling */ "./parts/scrolling.js");

  tabs();
  timer();
  modal();
  forms();
  slider();
  calculate();
  scrolling(); //modal window
  //Form
  //Slider
  //Calculate
});

/***/ }),

/***/ "./parts/calculate.js":
/*!****************************!*\
  !*** ./parts/calculate.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calculate() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0;
  persons.addEventListener('input', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('keyup', function () {
    restDays.value = restDays.value.replace(/[^0-9]/g, '');
  });
  persons.addEventListener('keyup', function () {
    persons.value = persons.value.replace(/[^0-9]/g, '');
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calculate;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
  var message = {
    loading: '<img src="img/ajax-loader.gif" alt="Загрузка...">',
    succes: '<img src="img/tenor.gif" alt="Спасибо! Скоро мы с вами свяжемся!">',
    failure: '<img src="img/warning.png" alt="Что-то пошло не так...">'
  };
  var form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      formUserData = document.querySelector('#form'),
      inputUserData = formUserData.getElementsByTagName('input');
  statusMessage.classList.add('status');
  formUserData.addEventListener('submit', function (event) {
    event.preventDefault(); //sendMessage(formUserData, inputUserData);

    sendMessage(formUserData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.succes;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInputs);
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault(); //sendMessage(form, input);

    sendMessage(form).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.succes;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInputs);
  });

  var sendMessage = function sendMessage(form) {
    form.appendChild(statusMessage);
    var formData = new FormData(form);
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);
      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          //	statusMessage.innerHTML = message.loading;
          resolve();
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 3) {
            resolve();
          } else {
            //statusMessage.innerHTML = message.failure;
            reject();
          } //statusMessage.innerHTML = message.succes;

        }
      });
      request.send(json);
    });
  };

  function clearInputs() {
    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  } //Enter only \d\+


  inputUserData[1].addEventListener('keyup', function (e) {
    e.target.value = e.target.value.replace(/[^\d\+]/g, '');
  });
  input[0].addEventListener('keyup', function (e) {
    e.target.value = e.target.value.replace(/[^\d\+]/g, '');
  });
}

module.exports = forms;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      container = document.querySelector('#about');

  var showModal = function showModal(a) {
    overlay.style.display = 'block';
    a.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  };

  container.addEventListener('click', function (event) {
    if (event.target && event.target.matches('.description-btn') || event.target == more) {
      showModal(event.target);
    }
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
}

module.exports = modal;

/***/ }),

/***/ "./parts/scrolling.js":
/*!****************************!*\
  !*** ./parts/scrolling.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrolling() {
  var menu = document.querySelector('ul');
  var h, timerScroll;
  menu.addEventListener('click', function (event) {
    if (event.target.matches('a')) {
      event.preventDefault();
      h = event.target.href.replace(/[^#]*(.*)/, '$1');
      timerScroll = setInterval(function () {
        return requestAnimationFrame(move);
      }, 30); //requestAnimationFrame(move);
    }
  });

  var step = 1,
      move = function move() {
    var count = Math.round(document.querySelector(h).getBoundingClientRect().top) + Math.round(document.documentElement.scrollTop);

    if (Math.round(document.documentElement.scrollTop) < count) {
      if (Math.round(document.documentElement.scrollTop) != count) {
        document.documentElement.scrollTop += step;
        requestAnimationFrame(move);
      }
    } else if (Math.round(document.documentElement.scrollTop) > count) {
      if (Math.round(document.documentElement.scrollTop) != count) {
        document.documentElement.scrollTop -= step;
        requestAnimationFrame(move);
      }
    } else {
      clearInterval(timerScroll);
    }
  };
}

module.exports = scrolling;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1;
  var slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
      //
  info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabs = function hideTabs() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabs();

  var showTabs = function showTabs(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (event.target == tab[i]) {
          hideTabs(0);
          showTabs(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2019-03-24';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        //целые числа
    minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60)); // days =  Math.floor((t/(1000*60*60*24));

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        updateClock = function updateClock() {
      var t = getTimeRemaining(endtime);
      t.hours < 10 ? t.hours = String('0' + t.hours) : t.minutes < 10 ? t.minutes = String('0' + t.minutes) : t.seconds < 10 ? t.seconds = String('0' + t.seconds) : {};
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        var zero = '00';
        clearInterval(timeInterval);
        hours.textContent = zero;
        minutes.textContent = zero;
        seconds.textContent = zero;
      }
    };

    var timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadline);
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map