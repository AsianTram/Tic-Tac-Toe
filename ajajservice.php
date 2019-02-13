<?php
session_start();
if(!isset($_SESSION["hassession"]))
{
    print "Naughty";
}
else{
    $textmessage =file_get_contents('php://input');
    $receivecapsule=json_decode($textmessage);
    //print("Decode OK");
    $watestdb= new PDO('mysql:host=127.0.0.1; dbname=WATest', "WATestUser1", "WATestPwd1");
        $addtable=$watestdb->prepare("INSERT INTO gameBoard(id, xcord, ycord)  VALUES(:id, :xcord, :ycord)");
        $addtable->bindValue(":id", session_id());
        $addtable->bindValue(":xcord",$receivecapsule->sendx);
        $addtable->bindValue(":ycord", $receivecapsule->sendy);
        $addtable->execute();
        $output="X";
        $addtable=NULL;
    print $output;
    //print "Output printed";
    
}
?>