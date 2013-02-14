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
scrollorama.animate('#diag3',{ delay: 200, duration:  300, property:'height', start:0 ,end:600});
});
