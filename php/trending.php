<?php require 'connection.php';
$result = mysqli_query($connection, "SELECT * FROM tbl_word ORDER BY no_use DESC LIMIT 10");
if (!$result) {
    echo 'Could not run query: ' . mysql_error();
    exit;
}

$i = 1;
while ($row = mysqli_fetch_assoc($result)) {
    echo $i . ". ";
    echo $row["word"];
    echo '<br />';
    $i = $i+1;
}
?>