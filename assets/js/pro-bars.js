//	ProBars v1.1, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	===============================================================================

	$(document).ready(function() {
		$('.pro-bar').each(function(i, elem) {
			var	$elem = $(this),
				percent = $elem.attr('data-pro-bar-percent'),
				delay = $elem.attr('data-pro-bar-delay');

			if (!$elem.hasClass('animated'))
				$elem.css({ 'width' : '0%' });

			$(elem).appear(function () {
				setTimeout(function() {
					$elem.animate({ 'width' : percent + '%' }, 2000, 'easeInOutExpo').addClass('animated');
				}, delay);
			});
		});
	});