(function($) { //fix jquery not defind issue 
	// Save forms data using ajax
	function saveFormDataUsingAjax( formData ){
		var data = {
			'action': 'save_setings_form_data',
			'form_data': formData
		};

		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		jQuery.post(ajaxurl, data, function(response) {
			var response = JSON.parse(response);
			// check response status true and show errors
			throw_errors_and_success(response);
		});
	}

	// Give error messages and succuess messages after data save in settings form
	function throw_errors_and_success( response ){
		// check ajax resposnse id true or false
		if ( response.status == true ) {
			$('#exp_msg').text(response.msg);
			$('#exp_msg').addClass('show');
			$('#exp_msg').css('background', response.color );
		}else{
			$('#exp_msg').text(response.msg);
			$('#exp_msg').addClass('show');
			$('#exp_msg').css('background', response.color );
		}

		// remove error message after 2s
		setTimeout( function(){
			$('#exp_msg').removeClass('show');
			$('#exp_msg').css('background', '#fff' );
		}, 2000);
	}


	// winddow load event 
	document.addEventListener('DOMContentLoaded', function() {

		// Settings elements get by class name
	    var clcikedElement = document.getElementsByClassName('seting_exp');
	    // Loop all sertting li elements and Listener when click
	    for (var i = 0 ; i < clcikedElement.length; i++) {
		   clcikedElement[i].addEventListener('click' , onElementsClickHandler , false ) ; 
		}

		// Form submit btn click function
		var formSubmit 	=	document.getElementById('save_exp_setings');
		if ( formSubmit !== null ) {
			formSubmit.addEventListener("click", function(e) {
				e.preventDefault();
				var expField 	=	$('#exp_settings').val();
				if ( expField != '' ) {
					saveFormDataUsingAjax( expField );
				}else{
					var response = { status : true, msg :'Filed cannot be empty', color:'red' }
					throw_errors_and_success( response );
				}
			});
		}

		// Export Screening data 
		var customExport 	=document.getElementById('customExport');
		if ( customExport !== null ) {
			customExport.addEventListener("click", function(e) {
				e.preventDefault();
				// get all page ids list screening in order list page
				var allPages 	=	get_page_ids();

				var data = {
					'action': 'export_all_screening_post_data',
					'post_ids': allPages
				};
				// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
				jQuery.post(ajaxurl, data, function(response) {
					if ( response != '' ) {
						// Create hidden anchor for download data
						var downloadLink = document.createElement("a");
						var fileData = ['\ufeff'+response];
						// Set application type
						var blobObject = new Blob(fileData,{
							type: "application/csv;charset=utf-8;"
						});
						// make download link
						var url = URL.createObjectURL(blobObject);
						downloadLink.href = url;
						downloadLink.download = 'genarated-csv-for-'+allPages.length+'-orders.csv';
						// Download csv File
						document.body.appendChild(downloadLink);
						downloadLink.click();
						document.body.removeChild(downloadLink);

						$('#customExport').text(allPages.length+' Orders Exported!');

						setTimeout( function(){
							$('#customExport').text('Export CSV');
						}, 4000)

					}
				});
				
			});
		}

		// export single order data
		var single_export_csv 	=	document.getElementById('single_export_csv');
		if ( single_export_csv !== null ) {
			single_export_csv.addEventListener("click", function(e) {
				e.preventDefault();
				var orderId 	=	$(this).attr('order-id');
				exportSingleOrderData( orderId );

			});
		}

	});

	// Customize settings data
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
	}

	// export singgle order data CSV
	function exportSingleOrderData( order ){
		var data = {
			'action': 'export_single_post_data',
			'order': order
		};
		// ajax call to to export data
		jQuery.post(ajaxurl, data, function(response) {
			if ( response != '' ) {
				// Create hidden anchor for download data
				var downloadLink = document.createElement("a");
				var fileData = ['\ufeff'+response];
				// Set application type
				var blobObject = new Blob(fileData,{
					type: "application/csv;charset=utf-8;"
				});
				// make download link
				var url = URL.createObjectURL(blobObject);
				downloadLink.href = url;
				downloadLink.download = 'genarated-csv-order-'+order+'.csv';
				// Download csv File
				document.body.appendChild(downloadLink);
				downloadLink.click();
				document.body.removeChild(downloadLink);
			}
		});
		return false;
	}

	// Return all page ids showing oder page using checkbox name posts
	function get_page_ids(){
		var all_ids 	=	[];
		$("input[name='post[]']").each(function (index, obj) {
	        // loop all checked items and push post ids
	        all_ids.push(obj.value);
	    });

	    return all_ids;
	}

}(jQuery));
