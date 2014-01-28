
$(document).ready(function()
{
		
		jQuery.validator.addMethod("phoneUS", function(phone_number, element) 
		{
		    phone_number = phone_number.replace(/\s+/g, ""); 
			return this.optional(element) || phone_number.length > 9 &&
				phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
		}, "");
		
		$('div#printButton').hide();
		$('div#apptDetailsCaptcha').hide();
		
		//alert($.jStorage.index());
		var uniqueCon = confirmationNumber();
		//$('div#cart').css('visibility','visible');
		//$('div#cart').fadeIn('slow');
		/*
		$.each($.jStorage.index(), function(index, value){
			Element(1, value, get_value(value));
		});
		*/
		
		$.each($.jStorage.index(), function(index, value){
			
			if(($.jStorage.index().length -1) != index) {
				$("textarea#jStorageArray").text($("textarea#jStorageArray").text() + uniqueCon + '.'  + value + ' ');
			} else {
				$("textarea#jStorageArray").text($("textarea#jStorageArray").text() + uniqueCon + '.'  + value);
			}
			
		});
		
		
		$("input#conNumber").val(uniqueCon);
		$('input#noJavaButton').hide();
		//$('.checkoutButton').css('visibility','visible');
		$('a.checkoutButton').show();
		
		// PULLS DATA FROM THE FORM AND PUTS IT INSIDE A TEXTAREA WHICH IS SENT TO PRINTPDF.PHP
		$('a#textPad').click(function(){ 
			/*
			//$("table#cartItemsPad").remove();
			//$('div#backDrop').show();
			//$('div#printWindow').show("slow");
			$('div#contactInfo').show();
			$.each($.jStorage.index(), function(index, value){
				ElementNotepad(1, value, get_value(value));
			});
		 	var printSection;
		 	printSection = $('#printWindow').html();
		 	$('#printPdfTextarea').val(printSection);
		 	$.post("printpdf.php", $('#checkoutPrintForm').serialize());
		 	document.checkoutPrintForm.submit();
		 	*/
		 	
		 	$('div#contactInfo').show();
		 	$.each($.jStorage.index(), function(index, value){
				ElementNotepad(1, value, get_value(value));
			});
		 	var printSection, numberOfLoops, subSection, strLength;
		 	printSection = $('#printWindow').html();
		 	
		 	strLength = printSection.length;
		 	numberOfLoops = strLength/400; 
		 	
		 	for(i=0; i<=numberOfLoops; i++)
		 	{
		 		subSection = printSection.substr(0, 400);
		 		//alert('<textarea id="printPdfTextarea' + i + '" name="printPdf' + i + '" rows="3" cols="3" style="display:none"></textarea>');
		 		$('<textarea id="printPdfTextarea' + i + '" name="printPdf' + i + '" rows="3" cols="3" style="display:none"></textarea>').insertAfter('.printPdfTextarea');
		 		$('#printPdfTextarea' + i).val(subSection);
		 		printSection = printSection.substr(400, strLength);
		 		strLength = printSection.length;
		 	}
		 	
		 	$.post("printpdf.php", $('#checkoutPrintForm').serialize());
		 	document.checkoutPrintForm.submit();
		 	return false;
		});
		
		
		/* CHANGE LABEL TEXT ON RADIO BUTTON EVENT */
		$('input#requestCopy').click(function (){
			$('#datePickerLabel').text('Need Copy Before');
			$('#timePickerLabel').hide();
			$('#timePicker').val('8:30 AM');
			$('a#fee').show();
		});
		
		$('input#visit').click(function (){
			$('#datePickerLabel').text('Appointment Date');
			$('#timePickerLabel').show();
			$('#timePicker').val('NULL');
			$('a#fee').hide();
		});
		
		
		
		/* PRINT CONTENT OF WINDOW */		
		$("div#backDrop").click(function (){
			$('div#backDrop').hide();
			$('div#printWindow').hide();
		});

		
		 $('#textPad').click(function(){
$.jStorage.flush() ;
		});
		
			/*		
		 	$('#btnOptionForm').toggle(
		 		function(){
		 			$('#cart').css('height', '750px');
		 			$('#apptDetailsCaptcha').show();
		 			//$('body').scrollTop(300);
		 			$('body').animate({scrollTop : 300},1000);
		 		},
		 		function(){
		 			$('#cart').css('height', '500px');
		 			$('#apptDetailsCaptcha').hide();
	 		});
	 		*/
	 		
		 	$('#btnOptionForm').toggle(
		 		function(){
		 			//$('#cart').css('height', '750px');
		 			$('div.backDrop').show();
		 			$('div.backDropPlain').show();
		 			$('#apptDetailsCaptcha').show();
		 		},
		 		function(){
		 			$('div.backDrop').hide();
		 			$('div.backDropPlain').hide();
		 			$('#apptDetailsCaptcha').hide();
	 		});
		 		//$('#cart').css('height', '750px');
		 	
		 	$('span#closeCaptcaForm').click(function(){
		 			/*
		 			$('div.backDrop').hide();
		 			$('div.backDropPlain').hide();
		 			$('#apptDetailsCaptcha').hide();
		 			*/
		 			$('#btnOptionForm').trigger('click');
		 	});
		 	
		/* INTEGRATE CAPTCHA INTO THE PAGE */
		$('#captcha').simpleCaptcha();


		/* CHECKOUT VALIDATION EVENT, ALL CORRECT ENTRIES RESULT IN A POSTBACK*/
		$('a.checkoutButton').click(function(){
			
			
			if ($("table#cartItems tr").length < 2)
			{
				alert('There are no items to Checkout, please go back and select a few items');
				return false;
			}
			if ($('input#name').val() == '')
			{
				alert('You must provide your Name in order to continue');
				return false;
			}
			if ($('input#datepicker').val() == '')
			{
				alert('You must select an Appointment Date in order to continue');
				return false;
			}
			if ($('select.timePicker').val() == 'NULL')
			{
				alert('You must select an Appointment Time in order to continue');
				return false;
			}
			//alert($('label.error').exists);
			
			if ($('input.error').length)
			{
				alert('Data entered in one of the fields is not correct, Please correct it and Checkout items');
				return false;
			}
			
			/*
			if ($('input.error').css("display") != 'none')
			{
				alert('2 Data entered in one of the fields is not correct, Please correct it and Checkout items');
				return false;
			}
			*/
			
			document.checkoutForm.submit();
			return false;
			
		});
		

		
		$( "#datepicker" ).datepicker({
			/*
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,*/
			minDate: 'today'
		});
		
		
		$('#checkoutForm').validate({
			rules: {
     			// simple rule, converted to {required:true}
     			
     			// compound rule
				cEmail: {
					required: false,
					email: true
     			},
     			cPhone: {
     				required: false,
     				phoneUS: true
     			},				
     			cFullName: "required",
				iDate: {
					required: true,
					date: true
				}
   			},
   			messages: {
   				cEmail: {
   					required: "",
   					email: ""
   				},
   				cPhone: {
   					required: "",
   					phoneUS: ""
   				},
   				cFullName: "",
				iDate: {
					required: "",
					date: ""
				}
   			}
  		});
  

   
   

   		/*
		   messages: {
     		name: "Please specify your name",
 			email: {
   				required: "We need your email address to contact you",
   				email: "Your email address must be in the format of name@domain.com"
			}
   			}
   			//errorElement: "em",
   			//focusInvalid: false
		});
		*/
		

		
		
 		/* Testing ends here */
});


function wrongCaptcha()
{
	$('#btnOptionForm').trigger('click');
}
