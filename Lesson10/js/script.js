window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	const tab = document.querySelectorAll('.info-header-tab'), //
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');


	function hideTabs(a = 1){
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			 
		}
	}

	hideTabs();

	function showTabs(b){

		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
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
let deadline = '2019-03-20';

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
				const zero = '00';
				clearInterval(timeInterval);
				hours.textContent = zero;
				minutes.textContent = zero;
				seconds.textContent = zero;
			}

		

		}
	}


	setClock('timer', deadline);


//modal window
const more = document.querySelector('.more'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.popup-close'),
	container = document.querySelector('#about');


	function showModal(a){
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

	const menu = document.querySelector('ul'); 
	let h, timerScroll;

	menu.addEventListener('click', (event) => {
		if(event.target.matches('a')){
		event.preventDefault();
		h = event.target.href.replace(/[^#]*(.*)/, '$1');
		timerScroll = setInterval(() => requestAnimationFrame(move), 30);

		//requestAnimationFrame(move);
		

		}
	});



	let step = 1;
	function move(){
		let count = document.querySelector(h).getBoundingClientRect().top + document.documentElement.scrollTop;
		if(document.documentElement.scrollTop < count){
			if(document.documentElement.scrollTop != count){
				document.documentElement.scrollTop += step;
					requestAnimationFrame(move);
			}
		} else if(document.documentElement.scrollTop > count){
				if(document.documentElement.scrollTop != count){
				document.documentElement.scrollTop -= step;
					requestAnimationFrame(move);
			}
		} else { clearInterval(timerScroll);}
		
			
	//	console.log( document.querySelector(h).getBoundingClientRect().top + document.documentElement.scrollTop);
		
	}



})