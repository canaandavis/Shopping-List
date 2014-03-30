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

// Adds a new item to the list
// calls updateStyle(); to allow functanality on new items

function addItem() {
	var value = $('#input-field').val();
	var editTools = '<div class="remove"><div class="delete"><i class="fa fa-times-circle" id="remove-circle"></i></div><div class="keep"><i class="fa fa-undo" id="undo-circle"></i></div></div>';
	var listItem = '<div class="item">' + editTools + '<span>' + value + '</span>' + '</div>';
	$('.list').prepend(listItem);
	$('#input-field').val('');
	updateStyle();
}

// Reset button function

function removeAll(event) {
	event.find('.list').empty();
}

// Add and remove styles from list items

function updateStyle() {
	$('.item').mouseenter(function(){
		mouseLeave = false;
		if ($(this).hasClass('complete') === false && mouseLeave === false ) {
			$(this).closest('.item').addClass('complete-show');
		}

		else if (mouseLeave === false) {
			revealTools($(this));
		}

	});

	$('.item').mouseleave(function(){
		mouseleave = true;
		$(this).removeClass('show complete-show');
		hideTools($(this));
	});

	$('.item').mousedown(function(){
		if ($(this).hasClass('show') === false && mouseLeave === false) {
			$(this).addClass('complete')
			.removeClass('complete-show');
			revealTools($(this));
		}
		else {
			$(this).mousedown(function(){
				mouseLeave = false;
			});

		}
	});
}

var mouseLeave = true;


// Hide Edit Tools

function hideTools(event) {
	event.find('.remove').slideUp();
}

// function to reveal edit tools of list item
// allows function of edit tools as well

function revealTools(event) {
	event.find('.remove').slideDown();
	event.find('.delete').mouseover(function(){
		$(this).closest('.item').addClass('destroy');
	})
	.mouseleave(function(){
		$(this).closest('.item').removeClass('destroy');
	})
	.mousedown(function(){
		$(this).closest('.item').remove();
	});
	event.find('.keep').mouseenter(function(){
		$(this).closest('.item').addClass('show');
	})
	.mouseleave(function(){
	if ($(this).closest('.item').hasClass('complete')) {
			$(this).closest('.item').removeClass('show');
		}
	})
	.mousedown(function(){
		$(this).closest('.item').removeClass('complete show');
		$(this).closest('.item').find('.remove').slideUp();
		mouseLeave = true;
	});
}