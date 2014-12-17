// JavaScript Document

$(document).ready(function(e) {
	$('.search-dropdown-big').show();
	$('.search-dropdown-big').css('visibility','hidden');
	
	var alphabetArr = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	for(var i = alphabetArr.length-1; i >= 0; i--){
		$('.alphabet-list').prepend(
		'<div data-alphabet="' + alphabetArr[i] +'">' + alphabetArr[i] + '</div>'
		);
	}
	
	$('.alphabet-list > span').each(function(index, element) {
		var letter = $(this).text().substr(0,1).toUpperCase();
		$(this).prevAll('div[data-alphabet="' + letter + '"]').attr('data-content','1').after('<span>' + $(this).html() + '</span>');
		$(this).remove();
        });
	
	$('.alphabet-list > div[data-content!="1"]').remove();
	
	setTimeout(function(){
	
	$('.search-dropdown-big').each(function(index, element) {
                $(this).find('.alphabet-list').css('height',($(this).find('.checkbox-list:eq(0)').height() + 10) + 'px');
        });
	
        $(".alphabet-list").niceScroll({cursorcolor:"rgba(96,96,96,0.7)",cursoropacitymax:"0.7", cursorwidth:'8px',cursorborder:'',cursorborderradius: "0",
	 scrollspeed:5});
	$('.search-dropdown-big').hide();
	$('div[id*="ascrail"]').hide();
	
	$('.search-dropdown-big').css('visibility','');
	},50);
	$('#industry-select-search,#topic-select-search').click(function(e){
		e.stopPropagation();
		if($(this).find('.search-dropdown-big').css('display') == 'none'){
			$('.search-dropdown-big').fadeOut(150);
			$('div[id*="ascrail"]').hide();
		}
		$(this).find('.search-dropdown-big').fadeToggle(150);
		var eq = '1';
		if($(this).attr('id') == 'industry-select-search'){
			eq = '0';
		}
		
		$('div[id*="ascrail"]:eq(' + eq + ')').toggle();		
	});
		
	$('.search-dropdown-big').click(function(e){
		e.stopPropagation();	
	});
	
	$('div[id*="ascrail"] > div').click(function(e){
		e.stopPropagation();
	});
	
	$('#browse-search-input').keydown(function(e){
		var key = e.which?e.which:e.keyCode;
		if(key == 13){
			e.preventDefault();
			if($(this).val().replace(/ */,'') != ''){
				$(this).val($(this).val().replace(/ +/,' '));
				$('.keywords-list').append('<span class="keyword-li" style="display:none;">'
				 + $(this).val() + 
				 '<img src="images/keyword-x.png" class="keyword-x" /><span class="keyword-li-arrow"></span></span>');
				
				
				$('.browse-tags-container').slideDown(200,function(){					
				});
					$('.keywords-list > .keyword-li:last-child').show(120,function(){
						$('.clear-all-keywords').fadeIn(200);
					});	
				
				$(this).val('');
			}
		}
	});
	
	$('.clear-all-keywords').click(function(){
		$('.keyword-li').hide(120,function(){
			$(this).remove();					
			$('.browse-tags-container').slideUp(200);
		});
		
		$(this).hide(120);
	});
	
	$(document).on('click','.keyword-x',function(){
		$(this).parent('.keyword-li').hide(120,function(){
			$(this).remove();
		});
		
		if($('.keyword-li').length <= 1){
			$('.clear-all-keywords').fadeOut(200);
			$('.browse-tags-container').slideUp(200);
		}
	});
	
	$(document).click(function(e){
		var isScrollBar = $(e.target).parent('div').attr('id')?($(e.target).parent('div').attr('id').search('ascrail')>-1):false;
		if(!isScrollBar){
			$('.search-dropdown-big').fadeOut(150);
			$('div[id*="ascrail"]').hide();
		}
		
		$('.search-select-dropdown').slideUp(120);
		
	});
	
	$('#recent-select-search,#duration-select-search').click(function(e){
		e.stopPropagation();
		if($(this).find('.search-select-dropdown').css('display') == 'none'){
			$('.search-select-dropdown').slideUp(120);
		}
		
		$(this).find('.search-select-dropdown').slideToggle(120);
		
	});
	
	$('.search-select-dropdown span').click(function(){
		$(this).parents('.input-search-select').find('.input-search-selected').text($(this).text());
	});
	
	$('.select-all-selections').click(function(){
		if(!$(this).parents('.search-dropdown-big').find('.all-selection').hasClass('checked-parameter')){
			$(this).parents('.search-dropdown-big').find('.all-selection').click();
		}
	});
	
	$('.clear-all-selections').click(function(){
		$(this).parents('.search-dropdown-big').find('.checkbox-list > span').removeClass('checked-parameter');
	});
	
	$('.checkbox-list span').click(function(){
		$(this).toggleClass('checked-parameter');
		if(!$(this).hasClass('all-selection')){
			$(this).parents('.select-dropdown-sides').find('.all-selection').removeClass('checked-parameter');
		}
		else{
			if($(this).hasClass('checked-parameter')){
				$(this).parents('.select-dropdown-sides').find('.checked-parameter:not(.all-selection)').removeClass('checked-parameter');
			}
		}
	});
	
});