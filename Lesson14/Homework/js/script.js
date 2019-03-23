$(document).ready(function(){

	$('.main_btn').on('click', animation);
	$('.main_btna').on('click', showModal);
	$('nav ul li').eq(1).on('click', showModal);
	$('.modal button span').on('click', hideModal);

	function showModal(){
		$('.overlay').fadeIn('slow');
	
		$('.modal').slideDown('slow');
		$('.modal').css('display', 'block');
	
	};

	function hideModal(){
		$('.modal').slideUp('slow');	
		$('.overlay').fadeOut('slow');
	}


	function animation(){	
		$('.overlay').animate(
			{height: "hide",
			opacity: 'toggle'}, {
				duration: 3000,
				specialEasing:{
					opacity: 'linear',
					height: 'swing'
				}
			});
			$('.modal').slideDown('slow');
			$('.modal').css('display', 'block');
	}

	let $data = {};
	$('form button').on('click', function(){

	$('.form-inline').find('input').each(function(){
		$data[this.name] = $(this).val();
		console.log(this.name+'='+this.value);
	});
	

		$.ajax({
			type: 'POST',
			url: 'server.php',
			data: $data,
			success: function(result){
				
			}
		});

	});





});

