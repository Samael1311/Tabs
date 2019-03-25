"use strict";

function timer() {
  var deadline = '2019-03-24';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
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