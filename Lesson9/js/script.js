window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	let tab = document.querySelectorAll('.info-header-tab'), //
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hideTabs(a){
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			 
		}
	}

	hideTabs(1);

	function showTabs(b){

		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event){
		if(event.target && event.target.classList.contains('info-header-tab')){
			for (let i = 0; i < tab.length; i++) {
				if(event.target == tab[i]){
				hideTabs(0);
				showTabs(i);
				break;
			}

			}
		}

	});

//timer
let deadline= '2019-03-16';

function getTimeRemaining(endtime){
	let t = Date.parse(endtime) - Date.parse(new Date()),
	seconds = Math.floor((t/1000) % 60), //целые числа
	minutes = Math.floor((t/1000/60) % 60),
	hours = Math.floor((t/(1000*60*60)));
	// days =  Math.floor((t/(1000*60*60*24));

	return {
		'total': t,
		'hours' : hours,
		'minutes': minutes,
		'seconds': seconds
	};

}
	function setClock(id, endtime){

		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000);

		function updateClock(){
			let t = getTimeRemaining(endtime);
			(t.hours < 10) ? (t.hours = String('0' + t.hours)) : (t.minutes < 10) ? (t.minutes = String('0' + t.minutes)) : (t.seconds < 10) ? (t.seconds = String('0' + t.seconds	)) : {};
			hours.textContent = t.hours;
			minutes.textContent = t.minutes;
			seconds.textContent = t.seconds;

			if(t.total <= 0){
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}

		

		}
	}


	setClock('timer', deadline);


//modal window
let more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close'),
	container = document.querySelector('#about');


	function showModal(a){
		overlay.style.display = 'block';
		a.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	}
	
	container.addEventListener('click', function (event){
		if(event.target && event.target.matches('.description-btn') || event.target == more){
		showModal(event.target);
		}

	});

	close.addEventListener('click', function (){
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});



})