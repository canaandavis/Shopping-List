$(document).ready(function(){


	$('.item').mouseover(function(){
		if ($(this).hasClass('complete_add')) {
			$(this).addClass('destroy');
			$(this).find('.remove').slideDown();
			$(this).find('.remove').slideDown();
			$(this).find('.delete').mousedown(function(){
				$(this).closest('.item').remove();
			});
		}
		else {
			$(this).addClass('complete');
		}
	})
	.mouseleave(function(){
		$(this).removeClass('complete destroy');
		$(this).find('.remove').slideUp();
	})
	.mousedown(function(){
		if ($(this).hasClass('complete_add')) {
			// $(this).removeClass('complete_add');
			// $(this).addClass('destroy');
		}
		else {
			$(this).addClass('complete_add');
			$(this).addClass('destroy');
			$(this).find('.remove').slideDown();
		}
	});

});

function removeItem() {
	$(this).find('.remove').slideDown();
		$(this).find('.delete').mousedown(function(){
			$(this).closest('.item').remove();
		})
}