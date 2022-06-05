<?php
header(
"Access-Control-Allow-Origin: *"
"Access-Control-Allow-Methods: *"
"Access-Control-Allow-Headers: *"
);
error_reporting(E_ALL);
ini_set('display_errors', '0');

$link=mysqli_connect("localhost", "root", "", "blog"); 
mysqli_set_charset($link, "utf8");

$json = file_get_contents('php://input');
    $obj = json_decode($json, true);

$post_id = $obj['post_id'];

mysqli_query($link, "DELETE FROM `posts`");
 
