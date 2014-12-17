// JavaScript Document

$(document).ready(function(e) {
    $('.popular-div').mouseenter(function(){
		$(this).find('.popular-div-hover').stop(true,true).slideDown(120);	
	}).mouseleave(function(){
		$(this).find('.popular-div-hover').stop(true,true).slideUp(120);
	});
	
	$('.middle-content-share').click(function(e){
		e.stopPropagation();
		$(this).find('.share-dropdown-box').fadeToggle(120);
		
		$('.share-dropdown-box').not(':animated').filter(function(index) {
                        return $(this).css('display') == 'block';
                }).fadeOut(120);
		$('.share-dropdown-box').click(function(e){
			e.stopPropagation();	
		});
		
	});
	
	$('.per-page').click(function(e){
		e.stopPropagation();
		$(this).find('.per-page-dropdown').fadeToggle(120);
	});
	
	$('#user-dropdown').click(function(e){
		e.stopPropagation();
		$(this).find('.user-settings-dropdown').fadeToggle(120).click(function(e){
			e.stopPropagation();	
		});;
	});
	
	$('#head-login-box').click(function(){
		$('.login-popup-window .popup-container').css('margin-top','350px');
		$('.login-popup-window').fadeIn(200);
		$('.login-popup-window .popup-container').animate({'margin-top':'0px'},150);
	});
	
	
	$('.open-change-password').click(function(){
		$('.user-settings-dropdown').fadeOut(200);
		$('.change-password-popup-window .popup-container').css('margin-top','350px');
		$('.change-password-popup-window').fadeIn(200);
		$('.change-password-popup-window .popup-container').animate({'margin-top':'0px'},150);
	});
	
	
	$('.popup-back,.popup-close').click(function(){
		$('.popup-window .popup-container').animate({'margin-top':'350px'},150);
		$('.popup-window').fadeOut(200);
	});
	
	$('html,body').click(function(){
		$('.share-dropdown-box, .per-page-dropdown, .user-settings-dropdown').fadeOut(120);		
	});	
	
	
	$('#rememberme').change(function(){
		if($(this).is(':checked')){
			$('#rememberme').next('label').addClass('active-remember');			
		}
		else{
		$('#rememberme').next('label').removeClass('active-remember');			
		}
	});
	
	
	$('.popular-slide-right').click(function(){
		if(!$('.popular-content-divs').is(':animated') && $('.active-popular-box').next('.popular-content-divs')[0]){
			var getWidth = $('.active-popular-box').width();
			var getPopularWidth = $('.active-most-popular').width();
			$('.active-popular-box').animate({'left':'-' + getWidth*3 + 'px'},400,function(){
				$(this).removeClass('active-popular-box');
				$('.slider-circles > ul > li:eq('+$(this).index()+')').removeClass('active-slider-circle');
			});
			
			$('.active-most-popular').animate({'left':'-' + getPopularWidth*3 + 'px'},400,function(){
				$(this).removeClass('active-most-popular');
			});
			
			$('.active-popular-box').next('.popular-content-divs').css({'left':(getWidth+getPopularWidth+80) + 'px','top':'0px'}).animate({'left':'0px'},400,function(){
				$('.slider-circles > ul > li:eq('+$(this).index()+')').addClass('active-slider-circle');
				$(this).addClass('active-popular-box');	
			});
			
			$('.active-most-popular').next('.most-popular-box').css({'left':(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},400,function(){
				$(this).addClass('active-most-popular');
			});
		}
	});
	
	
	$('.popular-slide-left').click(function(){
		if(!$('.popular-content-divs').is(':animated') && $('.active-popular-box').prev('.popular-content-divs')[0]){
			var getWidth = $('.active-popular-box').width();
			var getPopularWidth = $('.active-most-popular').width();
			
			$('.active-popular-box').animate({'left':'' + getWidth*3 + 'px'},400,function(){
				$(this).removeClass('active-popular-box');
				$('.slider-circles > ul > li:eq('+$(this).index()+')').removeClass('active-slider-circle');				
			});
			
			$('.active-most-popular').animate({'left':'' + getPopularWidth*3 + 'px'},400,function(){
				$(this).removeClass('active-most-popular');				
			});			
			
			$('.active-popular-box').prev('.popular-content-divs').css({'left':-1*(getWidth+getPopularWidth + 80 ) + 'px','top':'0px'}).animate({'left':'0px'},400,function(){
				$('.slider-circles > ul > li:eq('+$(this).index()+')').addClass('active-slider-circle');
				$(this).addClass('active-popular-box');
			});
						
			$('.active-most-popular').prev('.most-popular-box').css({'left':-1*(getWidth+getPopularWidth + 80 ) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},400,function(){
				$(this).addClass('active-most-popular');
			});
		}
	});
	
	$('.slider-circles li').click(function(){
		if(!$(this).hasClass('.active-slider-circle') && !$('.popular-content-divs').is(':animated')){
			var lengthBetween = $('.active-slider-circle').index()-$(this).index();
			var rightSide = false;
			if(lengthBetween < 0){
				rightSide = true;	
			}
			
			lengthBetween = Math.abs(lengthBetween);
			
			$('.active-slider-circle').removeClass('active-slider-circle');
			$(this).addClass('active-slider-circle');
			
			if(lengthBetween > 1){
				if(rightSide){
					var getWidth = $('.active-popular-box').width();
					var getPopularWidth = $('.active-most-popular').width();
					var time = 400;
					time /= lengthBetween;
					time += 50;
					$('.active-popular-box').animate({'left':'-' + getWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-popular-box');
						setTimeout(function(){
							
							$('.active-popular-box').animate({'left':'-' + getWidth*3 + 'px'},time,function(){
								$(this).removeClass('active-popular-box');	
							});
							
							$('.active-most-popular').animate({'left':'-' + getPopularWidth*3 + 'px'},time,function(){
								$(this).removeClass('active-most-popular');
							});
							
							$('.active-popular-box').next('.popular-content-divs').css({'left':(getWidth+getPopularWidth+80 ) + 'px','top':'0px'}).animate({'left':'0px'},time,function(){
								$(this).addClass('active-popular-box');
							});
							
							$('.active-most-popular').next('.most-popular-box').css({'left':(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},time,function(){
								$(this).addClass('active-most-popular');
							});
							
						},1);
					});
					
					$('.active-most-popular').animate({'left':'-' + getPopularWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-most-popular');
					});
					
					$('.active-popular-box').next('.popular-content-divs').css({'left':(getWidth+getPopularWidth+80 ) + 'px','top':'0px'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-popular-box');	
					});
					
					$('.active-most-popular').next('.most-popular-box').css({'left':(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-most-popular');
					});
					
				}
				else{				
					var getWidth = $('.active-popular-box').width();
					var getPopularWidth = $('.active-most-popular').width();
					var time = 400;
					time /= lengthBetween;
					time += 50;
					$('.active-popular-box').animate({'left':'' + getWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-popular-box');
						setTimeout(function(){							
							$('.active-popular-box').animate({'left':'' + getWidth*3 + 'px'},time,function(){
								$(this).removeClass('active-popular-box');
							});
							
							$('.active-most-popular').animate({'left':'' + getPopularWidth*3 + 'px'},time,function(){
								$(this).removeClass('active-most-popular');
							});
							
							$('.active-popular-box').prev('.popular-content-divs').css({'left':-1*(getWidth+getPopularWidth+80 ) + 'px','top':'0px'}).animate({'left':'0px'},time,function(){
								$(this).addClass('active-popular-box');	
							});
							
							$('.active-most-popular').prev('.most-popular-box').css({'left':-1*(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},time,function(){
								$(this).addClass('active-most-popular');
							});	
						},1);
					});
					
					$('.active-most-popular').animate({'left':'' + getPopularWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-most-popular');
					});
					
					$('.active-popular-box').prev('.popular-content-divs').css({'left':-1*(getWidth+getPopularWidth+80 ) + 'px','top':'0px'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-popular-box');
					});
					
					$('.active-most-popular').prev('.most-popular-box').css({'left':-1*(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-most-popular');
					});						
				}
			}
			
			else{
				if(rightSide){
					var getWidth = $('.active-popular-box').width();
					var getPopularWidth = $('.active-most-popular').width();
					var time = 400;
					
					$('.active-popular-box').animate({'left':'-' + getWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-popular-box');						
					});
					
					$('.active-most-popular').animate({'left':'-' + getPopularWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-most-popular');
					});
					
					$('.active-popular-box').next('.popular-content-divs').css({'left':(getWidth+getPopularWidth+80 ) + 'px','top':'0px'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-popular-box');	
					});
					
					$('.active-most-popular').next('.most-popular-box').css({'left':(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-most-popular');
					});
				}
				
				else{
					var getWidth = $('.active-popular-box').width();
					var getPopularWidth = $('.active-most-popular').width();
					var time = 400;
					$('.active-popular-box').animate({'left':'' + getWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-popular-box');						
					});
					
					$('.active-most-popular').animate({'left':'' + getPopularWidth*3 + 'px'},time,function(){
						$(this).removeClass('active-most-popular');
					});
					
					$('.active-popular-box').prev('.popular-content-divs').css({'left':-1*(getWidth+getPopularWidth+80 ) + 'px','top':'0px'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-popular-box');
					});
					
					$('.active-most-popular').prev('.most-popular-box').css({'left':-1*(getWidth+getPopularWidth+80) + 'px','top':'0px','display':'block'}).animate({'left':'0px'},time,function(){
						$(this).addClass('active-most-popular');
					});
				}
				
			}
		}
	});

	
});