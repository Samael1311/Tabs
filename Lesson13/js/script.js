//import "@babel/polyfill";
window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	const tab = document.querySelectorAll('.info-header-tab'), //
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');


	let hideTabs = (a = 1) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			 
		}
	}

	hideTabs();

	let showTabs = (b) => {

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

let getTimeRemaining = (endtime) => {
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
	let setClock = (id, endtime) => {

		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		updateClock = () => {
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
		let timeInterval = setInterval(updateClock, 1000);
	}


	setClock('timer', deadline);


//modal window
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

	let step = 1,
	 move = () => {
		let count = Math.round(document.querySelector(h).getBoundingClientRect().top) + Math.round(document.documentElement.scrollTop);
		if(document.documentElement.scrollTop < count && document.documentElement.scrollHeight != document.documentElement.scrollTop + document.documentElement.clientHeight){
			if(document.documentElement.scrollTop != count){
				document.documentElement.scrollTop += step;
					requestAnimationFrame(move);
			} 
		} else if(document.documentElement.scrollTop > count){
				if(document.documentElement.scrollTop != count){
				document.documentElement.scrollTop -= step;
					requestAnimationFrame(move);
			}
		} else { 
			Math.round(document.querySelector(h).getBoundingClientRect().top);
			clearInterval(timerScroll);}
		
			
		//console.log( document.querySelector(h).getBoundingClientRect().top + document.documentElement.scrollTop);
		
	};
	

//Form
let message = {
	loading: '<img src="img/ajax-loader.gif" alt="Загрузка...">',
	succes: '<img src="img/tenor.gif" alt="Спасибо! Скоро мы с вами свяжемся!">',
	failure: '<img src="img/warning.png" alt="Что-то пошло не так...">'
};

let form = document.querySelector('.main-form'),
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div'),
	formUserData = document.querySelector('#form'),
	inputUserData = formUserData.getElementsByTagName('input');

	statusMessage.classList.add('status');

	formUserData.addEventListener('submit', function(event){
		event.preventDefault();
		//sendMessage(formUserData, inputUserData);
		sendMessage(formUserData)
	.then(() => statusMessage.innerHTML = message.loading)
	.then(() => statusMessage.innerHTML = message.succes)
	.catch(() => statusMessage.innerHTML = message.failure)
	.then(clearInputs);
	});

	form.addEventListener('submit', function (event){
		 event.preventDefault();
		 //sendMessage(form, input);
		 sendMessage(form)
	.then(() => statusMessage.innerHTML = message.loading)
	.then(() => statusMessage.innerHTML = message.succes)
	.catch(() => statusMessage.innerHTML = message.failure)
	.then(clearInputs);
	});

	let sendMessage = (form) => {

		form.appendChild(statusMessage);
		let formData = new FormData(form); 

		 return new Promise(function(resolve, reject){

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); 
			let obj = {};
			formData.forEach(function(value, key){
				obj[key] = value;
			});
			let json = JSON.stringify(obj);
		
			request.addEventListener('readystatechange', function (){
				if(request.readyState < 4){
				//	statusMessage.innerHTML = message.loading;
					resolve();
				} else if (request.readyState === 4 ){
					if(request.status == 200 && request.status < 3){
						resolve();
					}else {
						//statusMessage.innerHTML = message.failure;
						reject();
					}
					//statusMessage.innerHTML = message.succes;
					
				}
			}); 
			request.send(json);
			});

	};

	function clearInputs(){
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
		
}

	
	//Enter only \d\+
inputUserData[1].addEventListener('keyup', function(e){
e.target.value = e.target.value.replace(/[^\d\+]/g,'');

});

input[0].addEventListener('keyup', function(e){
	e.target.value = e.target.value.replace(/[^\d\+]/g,'');
	
	});


//Slider

let slideIndex = 1,
	slides = document.querySelectorAll('.slider-item'),
	prev= document.querySelector('.prev'),
	next= document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	wrap = document.querySelector('.wrap'),
	dots = document.querySelectorAll('.dot');

	function showSlides(n){
		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		dots.forEach((item) => item.classList.remove('dot-active'));
		slides[slideIndex-1].style.display = 'block';

	
		setTimeout(()=>{
			slides[slideIndex-1].style.cssText = 'transition: transform 2s linear;\
			transform: rotate(360deg);';

		}, 500);
		setTimeout(()=>{
			slides[slideIndex-1].style.removeProperty('transition');
			slides[slideIndex-1].style.removeProperty('transform');
		}, 2600);
	
		

		dots[slideIndex-1].classList.add('dot-active');
	}

showSlides(slideIndex);


function plusSlides(n){
	showSlides(slideIndex += n);

}

function currentSlide(n){
	showSlides(slideIndex = n);
}

prev.addEventListener('click', () => {
	plusSlides(-1);
});

next.addEventListener('click', () => {


	plusSlides(1);
});


dotsWrap.addEventListener('click', (event) => {
	for(let i = 0; i < dots.length +1; i++){
		if(event.target.classList.contains('dot') && event.target == dots[i-1]){
			currentSlide(i);
		}
	}
});


//Calculate
let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

		totalValue.innerHTML = 0;

		persons.addEventListener('input', function(){
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = 0;
		} else {
			//totalValue.innerHTML = total;
			changeTotal();
		}
	});

	restDays.addEventListener('input', function(){
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if(persons.value == '' || restDays.value == ''){
			totalValue.innerHTML = 0;
		} else {
			//totalValue.innerHTML = total;
			changeTotal();
			
		}
	});
	 console.log(typeof(+totalValue.innerHTML));
	 function changeTotal(){
		setTimeout(function run(){
			if(+totalValue.innerHTML != total && +totalValue.innerHTML < total){
				totalValue.innerHTML = +totalValue.innerHTML+1;
				setTimeout(run, 1);
			} else if(+totalValue.innerHTML != total && +totalValue.innerHTML > total){
				totalValue.innerHTML = +totalValue.innerHTML-1;
				setTimeout(run, 1);
			} 
			else {clearInterval(run);}
		}, 100);
	 };
	


	restDays.addEventListener('keyup', () => {
		restDays.value = restDays.value.replace(/[^0-9]/g, '');
	});
	persons.addEventListener('keyup', () => {
		persons.value = persons.value.replace(/[^0-9]/g, '');
	})

	place.addEventListener('change', function(){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

});