
<?php
//Step1
 $db = mysqli_connect('mysql8.000webhost.com','a2931638_arturo','','a2931638_arturo')
 or die('Error connecting to MySQL server.');
?>

<html>
 <head>
 </head>
 <body>
 <h1>PHP connect to MySQL</h1>
 <?php
//Step2
$query = "SELECT * FROM comments";
mysqli_query($db, $query) or die('Error querying database.');
?>
</body>
</html>
