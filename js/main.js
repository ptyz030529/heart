jQuery(document).ready(function($){
	winW = $('#load').width();
	winH = $('#load').height();

	var loadW = $('#load .frame').width();
	var loadH = $('#load .frame').height();

	var loadL = (winW-loadW)/2;
	var loadT = (winH-loadH)/2;
	
	$('#load .frame').css({
		left:loadL,
		top:loadT
	});
	jQuery('#happy').height(winH);
	$('#load .handle').animate({
		width:'100%'
	},3000,'linear',function(){
		$('#load .handle').fadeOut('fast')
		.fadeIn('fast')
		.fadeOut('fast')
		.fadeIn('fast',function(){
			$('#load').fadeOut('fast');
			$('#main').fadeIn('fast',function(){
				initAnimate();
			});
		});
	});
});


function initAnimate(){
	
	var scrollorama = $.scrollorama({ blocks:'.slide' });
/*$('#toname').css({
	top:-558
});*/
	
		
scrollorama.animate('#hpvd',{ delay: 0, duration:  300, property:'top', start:0 ,end:250});


scrollorama.animate('#toname',{ delay: 200, duration:  100, property:'left', start:-500 ,end:40});
scrollorama.animate('#catren',{ delay: 300, duration:  200, property:'opacity', start:0 ,end:1});
scrollorama.animate('#diag1',{ delay: 550, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#diag2',{ delay: 600, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#diag3',{ delay: 700, duration:  600, property:'height', start:0 ,end:1600});
scrollorama.animate('#message1',{ delay: 710, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#message1',{ delay: 710, duration:  150, property:'letter-spacing', start:100 ,end:4});

scrollorama.animate('#message2',{ delay: 750, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#message2',{ delay: 750, duration:  150, property:'letter-spacing', start:100 ,end:4});

scrollorama.animate('#tip1',{ delay: 900, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip1',{ delay: 900, duration:  100, property:'width', start:800 ,end:200});
scrollorama.animate('#tip1',{ delay: 900, duration:  100, property:'height', start:800 ,end:200});
scrollorama.animate('#tip1',{ delay: 900, duration:  100, property:'top', start:-280 ,end:140});
scrollorama.animate('#tip1',{ delay: 900, duration:  100, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip2',{ delay: 1050, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip2',{ delay: 1050, duration:  100, property:'width', start:800 ,end:200});
scrollorama.animate('#tip2',{ delay: 1050, duration:  100, property:'height', start:800 ,end:200});
scrollorama.animate('#tip2',{ delay: 1050, duration:  100, property:'top', start:-20 ,end:400});
scrollorama.animate('#tip2',{ delay: 1050, duration:  100, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip3',{ delay: 1200, duration:  100, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip3',{ delay: 1200, duration:  100, property:'width', start:800 ,end:200});
scrollorama.animate('#tip3',{ delay: 1200, duration:  100, property:'height', start:800 ,end:200});
scrollorama.animate('#tip3',{ delay: 1200, duration:  100, property:'top', start:30 ,end:500});
scrollorama.animate('#tip3',{ delay: 1200, duration:  100, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip4',{ delay: 1300, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip4',{ delay: 1300, duration:  150, property:'width', start:800 ,end:200});
scrollorama.animate('#tip4',{ delay: 1300, duration:  150, property:'height', start:800 ,end:200});
scrollorama.animate('#tip4',{ delay: 1300, duration:  150, property:'top', start:180 ,end:650});
scrollorama.animate('#tip4',{ delay: 1300, duration:  150, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#tip5',{ delay: 1450, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip5',{ delay: 1450, duration:  150, property:'width', start:800 ,end:200});
scrollorama.animate('#tip5',{ delay: 1450, duration:  150, property:'height', start:800 ,end:200});
scrollorama.animate('#tip5',{ delay: 1450, duration:  150, property:'top', start:330 ,end:800});
scrollorama.animate('#tip5',{ delay: 1450, duration:  150, property:'margin-left', start:-300 ,end:0});


scrollorama.animate('#tip6',{ delay: 1600, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip6',{ delay: 1600, duration:  150, property:'width', start:800 ,end:200});
scrollorama.animate('#tip6',{ delay: 1600, duration:  150, property:'height', start:800 ,end:200});
scrollorama.animate('#tip6',{ delay: 1600, duration:  150, property:'top', start:480 ,end:950});
scrollorama.animate('#tip6',{ delay: 1600, duration:  150, property:'margin-left', start:-300 ,end:0});


scrollorama.animate('#tip7',{ delay: 1750, duration:  150, property:'opacity', start:0 ,end:1});
scrollorama.animate('#tip7',{ delay: 1750, duration:  150, property:'width', start:800 ,end:200});
scrollorama.animate('#tip7',{ delay: 1750, duration:  150, property:'height', start:800 ,end:200});
scrollorama.animate('#tip7',{ delay: 1750, duration:  150, property:'top', start:630 ,end:1100});
scrollorama.animate('#tip7',{ delay: 1750, duration:  150, property:'margin-left', start:-300 ,end:0});

scrollorama.animate('#summary',{ delay: 2000, duration:  100, property:'opacity', start:0 ,end:1});


}
