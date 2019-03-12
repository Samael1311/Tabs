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
				if(event.target == tab[i]){}
				hideTabs(0);
				showTabs(i);
				break;
			}
		}

	})



})