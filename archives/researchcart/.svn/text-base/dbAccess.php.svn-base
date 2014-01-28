<?php

	function sqlExecuteStatement($sqlScriptArray, $sqlType, $trLevel) 
	{
		//error_reporting(0);
		$sqlBeginTr = 'BEGIN TRANSACTION';
		$sqlCommitTr = 'COMMIT';
		$sqlRollbackTr = 'ROLLBACK';
		
		
		try {
			$con = sqLiteConnectDB();
			if ($trLevel == 'wTr')
			{
				$returnBool = exec_sqLite($con,$sqlBeginTr);
				if (!$returnBool) 
				{
					throw new Exception('Transcation could not be started');
				}
			}
			
			if ($sqlType == 'I' || $sqlType == 'U')
			{
				foreach ($sqlScriptArray as &$value) 
				{
					$returnBool = exec_sqLite($con, $value);
					if (!$returnBool) 
					{
						throw new Exception('Insert/Update failed');
					}
				}
			}
			unset($value);

			if ($sqlType == 'S')
			{
				foreach ($sqlScriptArray as &$value) 
				{
					$returnBool = query_sqLite($con, $value);
					if ($returnBool == '') 
					{
						throw new Exception('Select failed');
					}
					return ($returnBool);
				}
			}
			unset($value);
			
			if ($trLevel == 'wTr')
			{
				$returnBool = exec_sqLite($con, $sqlCommitTr);
				if (!$returnBool) 
				{
					throw new Exception('Transcation could not be committed');
				}
				else 
				{
					close_sqLite($con);
					return('Success');
				}
			}

			
		} catch (Exception $e) {
			if ($trLevel == 'wTr')
			{	
				$returnBool = exec_sqLite($con, $sqlRollbackTr);
				print 'SQL Rolled back';
			}
			close_sqLite($con);
			//$_POST["confirmationNumber"] = $e->getMessage();
			//require_once('failure.htm');
			print 'Failure.htm';
			//echo 'Caught exception: ',  $e->getMessage(), "\n";
			//return('Insert failed');

		}
	}
	
	
	function sqLiteConnectDB() {
		// DB CONNECTION OBJECT
		$con = sqlite_open('researchCartdb.sdb', '777', $sqliteerror) or die ('Unable to open database!  ' . $sqliteerror );
		return $con;
	}	
	
	function query_sqLite($query, $con) {
		 // QUERY RESULT
		$result = sqlite_unbuffered_query($con, $query, SQLITE_ASSOC); //SQLITE_NUM, SQLITE_ASSOC
		return ($result);
	}
	
	function exec_sqLite($con, $query) {
		$resultBool = sqlite_exec($con, $query);
		return $resultBool;
	}

	function close_sqLite($con) {
		// CLOSE DATABASE CONNECTION
		sqlite_close($con);
	}
?>