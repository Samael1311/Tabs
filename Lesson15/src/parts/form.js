"use strict";

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

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
    event.preventDefault();
    sendMessage(formUserData).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.succes;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInputs);
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
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
          resolve();
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 3) {
            resolve();
          } else {
            reject();
          }
        }
      });
      request.send(json);
    });
  };

  function clearInputs() {
    for (var i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }

  inputUserData[1].addEventListener('keyup', function (e) {
    e.target.value = e.target.value.replace(/[^\d\+]/g, '');
  });
  input[0].addEventListener('keyup', function (e) {
    e.target.value = e.target.value.replace(/[^\d\+]/g, '');
  });
}

module.exports = forms;