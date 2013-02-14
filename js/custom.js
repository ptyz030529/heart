$(document).ready(function($){
var scrollorama = $.scrollorama({ blocks:'.slide' });
/*$('#toname').css({
	top:-558
});*/
	scrollorama.onBlockChange(function() {
		var i = scrollorama.blockIndex;
				console.log(scrollorama.blockIndex);
	});
		
scrollorama.animate('#hpvd',{ delay: 0, duration:  300, property:'top', start:0 ,end:250});


scrollorama.animate('#toname',{ delay: -550, duration:  100, property:'left', start:-500 ,end:40});
scrollorama.animate('#catren',{ delay: -300, duration:  200, property:'opacity', start:0 ,end:1});
scrollorama.animate('#diag1',{ delay: 50, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#diag2',{ delay: 100, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#diag3',{ delay: 200, duration:  600, property:'height', start:0 ,end:1200});
scrollorama.animate('#message1',{ delay: 210, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#message1',{ delay: 210, duration:  150, property:'letter-spacing', start:100 ,end:4});

scrollorama.animate('#message2',{ delay: 250, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#message2',{ delay: 250, duration:  150, property:'letter-spacing', start:100 ,end:4});

scrollorama.animate('#tip1',{ delay: 400, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip1',{ delay: 400, duration:  100, property:'width', start:800 ,end:200});
scrollorama.animate('#tip1',{ delay: 400, duration:  100, property:'height', start:800 ,end:200});
scrollorama.animate('#tip1',{ delay: 400, duration:  100, property:'top', start:-280 ,end:140});
scrollorama.animate('#tip1',{ delay: 400, duration:  100, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip2',{ delay: 550, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip2',{ delay: 550, duration:  100, property:'width', start:800 ,end:200});
scrollorama.animate('#tip2',{ delay: 550, duration:  100, property:'height', start:800 ,end:200});
scrollorama.animate('#tip2',{ delay: 550, duration:  100, property:'top', start:-20 ,end:400});
scrollorama.animate('#tip2',{ delay: 550, duration:  100, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip3',{ delay: 700, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip3',{ delay: 700, duration:  100, property:'width', start:800 ,end:200});
scrollorama.animate('#tip3',{ delay: 700, duration:  100, property:'height', start:800 ,end:200});
scrollorama.animate('#tip3',{ delay: 700, duration:  100, property:'top', start:30 ,end:500});
scrollorama.animate('#tip3',{ delay: 700, duration:  100, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip4',{ delay: 800, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip4',{ delay: 800, duration:  150, property:'width', start:800 ,end:200});
scrollorama.animate('#tip4',{ delay: 800, duration:  150, property:'height', start:800 ,end:200});
scrollorama.animate('#tip4',{ delay: 800, duration:  150, property:'top', start:180 ,end:650});
scrollorama.animate('#tip4',{ delay: 800, duration:  150, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip5',{ delay: 950, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip5',{ delay: 950, duration:  150, property:'width', start:800 ,end:200});
scrollorama.animate('#tip5',{ delay: 950, duration:  150, property:'height', start:800 ,end:200});
scrollorama.animate('#tip5',{ delay: 950, duration:  150, property:'top', start:330 ,end:800});
scrollorama.animate('#tip5',{ delay: 950, duration:  150, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#summary',{ delay: 1100, duration:  100, property:'opacity', start:0 ,end:1});
});
