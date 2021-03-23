<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once 'db/db.php';
    include_once 'class/login.php';

    $database = new Database();
    $db = $database->getConnection();

    $items = new User($db);

    
        $stmt = $items->getUserData();
       
            echo json_encode($lettersArr);
