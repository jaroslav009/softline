$(function() {
	$('.single-item').slick({
		dots: true,
	  	focusOnSelect: true,
	  	nextArrow: '<div class="arrow-right"><i class="fas fa-angle-right"></i></div>',
 		prevArrow: '<div class="arrow-left"><i class="fas fa-angle-left"></i></div>',
	});

	$(document).ready(function(){
	    $('.item-sub-menu').click( function(){ // ловим клик по ссылке с классом go_to
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
		    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
	        }
		    return false; // выключаем стандартное действие
	    });
	});

	$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: false,
    // autoplay:true,
    // autoplayTimeout:5000,
    // autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

});
