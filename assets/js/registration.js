// JavaScript Document

$(document).ready(function(e) {
    $('input[name="gender"]').change(function(){
		$('input[name="gender"]').next('label').removeClass('active-gender');
		$(this).next('label').addClass('active-gender');	
	});
	
	$('#signup-email').change(function(){
		if($(this).is(':checked')){
			$('#signup-email').next('label').addClass('active-gender');			
		}
		else{
		$('#signup-email').next('label').removeClass('active-gender');			
		}
	});
	
	$(document).on('click','.select-dropdown-arrow',function(){
		var elem = $(this).nextAll('select');if (document.createEvent) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        elem[0].dispatchEvent(e);
    } else if (element.fireEvent) {
        elem[0].fireEvent("onmousedown");
    }
	});
	
	
	$('#upload-photo').change(function(){
		$('#uploaded-photo-name').val($(this).val());
	});
	
	$('#keywords-input').keydown(function(e){
		var keycode = e.which?e.which:e.keyCode;
		if(keycode === 188){
			e.preventDefault();
			if($(this).val().replace(/ */,'') != '' && $('.keywords-list > .keyword-li').length < 5){
				$(this).val($(this).val().replace(/ +/,' '));
				$('.keywords-list').append('<span class="keyword-li" style="display:none;">'
				 + $(this).val() + 
				 '<img src="images/keyword-x.png" class="keyword-x" /><span class="keyword-li-arrow"></span></span>');
				
				$('.keywords-list > .keyword-li:last-child').show(120);
				
				$('#keywords').append('<option selected="selected" value="' 
				+ $(this).val() + '">' 
				+ $(this).val() + '</option>');
				$(this).val('');
			}
			
		}
	});
	
	$(document).on('click','.keyword-x',function(){
		$('#keywords > option:eq(' + $(this).parent('.keyword-li').index() + ')').remove();
		$(this).parent('.keyword-li').hide(120,function(){
			$(this).remove();
		});
	});
	
	$('.add-selector-bottom').click(function(){
		var content = $(this).prev('.selectors-box').html();
		$(this).prev('.selectors-box').after('<div class="selectors-box" style="display:none;">' + content + '</div>');
		$(this).prev('.selectors-box').children('label').remove();
		$(this).prev('.selectors-box').slideDown(200);		
	});
	
});