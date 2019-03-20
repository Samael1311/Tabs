let inputRub = document.getElementById('rub'),
inputUsd = document.getElementById('usd');


let sendM = () => {

return new Promise(function(resolve, reject){
	let request = new XMLHttpRequest();
		
		request.open('GET', 'js/current.json');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		request.addEventListener('readystatechange', function() {
			if (request.readyState === 4 && request.status == 200  ) {
			let data = JSON.parse(request.response).usd;
			//inputUsd.value = inputRub.value / data.usd;
			//console.log(data);
			resolve(data);
			} else if (request.readyState === 4 && request.status != 200 ){
					//inputUsd.value = "Что-то пошло не так!";
					reject();
			}
		
	});
	request.send();
	});

	};



	inputRub.addEventListener('input', () => {
		sendM()
		.then((d) => {
			inputUsd.value = inputRub.value / d;
			console.log(d);})
		.catch((d) => {
			inputUsd.value = "Что-то пошло не так!";
			console.log(d);
			});
	});
	


