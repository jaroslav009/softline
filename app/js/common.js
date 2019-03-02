$(function() {
	$('.single-item').slick({
		dots: true,
		dotsClass: "my-dots",
	  	focusOnSelect: true,
	  	nextArrow: '<div class="arrow-right"><i class="fas fa-angle-right"></i></div>',
 		prevArrow: '<div class="arrow-left"><i class="fas fa-angle-left"></i></div>',
	});

	$('.item-sub-menu').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
	    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
	    }
	    return false; // выключаем стандартное действие
	});
	var countHamb = 1;
	$('#hamburger-menu').click(function() {
		if(countHamb == 1) {
			countHamb = 0;
			$('.hamburger').addClass('is-active');
			$('.head-menu').animate({width:'toggle'},350);
			$("body").css("overflow","hidden"); 
			
			console.log('2')

		} else if (countHamb == 0){
			countHamb = 1;
			$('.hamburger').removeClass('is-active');
			$('.head-menu').animate({width:'toggle'},350);
			$("body").css("overflow","auto");
			console.log('1')
		}
		
	})

});

jQuery(function($){  
   $("#recipient-phone").mask("+7 999 999 99 99");  
});

$('#recipient-name').focus(function(){
	$('.name').addClass('active');
});
$('#recipient-company').focus(function(){
	$('.company').addClass('active');
});
$('#recipient-phone').focus(function(){
	$('.phone').addClass('active');
});
$('#recipient-email').focus(function(){
	$('.email').addClass('active');
});
$('#recipient-question').focus(function(){
	$('.question').addClass('active');
});

 $( "#number" )
    .selectmenu({
  		open: function( event, ui ) {
  			// $('.ui-selectmenu-button-open').css("background-color", "#FBFBFB");
  			console.log('dqwdqwqw')
  		}
	})
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );

 $( "#number-2" )
    .selectmenu({
  		open: function( event, ui ) {
  			// $('.ui-selectmenu-button-open').css("background-color", "#FBFBFB");
  			console.log('dqwdqwqw')
  		}
	})
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );

$('.ui-selectmenu-button-open').click(function() {
	console.log('123');
})

$( ".selector" ).selectmenu({
  focus: function( event, ui ) {}
});