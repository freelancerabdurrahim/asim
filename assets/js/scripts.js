$(document).ready(function(){
	// Mobile Menu
	// $('.mobile_bars').click(function(){
	// 	$('.header_area_nav').slideToggle(1000);

	// 	return false
	// });


	$(".mobile_bars").click(function(){
		$(".header_area_nav").toggleClass("sideShow_menu");
	  });

	// readMore start
	$('.read_more_btn1 a').click(function(){
		$('.read_more1 p').slideToggle(1000);

		return false
	});

	$('.read_more_btn2 a').click(function(){
		$('.read_more2 p').slideToggle(1000);

		return false
	});
	$('.read_more_btn3 a').click(function(){
		$('.read_more3 p').slideToggle(1000);

		return false
	});
	
	$('.read_more_btn4 a').click(function(){
		$('.read_more4 p').slideToggle(1000);

		return false
	});
	$('.read_more_btn5 a').click(function(){
		$('.read_more5 p').slideToggle(1000);

		return false
	});
	
	$('.read_more_btn6 a').click(function(){
		$('.read_more6 p').slideToggle(1000);

		return false
	});
// readMore End




// project popup
	$('.floowPlanPopup').magnificPopup({
		type: 'image',
		zoom: {
			enabled: true
		}
   })

//    gallery popup
$('.gallery_popup').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	  }
})

$('.toggle_download_btn').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#name',

	// When elemened is focused, some mobile browsers in some cases zoom in
	// It looks not nice, so we disable it:
	callbacks: {
		beforeOpen: function() {
			if($(window).width() < 700) {
				this.st.focus = false;
			} else {
				this.st.focus = '#name';
			}
		}
	}
});

$('.toggle_download_btn2').magnificPopup({
	type: 'inline',
	preloader: false,
	focus: '#name',

	// When elemened is focused, some mobile browsers in some cases zoom in
	// It looks not nice, so we disable it:
	callbacks: {
		beforeOpen: function() {
			if($(window).width() < 700) {
				this.st.focus = false;
			} else {
				this.st.focus = '#name';
			}
		}
	}
});

// $(".download_btn").click(function(){
//     $(".download_popup_form").toggleClass("gggg");
//   });



$('.table_popup_youtube').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});





});