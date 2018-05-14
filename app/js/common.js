$(document).ready(function(){
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
			dots: true
		});
		$('.videos-slider').slick({
			 autoplay: true,
			autoplaySpeed: 5000,
			dots: true
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
					dots: true
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