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

})