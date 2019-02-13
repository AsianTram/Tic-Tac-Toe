<?php
session_start();
if(!isset($_SESSION["hassession"])){
    echo "Your session is invalid!";
}
else{
    $watestdb= new PDO('mysql:host=127.0.0.1; dbname=WATest', "WATestUser1", "WATestPwd1");
    $result=$watestdb->query("SELECT *  FROM gameBoard");
    $row=$result->fetch();
    if((string)$row["id"]== (string)session_id())
            {
                $output="It's the opponent's turn";
            }
            else{
                
                $output =(string)$row['ycord']."-".(string)$row['xcord'];
                $delete=$watestdb->query("DELETE FROM gameBoard");
                $delete->closeCursor();
                $delete=null;
            }

    $result->closeCursor();
    $result=null;
    
    
    print $output;
    

}

?>