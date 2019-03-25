"use strict";

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.replace");

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
      //totalValue.innerHTML = total;
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      //totalValue.innerHTML = total;
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
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
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });
}

module.exports = calculate;