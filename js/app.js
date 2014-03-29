$(document).ready(function(){

	$('.input').find('#input-field').keydown(function(event){
		if (event.keyCode === 13) {
			addItem();
		}
	});

	$('.reset').click(function(){
		$('.list').empty();
	});
});

function addItem() {
	var value = $('#input-field').val();
	var editTools = '<div class="remove"><div class="delete"><i class="fa fa-times-circle" id="remove-circle"></i></div><div class="keep"><i class="fa fa-undo" id="undo-circle"></i></div></div>';
	var listItem = '<div class="item">' + editTools + '<span>' + value + '</span>' + '</div>';
	$('.list').prepend(listItem);
	$('#input-field').val('');
	updateStyle();

}

function removeAll(event) {
	event.find('.list').empty();
}

function updateStyle() {
	$('.item').mouseenter(function(){
		if ($(this).hasClass('complete') === false) {
			$(this).closest('.item').addClass('complete-show');
		}

		else {
			revealTools($(this))
		}

	});

	$('.item').mouseleave(function(){
		hideTools($(this));
	});

	$('.item').mousedown(function(){
		if ($(this).hasClass('show') == false) {
			$(this).addClass('complete');
			revealTools($(this));
		}
		else {
			revealTools($(this));
		}
	});
}

function hideTools(event) {
	event.removeClass('complete-show')
		.find('.remove').slideUp();
}

function revealTools(event) {
	event.find('.remove').slideDown();
	event.find('.delete').mouseover(function(){
		$(this).closest('.item').addClass('destroy');
	})
	.mouseleave(function(){
		$(this).closest('.item').removeClass('destroy')
	})
	.mousedown(function(){
		$(this).closest('.item').remove();
	});
	event.find('.keep').mouseenter(function(){
		$(this).closest('.item').addClass('show');
	})
	.mouseleave(function(){
		$(this).closest('.item').removeClass('show');
	})
	.mousedown(function(){
		$(this).closest('.item').removeClass('complete');
	});
}

// function updateStyle() {
// 	$('.item').mouseover(function(){
// 		if ($(this).hasClass('complete_add')) {
// 			$(this).addClass('destroy');
// 			$(this).find('.remove').slideDown();
// 			$(this).find('.delete').mousedown(function(){
// 				$(this).closest('.item').remove();
// 			})
// 			$(this).find('.keep').mousedown(function(){
// 				$(this).closest('.item').removeClass('destroy');
// 			})
// 		}
// 		else {
// 			$(this).addClass('complete');
// 		}
// 	})
// 	.mouseleave(function(){
// 		$(this).removeClass('complete destroy');
// 		$(this).find('.remove').slideUp();
// 	})
// 	.mousedown(function(){
// 		if ($(this).hasClass('complete_add')) {
// 			// $(this).removeClass('complete_add');
// 			// $(this).addClass('destroy');
// 		}
// 		else {
// 			$(this).addClass('complete_add');
// 			$(this).addClass('destroy');
// 			$(this).find('.remove').slideDown();
// 		}
// 	});
// }