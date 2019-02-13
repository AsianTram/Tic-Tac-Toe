<?php
session_start();
$_SESSION["hassession"]=true;

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Tic-Tac-Toe</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="serviceconnect.js"></script>
        <script type="text/javascript" src="eventhandlers.js"></script>
    </head>
    <body>
            <!-- <textarea id ="xcoordinate"></textarea>
            <textarea id ="ycoordinate"></textarea>
            <button type="firebutton" id="dabutton" onClick="ajaxOutForFireButton()">Fire </button> -->
            <div id="notification">Something is here</div>
            <button id="play" onClick="openGame()">Play</button>
            <table id="gametable">
                <tr>
                    <td id="1-1" onClick="Cordinate(this.id)"></td>
                    <td id="1-2" onClick="Cordinate(this.id)"></td>
                    <td id="1-3" onClick="Cordinate(this.id)"></td>
                </tr>
                <tr>
                    <td id="2-1" onClick="Cordinate(this.id)"></td>
                    <td id="2-2" onClick="Cordinate(this.id)"></td>
                    <td id="2-3" onClick="Cordinate(this.id)"></td>
                </tr>
                <tr>
                    <td id="3-1" onClick="Cordinate(this.id)"></td>
                    <td id="3-2" onClick="Cordinate(this.id)"></td>
                    <td id="3-3" onClick="Cordinate(this.id)"></td>
                </tr>
            </table>
            <div id="test"></div>
    </body>