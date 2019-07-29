$(document).ready(function() {
	var winW = $(window).width();
	//header js starts
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 150) {
			$('nav').addClass('fixed-header');
		} else {
			$('nav').removeClass('fixed-header');
		}
	});
	//header js ends

	//active class js starts
	$(".navbar-nav li").click(function() {
		$(".navbar-nav li").removeClass("active");
		$(this).addClass("active");
	});

	//active class js ends
	//scrool js starts
	$('.navbar-nav li a.menu').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	//scroll js ends
	//calculate the header height
	// var headerH = $('.navbar').outerHeight();

	// $("header").after("<div class='afterHeader'></div>");
	// $(".afterHeader").css('height', headerH);
	//calculate the header height
});