<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', '0');

$link=mysqli_connect("localhost", "root", "", "blog"); 
mysqli_set_charset($link, "utf8");

$sql='SELECT * FROM posts';
$query_result=mysqli_query($link, $sql);
// print_r($query_result);
$result = array ();

while ($row = mysqli_fetch_assoc($query_result)) {
	// print_r($row);
	// die();
	// $post_id = $row["post_id"];
	// $title = $row["title"];
	// $content = $row["content"];

	$result[] = $row;
}

echo json_encode($result);
