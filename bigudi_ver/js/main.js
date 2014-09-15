$(document).ready(function(){

	// Таймер
	var year = $(".count").attr("data-year"),
			month = $(".count").attr("data-month"),
			day = $(".count").attr("data-day"),
			hour = $(".count").attr("data-hour"),
			minutes = $(".count").attr("data-minutes"),
			seconds = $(".count").attr("data-seconds");
  var newDate = new Date(year,month,day,hour,minutes,seconds); 
	$('.count').countdown({until: newDate});

  // Слайдер
  $('.slider').bxSlider({
    slideWidth: 180,
    minSlides: 1,
    maxSlides: 6,
    moveSlides: 1,
    slideMargin: 30,
    pager: false
  });

  //Скроллинг
  $('.recall_btn_two a').smoothScroll({offset: 0,speed: 1250});
  $('.recall_btn_three a').smoothScroll({offset: 0,speed: 1250});
  $('.more a').smoothScroll({offset: 0,speed: 1250});
  $('.howto a').smoothScroll({offset: 0,speed: 750});
  $('.look_bigudy a').smoothScroll({offset: 0,speed: 750});
  $('.buy_bigudy a').smoothScroll({offset: 0,speed: 750});

  // Попап телефона
  $('.popup_btn').click(function(){
    $('.popup').bPopup({closeClass:'close'});
    console.log("click");
  });

  // Галерии
  $('.instruction li a').addClass('group');
	$(".group").colorbox({rel:'group',fixed:"true"});

  $('.slider .image a').addClass('gallery');
  $(".gallery").colorbox({rel:'gallery',fixed:"true"});


  // Попап у доставки
  $(".delivery li").hover(function(){
    $(this).find(".info-popup").show();
  },function(){
    $(this).find(".info-popup").hide();
  })

  // маска Телефонов
  jQuery(function($){
    $("#phone1").mask("+7 (999) 999-99-99");
    $("#phone2").mask("+7 (999) 999-99-99");
    $("#phone3").mask("+7 (999) 999-99-99");
  });

});