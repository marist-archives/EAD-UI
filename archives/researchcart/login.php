<?php


session_start();
error_reporting(0);

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	// DATABASE CONNECTIVITY MODULE
	require('dbAccess.php');
	
	$con = sqLiteConnectDB();
	$query = "SELECT usrId, pwrd, membrId, isAdm FROM membrInfo WHERE usrId = '" . trim($_POST['txt_uname']) . "'";
	$result = query_sqLite($query, $con);
	//$result = sqlite_unbuffered_query($con, $query, SQLITE_ASSOC);
	
	// CHECK FOR FAILURE
	if (!$result ) 
	{
		print '<p>Could not execute query! <br/>';
		die( '<p></body></html>');
	}
	
	$col = sqlite_fetch_all($result);
	
	
	if ($col[0]['usrId'] == $_POST['txt_uname']) 
	{
		if ($col[0]['pwrd'] == $_POST['txt_password']) 
		{
			print 'Success';
			$_SESSION['UID']=$col[0]['membrId'];
			$_SESSION['USERNAME']=$col[0]['usrId'];
			$_SESSION['isAdm'] = $col[0]['isAdm'];
?>
			<script type="text/javascript">
				self.location = "dashboard.php";
			</script>
<?php
			} 
			else 
			{
				$error = 'Invaid Username or Password';
			}
		} 
		else 
		{
			$error = 'Invaid Username or Password';
		}
		
		close_sqLite($con);
	}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="styles/login.css" type="text/css">
	<title>Marist Archives : Finding Aid Scheduler Login</title>
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
				<div id="loginForm">
					<form name="frm_login" method="post" action="<?php $_SERVER['PHP_SELF'];?>">
						<div>
							<div><label>User Name</label><input type="text" id="txt_uname" name="txt_uname"/></div>
							<div><label>Password</label><input type="password" id="txt_password" name="txt_password"/></div>
							<div><input type="submit" value="Login"/></div>		
						</div>
					</form>
				</div>
				<div id="footerOptions">
					<a href="http://www.marist.edu" target="_blank">Marist Home</a>
					<a href="http://library.marist.edu/" target="_blank">Marist Library</a>
					<a href="http://library.marist.edu/archives/index.html" target="_blank">Home</a>
					<a href="http://library.marist.edu/archives/LTP/LTP.xml" target="">LT Papers</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>