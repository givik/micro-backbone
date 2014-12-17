// JavaScript Document

$(document).ready(function(e) {
	$('.select-all-wl').click(function(){
		if(!$('.select-all-wl').hasClass('checked-select-all-wl')){
			$('.select-all-wl').addClass('checked-select-all-wl');	
			$('.watch-later-content').addClass('checked-wl');		
		}
		else{
			$('.select-all-wl').toggleClass('checked-select-all-wl');
			$('.watch-later-content').toggleClass('checked-wl');
		}
	});
	
	$('.checkbox-wl').click(function(){
		$('.select-all-wl').removeClass('checked-select-all-wl');
		$(this).parent('.watch-later-content').toggleClass('checked-wl');	
	});
});