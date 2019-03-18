'use strict';

let input = document.querySelector('#tel');
input.value = '+7(';
input.addEventListener('keyup', (event) => {

let char = event.target.value;
if(char.match(/\+\^\d\(\^\d{3}$/) !== null){
	event.target.value = char + ')';
} else if (char.match(/^\d{3}\)\d{3}$/) !== null) {
	event.target.value = char + '-';
}
 else if (char.match(/^\d{3}\)\d{3}\-\d{2}$/) !== null) {
	event.target.value = char + '-';
}
console.log(char);

})

