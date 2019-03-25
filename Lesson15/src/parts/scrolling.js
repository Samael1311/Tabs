"use strict";

require("core-js/modules/es6.regexp.replace");

function scrolling() {
  var menu = document.querySelector('ul');
  var h, timerScroll;
  menu.addEventListener('click', function (event) {
    if (event.target.matches('a')) {
      event.preventDefault();
      h = event.target.href.replace(/[^#]*(.*)/, '$1');
      timerScroll = setInterval(function () {
        return requestAnimationFrame(move);
      }, 30);
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