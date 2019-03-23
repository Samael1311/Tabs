function scrolling(){
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
		if(Math.round(document.documentElement.scrollTop) < count){
			if(Math.round(document.documentElement.scrollTop) != count){
				document.documentElement.scrollTop += step;
					requestAnimationFrame(move);
			} 
		} else if(Math.round(document.documentElement.scrollTop) > count){
				if(Math.round(document.documentElement.scrollTop) != count){
				document.documentElement.scrollTop -= step;
					requestAnimationFrame(move);
			}
		} else { clearInterval(timerScroll);}
		
			

		
	}
}
module.exports = scrolling;