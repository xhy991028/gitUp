
$(function(){
	
	$('.filters.demo1').filters();
	
	$('.filters.demo2').filters({
		css3: {
			init: false
		},
		move: {
			easing: 'easeOutBack',
			duration: 400
		},
		fade: {
			duration: [400, 400]
		}
	});
	
	$('.filters.demo3').filters({
		move: {
			init: false
		},
		css3: {
			init: false
		},
		fade: {
			opacity: [.1, 1]
		}
	});
	
	$('.filters.demo4').filters({
		css3: {
			transform: {
				scale: '0',
				rotate: '-90deg',
				skew: '45deg'
			}
		}
	});
	
});
