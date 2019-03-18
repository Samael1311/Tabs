//'use strict';


window.addEventListener('DOMContentLoaded', function(){

let step = 0,
 r1 = document.getElementById('dandelion'),
 r2 = document.getElementById('dandelion2');

 function move(){
	 r1.style.left = step + 'px';
	 r2.style.top = step + 'px';
	 r2.style.left = step + 'px';

	if(step < window.screen.height-75){
		step += 2;
			requestAnimationFrame(move);
	}

 }

requestAnimationFrame(move);







})