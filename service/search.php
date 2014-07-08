<?php
		
	$conn =	null;
 	$host = 'localhost';
 	$db = 	'wiki';
 	$user = 'root';
 	$pwd = 	'';
	
	try
	{
	   	$conn = new PDO('mysql:host='.$host.';dbname='.$db, $user, $pwd);
	}
	
	catch (PDOException $e) 
	{
		echo '<p>Cannot connect to database !!</p>';
		echo '<p>'.$e.'</p>';
	    exit;
	}
	
		
	if (isset($_GET['name']))
	{
		$data = "%".$_GET['name']."%";
		$suchbegriff = trim(htmlentities(stripslashes(mysql_real_escape_string($_GET['name']))));
		$sql = "
				SELECT
					category, title, notes, author
				FROM
					wiki
				WHERE
					category LIKE '%$suchbegriff%'
					OR
					title LIKE '%$suchbegriff%'
					OR
					notes LIKE '%$suchbegriff%'
					OR
					author LIKE '%$suchbegriff%'
				ORDER BY
					author, category, title, notes
				";
		
		$statement = $conn->prepare($sql);
		
		$results = $statement->execute(array($data));
		
		$rows = $statement->fetchAll();
		$error = $statement->errorInfo();
		
	}
	
	if(empty($rows)) {
		echo "<tr>";
			echo "<td colspan='4'>Keine Einträge gefunden.</td>";
		echo "</tr>";
	}
	
	else {
		foreach ($rows as $row) {
			echo "<tr>";
				echo "<td>".$row['author']."</td>";
				echo "<td>".$row['category']."</td>";
				echo "<td>".$row['title']."</td>";
				echo "<td>".$row['notes']."</td>";
			echo "</tr>";
		}
	}
?>