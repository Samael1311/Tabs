"use strict";

function modal() {
	const more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close'),
	container = document.querySelector('#about');


	let showModal = (a) => {
		overlay.style.display = 'block';
		a.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	}
	
	container.addEventListener('click', (event) => {
		if(event.target && event.target.matches('.description-btn') || event.target == more){
		showModal(event.target);
		}

	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
}

module.exports = modal;