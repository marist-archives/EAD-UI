<!doctype html>
<html>
<head>
	<link rel="stylesheet" href="styles/main.css" type="text/css"><br/>
	<link rel="stylesheet" href="styles/success.css" type="text/css">
	<script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.3.2.min.js"></script>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/jStorage.js"></script>
	<script type="text/javascript" src="js/localStore.js"></script>
	<title>Items Reserved Successfully</title>
	<script>
		$.jStorage.flush();
	</script>
</head>
<body>
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
				
				<div>
					<strong><a href="http://dev.library.marist.edu/prototyperesearchcart/lowellthomaspapers/LTP.xml">Go back to Collections Home</a></strong>
					<br/><br/>
					<strong>Your selections were saved successfully .</strong><br /><br />
					<strong>Your selection number is </strong>
					<?php
						$conNumber = $_POST["confirmationNumber"];
						print $conNumber;
					?>
					<br />
					<strong>Please email the unique selection number to Marist Archives in order to confirm your request.</strong><br /><br />
					<strong>Click </strong>
					<?php
						
						$conNumber = $_POST["confirmationNumber"];
						$emailToSection = '<a href="mailto:Nancy.Decker@marist.edu?cc=John.Ansley@marist.edu,Monish.Singh1@marist.edu';
						$emailSubjectSection = '&subject=Selection Number:%20' . $conNumber . '%20:%20Marist%20Archives%20Item%20Reservation%20System';
						$emailBodySection = '&body=Dear%20Marist%20Archives,%0A%0AHere%20is%20the%20selection%20number%20for%20my%20request.%0A%0ASelection%20Number:%20' . $conNumber . '%0A%0AThanks">';
						$emailLabel = 'here</a>';
						$emailFull = $emailToSection . $emailSubjectSection . $emailBodySection . $emailLabel;
						print $emailFull;						
					?>
					<strong> to send the email</strong><br /><br />
					<strong>If you are having trouble sending the email using the link, please use the following email addresses</strong>
					<strong>Nancy.Decker@marist.edu, John.Ansley@marist.edu, Monish.Singh1@marist.edu</strong>
					
				</div>	
					<!-- Content goes between here -->		
			</div>
			<div id="footerOptions">
				<a href="http://www.marist.edu" target="_blank">Marist Home</a>
				<a href="http://library.marist.edu/" target="_blank">Marist Library</a>
				<a href="http://library.marist.edu/archives/index.html" target="_blank">Home</a>
				<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="">LT Papers</a>
			</div>
		</div>
	</div>
</body>
</html>