$(document).ready(function(){

	$(".nav-mobile").on("click",function(){
		$(".mobile-menu").toggle(".active-mobile-menu")
	})
	$(".mnu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('#up').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
	});
	$(window).scroll(function () {
        if ($(document).scrollTop() > 300) {
            $('#sale1').fadeIn('fast');
            // jQuery('#messenger').fadeIn('fast');
        } else {
            $('#sale1').fadeOut('fast');
            // jQuery('#messenger').fadeOut('fast');
        }
    });

	new WOW().init();
    var clock, clock2;

        console.log("ready state flip");
		var clock;

		clock = $('.clock').FlipClock({
			clockFace: 'HourlyCounter',
			autoStart: false,
			callbacks: {
				stop: function() {
					$('.message').html('The clock has stopped!')
				}
			}
		});

		clock.setTime(48695);
		clock.setCountdown(true);
		clock.start();

		clock2 = $('.clock2').FlipClock({
			clockFace: 'HourlyCounter',

			autoStart: false,
			callbacks: {
				stop: function() {
					$('.message2').html('The clock has stopped!')
				}
			}
		});
		clock2.setTime(48695);
		clock2.setCountdown(true);
		clock2.start();

		$('.review-slider').slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					dots: false
				  }
				}
			  ]
		});
		$('.videos-slider').slick({
			 autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					dots: false
				  }
				}
			  ]
		});
		$('.wemedia-slider').slick({
		
		
			slidesToShow: 2,
			
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				  }
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			  ]
		});
		

		$('.video').click(function(){this.paused?this.play():this.pause();});
    
		// $(function () {
		// 	var icons = {
		// 		header: "circle-plus1",
		// 		activeHeader: "circle-minus1"
		// 	};
		// 	$("#accordion").accordion({
		// 		icons: icons
		// 	});
		// 	$("#toggle").button().on("click", function () {
		// 		if ($("#accordion").accordion("option", "icons")) {
		// 			$("#accordion").accordion("option", "icons", null);
		// 		} else {
		// 			$("#accordion").accordion("option", "icons", icons);
		// 		}
		// 	});
		// });
})