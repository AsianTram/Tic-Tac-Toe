<?php
session_start();
if(!isset($_SESSION["hassession"])){
    echo "Your session is invalid!";
}
else{
    $watestdb= new PDO('mysql:host=127.0.0.1; dbname=WATest', "WATestUser1", "WATestPwd1");
    $countnum=$watestdb->query("SELECT COUNT(*)  FROM gameBoard");
    $result=$watestdb->query("SELECT *  FROM gameBoard");
    $home=array();
    $opp=array();
    $output=null;

    for($i=0; $i<$countnum->fetchColumn() ;$i++){
        $row=$result->fetch();
        if($row["id"]!= session_id())
        {
            $move =array($row["xcord"],$row["ycord"]);
            $home+= $move;
        }
        else{
            $move1 =array($row["xcord"],$row["ycord"]);
            $opp+= $move1;
        }
    
    }
    function checkWin($teamarray){
        if(in_array(array('1', '1'), $teamarray)==true&& in_array(array('2', '1'), $teamarray)==true&&in_array(array('3', '1'), $teamarray)==true){
            return true;
        }
        else if (in_array(array('1', '2'), $teamarray)==true&& in_array(array('2', '2'), $teamarray)==true&&in_array(array('3', '2'), $teamarray)==true){
            return true;
        }
        else if (in_array(array('1', '3'), $teamarray)==true&& in_array(array('2', '3'), $teamarray)==true&&in_array(array('3', '3'), $teamarray)==true){
            return true;
        }
        else if (in_array(array('1', '1'), $teamarray)==true&& in_array(array('2', '2'), $teamarray)==true&&in_array(array('3', '3'), $teamarray)==true){
            return true;
        }
        else if (in_array(array('3', '1'), $teamarray)==true&& in_array(array('2', '2'), $teamarray)==true&&in_array(array('1', '3'), $teamarray)==true){
            return true;
        }
        else{
            return false;
        }
    }
    if(checkWin($home)==true){
        $output ="You are the winner";
    }
    if(checkWin($opp)==true){
        $output ="You are the loser";
    }
    

    $countnum->closeCursor();
    $countnum=NULL;
    $result->closeCursor();
    $result=null;
    print $output;
    
    

}

?>