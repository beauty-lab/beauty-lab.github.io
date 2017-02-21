$(document).ready(function(){
	//Слайдер на  главной
	$('.main_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		centerMode: true,
		arrows: true,
		centerPadding: 0
	});
	
	//Стили для селектов
	(function($) {
		$(function() {

			$('.styler').styler();

		});
	})(jQuery);
	
	//Открытие формы регистрации
	$(".reg__open").fancybox({
		width: 676,
		height: 374,
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});
	
    //Открытие формы регистрации
	$(".send__open").fancybox({
		width: 450,
		height: 510,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});
    
    $(".popup__phone").mask("+7(999)999-99-99",{placeholder:"+7(___)___-__-__"});
    
	//Открытие формы обратной связи
	$(".feedback__open").fancybox({
		width: 676,
		height: 374,
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});

	//Открытие формы обратной связи
	$(".cities__open").fancybox({
		width: 950,
		height: 400,
		fitToView	: false,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'true',
		closeEffect	: 'true'
	});

	
});