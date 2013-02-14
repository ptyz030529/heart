jQuery(document).ready(function($){
	var winW = $('#load').width();
	var winH = $('#load').height();

	var loadW = $('#load .frame').width();
	var loadH = $('#load .frame').height();

	var loadL = (winW-loadW)/2;
	var loadT = (winH-loadH)/2;
	
	$('#load .frame').css({
		left:loadL,
		top:loadT
	});
	
	$('#load .handle').animate({
		width:'100%'
	},3000,'linear',function(){
		$('#load .handle').fadeOut('fast')
		.fadeIn('fast')
		.fadeOut('fast')
		.fadeIn('fast',function(){
			$('#load').fadeOut('fast');
			$('#main').fadeIn('fast');
		});
	});
});
