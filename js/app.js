$(document).ready(function(){


	$('.item').mouseover(function(){
		if ($(this).hasClass('complete_add')) {
			$(this).addClass('destroy');
			$(this).find('.remove').show();
		}
		else {
			$(this).addClass('complete');
		}
	})
	.mouseleave(function(){
		$(this).removeClass('complete destroy');
	})
	.dblclick(function(){
		if ($(this).hasClass('destroy_add')) {
			$(this).closest('.item').remove();
		}
	})
	.mousedown(function(){
		if ($(this).hasClass('complete_add')) {
			$(this).addClass('destroy_add');
			$(this).removeClass('complete_add');
			$(this).addClass('destroy');
		}
		else {
			$(this).addClass('complete_add');
		}
	});

});

// function clicks() {
// 	$(this).on('click', function(e) {
		
// 	}
// }