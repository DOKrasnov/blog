<?php
header("Access-Control-Allow-Origin: *");
error_reporting(E_ALL);
ini_set('display_errors', '0');

$link=mysqli_connect("localhost", "root", "", "blog"); 
mysqli_set_charset($link, "utf8");

// echo ($_POST['title'].$_POST['content'].$_POST['user']);
$title = $_POST['title'];
$content = $_POST['content'];
$user = $_POST['user'];

mysqli_query($link, "INSERT INTO posts (title, content, user) 
                        VALUES ('$title', '$content', '$user')");
 
echo ('Post has added');