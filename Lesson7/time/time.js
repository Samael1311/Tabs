'use strict';



let shoeTime = setTimeout(function timer (){
	let currentDate = new Date();
  document.querySelector('.t-timer').textContent = currentDate.toTimeString().slice(0,8);
	setTimeout(timer, 1000);
});
