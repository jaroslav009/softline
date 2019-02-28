$(function() {
	$('.single-item').slick({
		dots: true,
		dotsClass: "my-dots",
	  	focusOnSelect: true,
	  	nextArrow: '<div class="arrow-right"><i class="fas fa-angle-right"></i></div>',
 		prevArrow: '<div class="arrow-left"><i class="fas fa-angle-left"></i></div>',
	});

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