<?php
session_start();
?>

<!doctype html>
<html>
<head>
	<link rel="stylesheet" href="styles/main.css" type="text/css">
	<link rel="stylesheet" href="styles/checkoutPage.css" type="text/css">
	<link rel="stylesheet" href="styles/jquery-ui-1.8.16.custom.css" type="text/css">
	<link rel="stylesheet" href="styles/print.css" type="text/css" media="print">
	<script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.8.1/jquery.validate.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.16.custom.min.js"></script>
	<script type="text/javascript" src="js/jquery.simpleCaptcha-0.2.js"></script>
	<script type="text/javascript" src="js/jStorage.js"></script>
	<!--script type="text/javascript" src="js/shoppingCart.js"></script-->
	<!--script type="text/javascript" src="js/localStore.js"></script-->
	<!--script type="text/javascript" src="js/util.js"></script-->
	<script type="text/javascript" src="js/researchCart.js"></script>
	<script type="text/javascript" src="js/crossDomainStorage.js"></script>
	<script type="text/javascript" src="js/checkoutLoadEvent.js"></script>
	<title>Research Shopping Cart : Checkout</title>
</head>
<body>
	<script>
		$('#checkoutForm').submit(function(event){
			event.preventDefault();
			$.post("/archives/researchcart/verify.php");
		});
		
		$('#textPad').click(function() {
			alert('monish');
			});
	</script>

	<div id="bodyWrapper">
		<div id="header">
			<div id="logo">
				
			</div>
		</div>
		<div id="menu">
			<div id="menuItems">
				<a href="http://www.marist.edu" target="_blank">Marist Home</a>
				<a href="http://library.marist.edu/" target="_blank">Marist Library</a>
				<a href="http://library.marist.edu/archives/index.html" target="_blank">Home</a>
				<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="">LT Papers</a>
			</div>
		</div>
		<div id="contentWrapper">
			<div id="bodyContent">
				<!-- Content goes between here -->
				<div id="cart" class="globalFont">
					<div id="cartHeader">
						<div id="cartCaption">Finalize the Items you want to Reserve</div>
					</div>
					



					<!--<form method="post" name="checkoutForm" action="verify.php">-->
					<form method="post" id="checkoutForm"  name="checkoutForm" action="/archives/researchcart/verify.php">
					<!--form method="post" id="checkoutForm"  name="checkoutForm" action="/"-->
						<div id="cartTable">
							<table id="cartItems"><tr id="cartHeading"><th class="collection">Collection</th><th class="collectionDetail">Detail</th><th class="boxNumber">Box #</th><th class="itemNumber">Item #</th><th class="removeButton">Remove</th></tr></table>
						</div>
						<div id="optionLabelCont">
							<a href="#" id="textPad" class="btn optionPrint">
								<span>Get the PDF & email us</span>
							</a>
							
							<!--span class="or">Or</span>
							
							<a href="#" id="btnOptionForm" class="btn optionForm">
								<span>Reserve online</span>
							</a-->
						</div>
						<div class="backDrop"></div>
						<div class="backDropPlain">
							<div id="reservationOptionCont">
									<div id="apptDetailsCaptcha">
										<div id="apptDetails" >
											<div class="detailContainer">
												<label class="cDetailsLabel">Full Name</label><input id="name" class="cDetailsInput required name" name="cFullName"  title="Full Name" /><br />
											</div>
											<div class="detailContainer">
												<label class="cDetailsLabel">Phone Number</label><input id="phone" name="cPhone" class="cDetailsInput phone" title="Phone Number" /><br />
											</div>
											<div class="detailContainer">
												<label class="cDetailsLabel">Email Address</label><input id="email" name="cEmail" class="cDetailsInput email" title="Email" /><br />
											</div>
													<!--<input id="time" name="iTime" class="cDetailsInput required time" title="Time"><br/>-->
											<div class="detailContainer">
												<label class="cDetailsLabel">Visit Type</label><br/>
											</div>
											<div class="detailContainer">
												<input id="visit" type="radio" name="iGroup1" value="visit" checked /> Visit 
												<input id="requestCopy" type="radio" name="iGroup1" value="requestCopy" /> Request Copy
											</div>
											<a id="fee" href="/archives/mainpage/forms/Reproduction%20Charges%20and%20Commercial%20Use%20Fees.pdf" style="display: none;" target="_blank">Reproduction and Commercial Use Fee</a>
											<div class="detailContainer">
												<label class="cDetailsLabel" id="datePickerLabel" >Appointment Date</label><div><input type="text" id="datepicker" name="iDate" class="cDetailsInput" /></div><br />
											</div>
											<div id="timePickerLabel" class="detailContainer">
												<label class="cDetailsLabel">Appointment Time</label>
												<select id="timePicker" class="cDetailsInput timePicker" name="iTime" id="time">
												  <option value="NULL">Select Time</option>
												  <option value="8:30 AM">8:30 AM</option>
												  <option value="9:00 AM">9:00 AM</option>
												  <option value="10:00 AM">10:00 AM</option>
												  <option value="11:00 AM">11:00 AM</option>
												  <option value="12:00 PM">12:00 PM</option>
												  <option value="1:00 PM">1:00 PM</option>
												  <option value="2:00 PM">2:00 PM</option>
												  <option value="3:00 PM">3:00 PM</option>
												  <option value="4:00 PM">4:00 PM</option>
												</select><br/>
											</div>
											
											<!--<input id="date" name="iDate" class="cDetailsInput required date" title="Date">-->							
										</div>
										
										<div id="reCAPTCHA">
											<div id="captcha"></div>
											<input id="noJavaButton" type="submit"  value="Checkout" />
											<textarea id="jStorageArray" name="jStorage" style="display:none;" rows="200" cols="200"></textarea>
											<input id="conNumber" name="confirmationNumber" style="display:none;" />
											
											<?php
												error_reporting(0);
												session_start();
												if (isset($_SESSION['incorrectCaptcha']))
												{
													if ($_SESSION['incorrectCaptcha'] == 'true')
													{
														$_SESSION['incorrectCaptcha'] = 'false';
														?>
																<strong style="color: red">Incorrect image selected.</strong>
																<script type="text/javascript">
																	jQuery(window).bind("load", function(){
																		wrongCaptcha();
																	});
																</script>
														<?php
													}	
												}
											?>
											<a href="#"  class="btn checkoutButton"><span>Reserve</span></a>
										</div>
										<span  id="closeCaptcaForm">close x</span>
									</div>
							</div>
						</div>
						
						
					</form>
				</div>
					<div id="alternateOption" class="globalFont">
						<span>Don't feel comfortable storing your email with us!</span><br/>
						<a href="#" id="textPad">Use this option</a>
						<span>Use this option to get a copy of the items you selected and feel free to email us or call us.</span><br/>
						<span>You can also use this option to print the list of your selected items.</span>
						
					</div>
						<div id="backDrop"></div>
						
						<form method="post" id="checkoutPrintForm"  name="checkoutPrintForm" action="printpdf.php"> 
							<div id="printWindow" class="globalFont">
								
								<h1>Marist Archives and Special Collection : Item List</h1>
								<style type="text/css">
									table#cartItemsPad
									{
								
										margin-left: 20px;
										margin-right: 20px;
										margin-top: 50px;
										margin-bottom: 20px;
										border-style: solid;
										border-width: .85px;
									
									}
									
									table#cartItemsPad th, td.boxNumber, td.itemNumber
									{
										padding: 3px 8px;
    									text-align: center;
									}
									
									td.itemDescription
									{
										width: 250px;
									}
									
									div#contactInfo
									{
										margin-top: 40px;
										margin-left: 20px;
									}
									
									div#contactInfo span
									{
										font-size: 11pt;
									}
									
									span.subHeading
									{
										font-weight: bold;
										font-size: 14pt;
									}
									
									
								</style>
								<!--
								<a href="#" id="copyButton" class="padButtons">Copy</a>
								-->
								<!--a href="JAVASCRIPT:document.checkoutPrintForm.submit();" id="printButton" class="padButtons" >Print</a-->
								<!--a href="#" id="printButton" class="padButtons" >Print</a-->
								<label class="noScreen">Appointment Date: _______________</label><br class="noScreen"/>
								<label class="noScreen">Appointment Time: _______________</label><br class="noScreen"/>
								<div id="cartTablePad">
										<table id="cartItemsPad"><tr id="cartHeadingPad"><th>Collection</th><th>Box #</th><th>Item Number</th><th>Description</th></tr></table>	
								</div>
								<div id="contactInfo" style="display:none">
									<span class="subHeading">Contact Details:</span><br />
									<span>Hours: Monday through Friday, 8:30 a.m. - 5:00 p.m. (closed 1:30 p.m. to 2:30 p.m.)</span><br /><br />
									<span class="subHeading">PLEASE MAKE AN APPOINTMENT IN ADVANCE.</span><br /><br />
									<span class="subHeading">General Contact Information:</span><br />
									<span>Marist College</span><br />
									<span>Archives and Special Collections</span><br />
									<span>James A. Cannavino Library, LB 134</span><br />
									<span>3399 North Road</span><br />
									<span>Poughkeepsie, NY 12601</span><br />
									<span>Tel: 845-575-2750</span><br />
									<span>Fax: 845-575-3150</span><br />
								</div>
							</div>
							
							<textarea id="printPdfTextarea" class="printPdfTextarea" name="printPdf" rows="3" cols="3" style="display:none"></textarea>
							
						</form>







				<!-- Content goes between here -->		
			</div>

			<!--div id="footerOptions">
				<a href="http://www.marist.edu" target="_blank">Marist Home</a>
				<a href="http://library.marist.edu/" target="_blank">Marist Library</a>
				<a href="http://library.marist.edu/archives/index.html" target="_blank">Home</a>
				<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="">LT Papers</a>
			</div-->
		</div>
	</div>
</body>
</html>