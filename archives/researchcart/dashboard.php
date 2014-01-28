<?php 
	session_start();
	//error_reporting(E_ALL & ~E_NOTICE);
	if (!isset($_SESSION['UID'])) {
		//print 'Isset ran';
		header('Location: login.php');
	}
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<link rel="stylesheet" href="styles/dashboard.css" type="text/css">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/dashboard.js"></script>
	<script type="text/javascript" src="js/util.js"></script>
	<title>Marist Archives : Finding Aid Scheduler Dashboard</title>
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
				
				<form method="post" action="<?php  $_SERVER['PHP_SELF'];?>">
				
						<?php
							$newConNumber = true;


								$sqlScriptArray = array();
								$requestDetails = array();

							if ($_SERVER['REQUEST_METHOD'] == 'POST') 
							{
								require_once('dbAccess.php');
								//$con = sqLiteConnectDB();
								
								
								if (isset($_POST['logout']) && $_POST['logout'] == 'Logout')
								{
									logoutFindingAidScheduler();
								}
								
								
								$noCon = false;
								$reqDetails = false;
								
								
								//if (isset($_POST['txt_coNumber']) && $_POST['txt_coNumber'] != '' && isset($_POST['btnRequestId']) && $_POST['btnRequestId'] == '' && isset($_POST['btnUpdate']) && $_POST['btnUpdate'] != 'Update' && isset($_POST['newConfNumber']) && $_POST['newConfNumber'] == '' )
								if (isset($_POST['txt_coNumber']) && (!isset($_POST['btnRequestId'])) && (!isset($_POST['btnUpdate'])) && (!isset($_POST['newConfNumber']))) 
								{
									//$query = "SELECT confirmation_No FROM Requests WHERE confirmation_No = '" . trim($_POST['txt_coNumber']) . "'";
									$confirmationNumber = trim($_POST['txt_coNumber']);
									$query = "SELECT confirmation_No FROM Requests WHERE confirmation_No = '" . $confirmationNumber. "'";
									$sqlScriptArray[0] = $query;
									//$result = query_sqLite($query, $con);
									$result = sqlExecuteStatement($sqlScriptArray,"S", "");
									$array = sqlite_fetch_all($result);
									if (count($array) == 0) 
									{
										printConfNumberNotFound();
									}
									else
									{
										printRequestHeader();
										printDivEnd();
									}
								}
								/*
								else 
								{
									$noCon = true;
									$resultBool = false;
									$newConNumber = false;
									$reqDetails = false;
								}
								*/
								
								if (isset($_POST['printReservation']) && $_POST['printReservation'] == 'Print Reservation Request')
								{
									$confirmationNumber = trim($_POST['txt_coNumber']);
									printPdf($confirmationNumber);
								}
								
								if (isset($_POST['btnSelectAllOption']) && $_POST['btnSelectAllOption'] == 'Update All')
								{
									//print 'ran';
									$optionSelected = $_POST['selectAllOption'];
									$currentDate = date("Y-m-d");
									$userName = trim($_SESSION['USERNAME']);
									
									
									$result = getRequestId();
									$array = sqlite_fetch_all($result);
									
									if ($optionSelected != 'x')
									{
										$counter = 0;
										foreach ($array as $oKey) 
										{
											//foreach ($oKey as $key => $value)
											$status = $oKey['current_Status'];
											$requestId = $oKey['request_id'];
											if ($status != $optionSelected)
											{
												$query = 'UPDATE Requests_Details SET current_Status =' . $optionSelected . ' WHERE request_Id = "' . $requestId . '"';
												$sqlScriptArray[$counter] = $query;	
												$counter = $counter + 1;
												
												$query = "INSERT INTO Request_History (request_id, user_id, status, sdate) VALUES (" . $requestId . "," . '"' . $userName . '"' . "," . $optionSelected . "," . '"' . $currentDate . '"' . ")";
												$sqlScriptArray[$counter] = $query;	
												$counter = $counter + 1;	
											}
											//print 'Key: ' . $key;
											//print 'Value: '. $value;
										}
									}
									else 
									{
										?>
										<script type="text/javascript">
											alert ("Please select an Update all type");
										</script>
										<?php
									}
									


									$result = sqlExecuteStatement($sqlScriptArray, "U", "wTr");
									//print_r($sqlScriptArray);
									//print 'Option Selected: ' . $optionSelected;
								}
								
								
								if (isset($_POST['btnUpdate']) && $_POST['btnUpdate'] == 'Update')
								{
									$currentStatus = trim($_POST['current_Status']);
									//$currentDate = date("Y-m-d H:i:s");
									$currentDate = date("Y-m-d");
									$userName = trim($_SESSION['USERNAME']);
									$requestId = trim($_POST['request_Id']);
									
									$query = 'UPDATE Requests_Details SET current_Status =' . $currentStatus . ' WHERE request_Id = "' . $requestId . '"';
									$sqlScriptArray[0] = $query;
									//$result = sqlExecuteStatement($sqlScriptArray, "U", "wTr");
									$query = "INSERT INTO Request_History (request_id, user_id, status, sdate) VALUES (" . $requestId . "," . '"' . $userName . '"' . "," . $currentStatus . "," . '"' . $currentDate . '"' . ")";
									$sqlScriptArray[1] = $query;
									//print_r($query);

									$result = sqlExecuteStatement($sqlScriptArray, "I", "wTr");
									
									if($result === "Success")
									{
										printRequestHeader();
										printReqDetails($requestId);
	
										?>
										<script type="text/javascript">
											alert ("Data Updated");
										</script>
										<?php
									}
									
								}
								
								if (isset($_POST['btnRequestId']) && $_POST['btnRequestId'] != '')
								{
									printRequestHeader();
									printReqDetails($_POST['btnRequestId']);									
								}
								
								if (isset($_POST['newConfNumber']) && $_POST['newConfNumber'] != '')
								{
									printNewConfNumber();
								}
							}
							else
							{
								printNewConfNumber();
							}
							
							
				/*************************** FUNCTIONS SECTION START ****************************/
							
							function printPdf($confirmationNumber)
							{
								$query = "SELECT confirmation_No, client_Name, client_PhNo, client_Email, time, date, visit_type FROM Requests WHERE confirmation_No = '" . $confirmationNumber . "'";	
								$sqlScriptArray[0] = $query;
								$result = sqlExecuteStatement($sqlScriptArray, "S", "");
								$array1 = sqlite_fetch_all($result);
								//print_r($array1);

								
								
								$query = "SELECT request_Id, confirmation_No, collection_No, box_No, item_No, current_Status FROM Requests_Details WHERE confirmation_No = '" . $confirmationNumber . "'";
								$sqlScriptArray[0] = $query;
								$result = sqlExecuteStatement($sqlScriptArray, "S", "");
								$array2 = sqlite_fetch_all($result);
								
								
								
								print '<form method="post" id="checkoutPrintForm" name="checkoutPrintForm" action="printpdf.php">';
								print '<div id="printWindow" class="globalFont">';
								print '<h1>Marist Archives and Special Collection : Reservation Request</h1>';
								
								?>
									<style type="text/css">
								/*
										table#cartItemsPad
										{
											padding-right: 10px;
											margin-left: 20px;
											margin-top: 50px;
											margin-bottom: 30px;
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
											width: 410px;
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
										*/
									</style>
								<?php
										print '<table id="printRequests"><tr><th>Confirmation Number</th><th>Client Name</th><th>Phone Number</th><th>Email Address</th><th>Appointment Time</th><th>Appointment Date</th><th>Visit Type</th></tr>';
										print '<tr>';
										foreach ($array1 as $oKey) 
										{
											foreach ($oKey as $key => $value)
											{
												//print $value;
												//print $key;
												print '<td>' . $value . '</td>';
												//print '<td>' . $oKey[$tblRequestsFieldName[$iValue]] . '</td>';
											}
										}
										print '</tr>';
										unset($key);
										unset($value);
										print '</table>';
										
										
										print '<div id="printRequestsAndRequestsDetailPane">';
										print '<div id="printRequestsDetailsContainer">';
										print '<table id="printRequestsDetails"><tr><th>Request ID</th><th>Collection Number</th><th>Box Number</th><th>Item Number</th><th>Current Status</th></tr>';
										foreach ($array2 as $oKey) 
										{
											print '<tr>';
											foreach ($oKey as $key => $value)
											{
												if ($key != 'confirmation_No')
												{	
													print '<td>' . $value . '</td>';
												}
											}
											print '</tr>';
										}	
										print '</table></div></div>';
								?>
									</div>
									<textarea id="printPdfTextarea" class="printPdfTextarea" name="printPdf" rows="3" cols="3" style="display:none"></textarea>
								</form>	
								<script type="text/javascript">
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
								</script>
								
								<?php
							}
							
								
							function printConfNumberNotFound() 
							{
								?>
								<input type="submit" id="logout" name="logout" value="Logout" />
								<div id="confContainer">
									<div><label style="color: Red">Enter Confirmation Number *</label><br /><input type="text" id="txt_coNumber" name="txt_coNumber" /></div>
									<div><input type="submit" id="confSubmit" value="Submit" /></div>
								</div>
								<?php	
							}
							
							function getRequestId()
							{
								$confirmationNumber = trim($_POST['txt_coNumber']);
								$query = "SELECT request_id, current_Status FROM Requests_Details WHERE confirmation_No = '" . $confirmationNumber . "'";	
								$sqlScriptArray[0] = $query;
								$result = sqlExecuteStatement($sqlScriptArray, "S", "");
								if ($result)
								{
									return $result;
								}
							}
							
							function printRequestHeader() 
							{
								print '<div><input type="submit" id="logout" name="logout" value="Logout" /></div>';
								print '<div><input type="submit" id="newConfNumber" name="newConfNumber" value="Enter Another Confirmation Number" /><input type="submit" id="printReservation" name="printReservation" value="Print Reservation Request" /></br></div>';									
								print '<input type="text" id="txt_coNumber" name="txt_coNumber" style="display: none" value="' . trim($_POST['txt_coNumber']) . '"/>';
								
								$confirmationNumber = trim($_POST['txt_coNumber']);
								$query = "SELECT confirmation_No, client_Name, client_PhNo, client_Email, time, date, visit_type FROM Requests WHERE confirmation_No = '" . $confirmationNumber . "'";	
								$sqlScriptArray[0] = $query;
								$result = sqlExecuteStatement($sqlScriptArray, "S", "");
								$array1 = sqlite_fetch_all($result);
								//print_r($array1);

								
								
								$query = "SELECT request_Id, confirmation_No, collection_No, box_No, item_No, current_Status FROM Requests_Details WHERE confirmation_No = '" . $confirmationNumber . "'";
								$sqlScriptArray[0] = $query;
								$result = sqlExecuteStatement($sqlScriptArray, "S", "");
								$array2 = sqlite_fetch_all($result);
								//print_r($array2);
								
								?>
								<!--form method="post" action="<?php $_SERVER['PHP_SELF']; ?>"-->
									<div class="updateAll"><label>Update All</label><br />
										<select name="selectAllOption">
											<option title="x" value="x" selected="selected">Select</option>
											<option title="0" value="0" >Unconfirmed</option>
											<option title="1" value="1" >Reserved</option>
											<option title="2" value="2" >Cancelled</option>
											<option title="3" value="3" >Released</option>
										</select>
										<input type="submit" id="btnSelectAllOption" class="btnSelectAllOption" name="btnSelectAllOption" value="Update All"/>
									</div>
									<!--div><input type="submit" id="btnSelectAllOption" class="btnSelectAllOption" name="btnSelectAllOption" value="Update All"/> </div-->
								<!--/form-->
								<?php
								
								print '<table id="requests"><tr><th>Confirmation Number</th><th>Client Name</th><th>Phone Number</th><th>Email Address</th><th>Appointment Time</th><th>Appointment Date</th><th>Visit Type</th></tr>';
								//print '<tr>';
								/*
								//foreach ($array1 as $key => $value)
								//foreach ($array1 as $value)
								{
									//print '<td>' . 'Key ->' . $key . 'Value ->' . $value . 'Fetched ->' . $array1[$fieldNames[$key]] . '</td>';
									//print '<td>' . $array1[$tblRequestsFieldName[$key]] . '</td>';
									print '<td>' . $key . '</td>';
								}
								*/
								
								
								print '<tr>';
								foreach ($array1 as $oKey) {
									foreach ($oKey as $key => $value)
									{
										//print $value;
										//print $key;
										print '<td>' . $value . '</td>';
										//print '<td>' . $oKey[$tblRequestsFieldName[$iValue]] . '</td>';
									}
								}
								print '</tr>';
								
								//print '</tr>';
								unset($key);
								unset($value);
								print '</table>';
								
								print '<div id="requestsAndRequestsDetailPane">';
								print '<div id="requests"><table>';
								foreach ($array2 as $oKey) 
								{
									foreach ($oKey as $key => $value)
									{
										if ($key == 'request_Id') 
										{
											
											print '<tr><td><input  type="submit" class="btnRequestId" name="btnRequestId" value="' . $value . '" /> >> </td></tr>';
											
										}									
									}
								}	
								print '</table></div>';
							}
							
							function printDivEnd()
							{
								print '</form></div>';
							}
							
							function printReqDetails($reqId) 
							{
								$confirmationCodes = array("0" => "Unconfirmed", "1" => "Reserved", "2" => "Canceled", "3" => "Released");
								//$con = sqLiteConnectDB();
								$confirmationNumber = trim($_POST['txt_coNumber']);
								
								if ($reqId != '')
								{
									$query = "SELECT request_Id, confirmation_No, collection_No, box_No, item_No, current_Status FROM Requests_Details WHERE confirmation_No = '" . $confirmationNumber . "' AND request_Id = '" . $reqId . "'";
									$sqlScriptArray[0] = $query;
									$result = sqlExecuteStatement($sqlScriptArray, "S", "");
									$array3 = sqlite_fetch_all($result);
								}
								else
								{
									
									$query = "SELECT request_Id, confirmation_No, collection_No, box_No, item_No, current_Status FROM Requests_Details WHERE confirmation_No = '" . $confirmationNumber . "' AND request_Id = '" . $reqId . "'";
									$sqlScriptArray[0] = $query;
									$result = sqlExecuteStatement($sqlScriptArray, "S", "");
									$array3 = sqlite_fetch_all($result);
								}

								print '<div id="requestDetails"><table id="requestDetails">';
								foreach ($array3 as $oKey) 
								{										
									foreach ($oKey as $key => $value)
									{
										if ($key != 'current_Status') 
										{
											if ($key == 'request_Id') 
											{
												print '<tr><th>' . $key . '</th><td class="' . $key . '">' . $value . '</td></tr>';
												print '<input type="text" name="' . $key . '" value ="' . $value . '" style="display: none" /></td>';
											}
											else 
											{
												print '<tr><th>' . $key . '</th><td class="' . $key . '">' . $value . '</td></tr>';
											}	
										}
										else 
										{
											print '<tr><th>' . $key . '</th><td class="currentStatus">' . $confirmationCodes[$value] . '</td></tr>';
												
											//print '<tr><th>' . $key . '</th><td class="' . $key . '">' . $value . '</td></tr>';
											//print '<tr><th>' . $key . '</th><td class="' . $key . '"><select class="currentStatus" name="' . $key . '">';
											print '<tr><th>change_Status</th><td class="' . $key . '"><select class="currentStatus" name="' . $key . '">';
											($value == '0') ? print '<option title="0" selected="selected" value="0" >' . $confirmationCodes[0] .'</option>' : print '<option title="0" value="0">' . $confirmationCodes[0] .'</option>';
											($value == '1') ? print '<option title="1" selected="selected" value="1">' . $confirmationCodes[1] .'</option>' : print '<option title="1" value="1">' . $confirmationCodes[1] .'</option>';
											($value == '2') ? print '<option title="2" selected="selected" value="2">' . $confirmationCodes[2] .'</option>' : print '<option title="2" value="2">' . $confirmationCodes[2] .'</option>';
											($value == '3') ? print '<option title="3" selected="selected" value="3">' . $confirmationCodes[3] .'</option>' : print '<option title="3" value="3">' . $confirmationCodes[3] .'</option>';
											//print '</select></td></tr>';
											print '</select><input type="submit" id="btnUpdate" name="btnUpdate" value="Update"/></td></tr>';
											
										}													
									}
								}
								//print '<input type="submit" id="btnUpdate" name="btnUpdate" value="Update"/></table></div>';
								print '</table></div>';
								print '</div>';
							}
							//}
							function printNewConfNumber()
							{
							?>
								<input type="submit" id="logout" name="logout" value="Logout" />
								<div id="confContainer">
									<div><label>Enter Confirmation Number</label><br /><input type="text" id="txt_coNumber" name="txt_coNumber" /></div>
									<div><input type="submit" id="confSubmit" value="Submit" /></div>
								</div>
							<?php
							}
							function logoutFindingAidScheduler()
							{
								session_unset();
								session_destroy();
								$_SESSION = array();
							?>
								<script type="text/javascript">
									self.location = "dashboard.php";
								</script>
							<?php
							}
							
							

																						
						?>
					</div>
				<!--/form-->
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