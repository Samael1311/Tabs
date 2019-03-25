"use strict";

function tabs() {
  const tab = document.querySelectorAll('.info-header-tab'), 
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	let hideTabs = (a = 1) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			 
		}
	};

	hideTabs();

	let showTabs = (b) => {

		if(tabContent[b].classList.contains('hide')){
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

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
}

module.exports = tabs;