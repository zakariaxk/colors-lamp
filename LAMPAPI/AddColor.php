<?php
	require_once __DIR__ . '/config.php';

	$inData = getRequestInfo();
	
	$color = $inData["color"];
	$userId = $inData["userId"];

	try
	{
		$conn = getDbConnection();
	}
	catch (Throwable $e)
	{
		returnWithError("Database connection failed");
		return;
	}

	if ($conn)
	{
		$stmt = $conn->prepare("INSERT into Colors (UserId,Name) VALUES(?,?)");
		$stmt->bind_param("ss", $userId, $color);
		$stmt->execute();
		$stmt->close();
		$conn->close();
		returnWithError("");
	}

	function getRequestInfo()
	{
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}
	
	function returnWithError( $err )
	{
		$retValue = '{"error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}
	
?>