"use strict";

function tabs() {
  var tab = document.querySelectorAll('.info-header-tab'),
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