  <?php
  // RECAPTCHA VARIABLES
	error_reporting(0);
	require_once('dbAccess.php');
	session_start();
	//print ($_SESSION['Jerin']);
	//print(' ');
	//print ($_SESSION['simpleCaptchaAnswer']);
	//print (' ');
	//print($_SESSION['captchaSelection']);
	
	$jStorage = $_POST["jStorage"];
	$conNumber = $_POST["confirmationNumber"];
	
	$jStorageArray = explode(" ", $jStorage);
  
  
	// CAPTCHA CHECKS

    // GLOBAL VARIABLE DECLARATION                            
	global $sqlBeginTr;
	global $sqlCommitTr;
	global $sqlRollbackTr;




if (isset($_SESSION['simpleCaptchaAnswer']) && $_POST['captchaSelection'] == $_SESSION['simpleCaptchaAnswer']) {
 // START "CAPTCHA CORRECTLY VERIFIED" ELSE BLOCK
		// CODE TO HANDLE SUCCESSFUL VERIFICATION
		//require_once('congrats.htm');
	    //error_reporting(0);
	   
	   
		$sqlInsert = 'INSERT INTO Requests (confirmation_No, client_Name, client_PhNo, client_Email, time, date, visit_type) VALUES';
		
			   
		// VARIABLE DECLARATION AND INITIALIZATION
		$sqlBeginTr = 'BEGIN TRANSACTION';
		$sqlCommitTr = 'COMMIT';
		$sqlRollbackTr = 'ROLLBACK';
		$sqlFinalScript = '';
		$sqlScriptArray = array();
		$requestDetails = array();
		$visitType = '';
		
		// FETCH VARIABLE VALUES FROM POST
		//$requestDetails = array( 0 => '"' . $_POST["cFullName"] . '"');
		$requestDetails[] = ('"' . $_POST["cFullName"] . '"');
		
		//$temp = $_POST["cPhone"];
		if ($_POST["cPhone"] == NULL)
		{
			//$requestDetails = array(1 => '""');
			$requestDetails[] = ('""');
		}
		else 
		{
			//$requestDetails = array(1 => '"' . $_POST["cPhone"]. '"');
			$requestDetails[] = ('"' . $_POST["cPhone"]. '"');
		}
		
		//$temp = $_POST["cEmail"];
		if ($_POST["cEmail"] == NULL)
		{
			//$requestDetails = array(2 => '""');	
			$requestDetails[] = ('""');
		}
		else 
		{
			//$requestDetails = array(2 => '"' . $_POST["cEmail"]. '"');
			$requestDetails[] = ('"' . $_POST["cEmail"]. '"');
		}
		
		//$requestDetails = array(3 => '"' . date('h:i A',$temp) . '"');
		$requestDetails[] = ('"' . date("H:i:s",strtotime($_POST["iTime"])) . '"');
		
		$requestDetails[] = ('"' . date('Y-m-d',strtotime($_POST["iDate"])) . '"');
	
		if ($_POST["iGroup1"] == 'visit')
		{
			$requestDetails[] = ('"' . 'Visit' . '"');
			$visitType = 'Visit';
		}
		if ($_POST["iGroup1"] == 'requestCopy')
		{
			$requestDetails[] = ('"' . 'RequestCopy' . '"');
			$visitType = 'RequestCopy';
		}
		
		$sqlInsertValues = '("' . $conNumber . '",';
	    
	    // LOOP TO CREATE SQL VALUES SCRIPT
	    foreach ($requestDetails as $key => $value) {
			$sqlInsertValues = $sqlInsertValues . $value;
			    
			if (count($requestDetails) != ($key + 1)) {
			        $sqlInsertValues = $sqlInsertValues . ',';
			} 
			else {
				$sqlInsertValues = $sqlInsertValues . ')';
			}
		}
	    
		unset($value);
		unset($key);
	
		// COMBINE BOTH INSERT AND VALUES SQL SCRIPT
		$sqlScriptArray[] = $sqlInsert . $sqlInsertValues;
	
		/*
		// FETCH DATA FROM DATABASE
		$db = sqlite_open('researchCartdb.sdb', '777', $sqliteerror) or die ('Unable to open database!  ' . $sqliteerror );
		$result = sqlite_query($db, 'SELECT * FROM Requests');
		$array = sqlite_fetch_all($result);
		sqlite_close($db); 
		*/
	    
		//print_r($jStorageArray);
		$boxNumber = '';
		$itemNumber = '';
		$collNumber = '';
	    $request_id = '';
		$sdate = '';
		$status = '';
		
		$maxRequest_query[] = 'SELECT MAX(request_id) FROM Requests_Details;';
		$maxRequest_Id = sqlExecuteStatement($maxRequest_query, 'S', 'sTr');
		$maxRequest_Id = sqlite_fetch_single($maxRequest_Id);	
		
		$sqlInsert = 'INSERT INTO Requests_Details (confirmation_No, collection_No, box_No, item_No, current_Status) VALUES (';
		$sqlinsert_history = 'INSERT INTO Request_History (request_id, user_id, status, sdate) VALUES (';
		foreach ($jStorageArray as &$value) {
			$temp = $value;
			strpos($temp, '.');
			$conNumber = '"' . substr ($temp, 0, strpos($temp, '.')) . '"';
			$maxRequest_Id = $maxRequest_Id + 1;
			$request_id = $maxRequest_Id;
			$temp = substr ($temp, strpos($temp, '.') + 1);
			$collNumber = '"' . substr ($temp, 0, strpos($temp, '.')) . '"';
			$temp = substr ($temp, strpos($temp, '.') + 1);
			$boxNumber = '"' . substr ($temp, 0, strpos($temp, '.')) . '"';
			$temp = substr ($temp, strpos($temp, '.') + 1);
			$itemNumber = '"' .  $temp . '"';
			$status = '1';
			//$sdate =  '"' .  date('Y-m-d') . '"';
			$sqlScriptArray[] = $sqlInsert . $conNumber . ',' . $collNumber . ',' . $boxNumber . ',' . $itemNumber . ',' . '1)';
			$sqlScriptArray[] = $sqlinsert_history . $request_id . ',' . "'Customer'" . ',' . '1' . ',' . '"' . date("Y-m-d H:i:s") . '"' . ')';
		}
		unset($value);
	    //print_r($sqlScriptArray);
		
		//print_r ($sqlScriptArray);
		//print $sqlScriptArray;				
		// INSERT DATA INTO TABLE
    	$retValue = sqlExecuteStatement($sqlScriptArray,'I','wTr');
		
		if($retValue == 'Success')
		{
			//print 'Test';
			require_once('congrats.php');
		}
		//print_r ($sqlScriptArray);

		//print ('foo bar');
		//print $sqlBeginTr;
		/*
		// TRUNCATE TABLE
		sqlExecuteStatement('DELETE FROM Requests_Details','D','wTr');
		*/
		
		/*
		// INSERT INTO REQUESTS_DETAILS TABLE
		foreach ($sqlScriptArray as &$value) 
		{
			sqlExecuteStatement($value,'I','wTr');
		}
		print '||||BREAK||||';
		unset($value);
	    */
		
		/*
		// TRUNCATE TABLES
		$db = sqlite_open('researchCartdb.sdb', '777', $sqliteerror) or die ('Unable to open database!  ' . $sqliteerror );
		$result = sqlite_query($db, 'DELETE FROM Requests_Details');
		$result = sqlite_query($db, 'DELETE FROM Requests');
		sqlite_close($db);
		
		// INSERT DATA INTO TABLE
    	$retValue = sqlExecuteStatement($sqlScriptArray,'I','wTr');
    	
    	
		// FETCH FROM REQUESTS_DETAILS TABLE
		$arr = array();
		$db = sqlite_open('researchCartdb.sdb', '777', $sqliteerror) or die ('Unable to open database!  ' . $sqliteerror );
		$result = sqlite_query($db, 'SELECT * FROM Requests_Details');
		$arr[] = sqlite_fetch_all($result);
		$result = sqlite_query($db, 'SELECT * FROM Requests');
		$arr[] = sqlite_fetch_all($result);
		sqlite_close($db);
		print_r ($arr);
		*/

	}
	else
	{
		//error_reporting(0);
		/*
		$test101 = $_POST['captchaSelection'];
		//print $test101;
		$test102 = $_POST['jerinTest'];
		print $test102;
		$test103 = isset($_SESSION['captchaSelection']);
		print $test103;
		die ("The reCAPTCHA wasn't entered correctly. Go back and try it again.");
		*/
		$_SESSION['incorrectCaptcha'] = null;
		$_SESSION['incorrectCaptcha'] = 'true';
		
		print ('<script type="text/javascript">');
		print ('
					self.location = "checkout.php";
		');
		print('</script>');	
		
    	//header("Status: 200");
    	//header("Location: http://lskf3ss.linuxclass.marist.edu/researchshoppingcartdemo/lowellthomaspapers/checkout.php");

		//require('checkout.php');

	} 
	// END "CAPTCHA CORRECTLY VERIFIED" ELSE BLOCK
    
    
    /*
	function sqlExecuteStatement($sqlScriptArray, $sqlType, $trLevel) {

		try {
			$db = sqlite_open('researchCartdb.sdb', '777', $sqliteerror) or die ('Unable to open database!  ' . $sqliteerror );
			$returnBool = sqlite_exec($db, $GLOBALS["sqlBeginTr"]);
			if (!$returnBool) {
				throw new Exception('Insert failed');
			}
			foreach ($sqlScriptArray as &$value) {
				$returnBool = sqlite_exec($db, $value);
				if (!$returnBool) {
					throw new Exception('Insert failed');
				}
			}
			unset($value);
			$returnBool = sqlite_exec($db, $GLOBALS["sqlCommitTr"]);
			if (!$returnBool) {
				throw new Exception('Insert failed');
			}
			else {
				sqlite_close($db);
				require_once('congrats.htm');
				return('Success');
			}
			
		} catch (Exception $e) {
			$returnBool = sqlite_exec($db, $GLOBALS["sqlRollbackTr"]);
			sqlite_close($db);
			require_once('failure.htm');
			echo 'Caught exception: ',  $e->getMessage(), "\n";
			return('Insert failed');

		}
	}
	*/
	
	/*
		function sqlExecuteStatement($sqlScriptArray, $sqlType, $trLevel) {
		error_reporting(0);
		try {
			$con = sqLiteConnectDB();
			if ($trLevel == 'wTr')
			{
				$returnBool = exec_sqLite($con, $GLOBALS["sqlBeginTr"]);
				if (!$returnBool) 
				{
					throw new Exception('Transcation could not be started');
				}
			}
			
			if ($sqlType == 'I')
			{
				foreach ($sqlScriptArray as &$value) 
				{
					$returnBool = exec_sqLite($con, $value);
					if (!$returnBool) 
					{
						throw new Exception('Insert failed');
					}
				}
			}
			unset($value);

			if ($sqlType == 'S')
			{
				foreach ($sqlScriptArray as &$value) 
				{
					$returnBool = query_sqLite($con, $value);
					return ($returnBool);
					if ($returnBool == '') 
					{
						throw new Exception('Select failed');
					}
				}
			}
			unset($value);
			
			
			
			if ($trLevel == 'wTr')
			{
				$returnBool = exec_sqLite($con, $GLOBALS["sqlCommitTr"]);
				if (!$returnBool) 
				{
					throw new Exception('Transcation could not be committed');
				}
				else 
				{
					close_sqLite($con);
					require_once('congrats.php');
					return('Success');
				}
			}

			
		} catch (Exception $e) {
			if ($trLevel == 'wTr')
			{	
				$returnBool = exec_sqLite($con, $GLOBALS["sqlRollbackTr"]);
			}
			close_sqLite($con);
			$_POST["confirmationNumber"] = $e->getMessage();
			require_once('failure.htm');
			//echo 'Caught exception: ',  $e->getMessage(), "\n";
			//return('Insert failed');

		}
	}
	*/
  ?>