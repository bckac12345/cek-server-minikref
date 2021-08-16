$(document).ready(function(){
	"use strict";

	var obfuscated_animation_request_id = -1;

	$('.show-toggle').each(function(){
		var toggle = $(this);
		var toggle_elm = $('#' + $(this).attr('id').replace('show_', ''));

		toggle_elm.hide();

		toggle.click(function(e){
			var current_text = toggle.text();
			var next_text = toggle.data('toggle-text');

			toggle.text(next_text);
			toggle.data('toggle-text', current_text);

			toggle_elm.fadeToggle();
			e.preventDefault();
		});
	});

	$('#players img').tooltip();

	$('form input[type=text]').focus(function(){
		$(this).select();
	});

	animate_obfuscated_text();
});

function animate_obfuscated_text() {
	obfuscated_animation_request_id = window.requestAnimationFrame(animate_obfuscated_text);

	$('.minecraft-formatted--obfuscated').each(function(){
		var random_string = '';

		for (var x = 0; x < this.innerHTML.length; x++)
			random_string += String.fromCharCode(Math.floor(Math.random() * (95 - 64 + 1)) + 64);

		this.innerHTML = random_string;
	});
}
