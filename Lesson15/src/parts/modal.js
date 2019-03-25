"use strict";

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