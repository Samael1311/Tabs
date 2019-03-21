$(document).ready(function(){

	$('.main_btn').on('click', showModal);
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

});

