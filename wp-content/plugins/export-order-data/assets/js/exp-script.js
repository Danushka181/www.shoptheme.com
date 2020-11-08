
function saveFormDataUsingAjax( formData ){

	var data = {
		'action': 'save_setings_form_data',
		'form_data': formData
	};

	// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
	jQuery.post(ajaxurl, data, function(response) {
		var response = JSON.parse(response);
		console.log(response);
		// check response status true
		if ( response.status == true ) {
			$('#exp_msg').text(response.msg);
			$('#exp_msg').addClass('show');
			$('#exp_msg').css('background', response.color );
		}else{
			$('#exp_msg').text(response.msg);
			$('#exp_msg').addClass('show');
			$('#exp_msg').css('background', response.color );
		}

		setTimeout( function(){
			$('#exp_msg').removeClass('show');
			$('#exp_msg').css('background', '#fff' );
		}, 2000);


	});
}

// Check li click on load event
document.addEventListener('DOMContentLoaded', function() {
	// Settings elements get by class name
    var clcikedElement = document.getElementsByClassName('seting_exp');
    // Loop all sertting li elements and Listener when click
    for (var i = 0 ; i < clcikedElement.length; i++) {
	   clcikedElement[i].addEventListener('click' , onElementsClickHandler , false ) ; 
	}

	// Form submit btn click function
	var formSubmit 	=	document.getElementById('save_exp_setings');
	formSubmit.addEventListener("click", function(e) {
		e.preventDefault();
		var expField 	=	$('#exp_settings').val();
		saveFormDataUsingAjax( expField );
	});

});


function onElementsClickHandler(){
	var dataId 		=	$(this).attr('data-id');
	var textArea 	=	document.getElementById('exp_settings');

	// remove element if has class
	if ( $(this).hasClass('active') ) {
		// remove active already clicked items
		$(this).removeClass('active');
		// Get text area value to remove clicked element
		var textAreaValue 	=	textArea.value;
		// Remove value form field
		replacedVal	=	textAreaValue.replace( dataId+' | ', '');
		// Clear Field values
		textArea.value='';
		// append removed items
		textArea.value= replacedVal;
	}else{
		// append element data if fresh click
		$(this).addClass('active');
		var oldValues 	=	textArea.value;
		textArea.value 	= 	oldValues+dataId+' | ';
	}

	// console.log(dataId);
}