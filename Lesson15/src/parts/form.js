function forms (){
	const message = {
		loading: '<img src="img/ajax-loader.gif" alt="Загрузка...">',
		succes: '<img src="img/tenor.gif" alt="Спасибо! Скоро мы с вами свяжемся!">',
		failure: '<img src="img/warning.png" alt="Что-то пошло не так...">'
	};
	
	const form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		formUserData = document.querySelector('#form'),
		inputUserData = formUserData.getElementsByTagName('input');
	
		statusMessage.classList.add('status');
	
		formUserData.addEventListener('submit', (event) => {
			event.preventDefault();
			//sendMessage(formUserData, inputUserData);
			sendMessage(formUserData)
		.then(() => statusMessage.innerHTML = message.loading)
		.then(() => statusMessage.innerHTML = message.succes)
		.catch(() => statusMessage.innerHTML = message.failure)
		.then(clearInputs);
		});
	
		form.addEventListener('submit', (event) => {
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
	
			 return new Promise((resolve, reject) => {
	
				let request = new XMLHttpRequest();
				request.open('POST', 'server.php');
				request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); 
				let obj = {};
				formData.forEach((value, key) => {
					obj[key] = value;
				});
				let json = JSON.stringify(obj);
			
				request.addEventListener('readystatechange', () => {
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
	inputUserData[1].addEventListener('keyup', (e) => {
	e.target.value = e.target.value.replace(/[^\d\+]/g,'');
	
	});
	
	input[0].addEventListener('keyup', (e) => {
		e.target.value = e.target.value.replace(/[^\d\+]/g,'');
		
		});
	
}
module.exports = forms;