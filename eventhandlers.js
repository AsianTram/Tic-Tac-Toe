// CREATE DATABASE
// CREATE gameBoard (id VARCHAR(50), xcord VARCHAR(10), ycord VARCHAR(10));
function openGame(){
    document.getElementById("gametable").style.display="contents";
    document.getElementById("play").style.display= "none";
    fetchBoard();
}
function Cordinate(id){
var cordinates = id.split("-");
let ycoord = cordinates[0];
let xcoord = cordinates[1];
let newCapsule={
                    sendx: xcoord,
                    sendy: ycoord
                }

let connect = new MyConnect(newCapsule,"ajajservice", document.getElementById(id));
setTimeout(checkResult, 1000);
}


function fetchBoard(){
    let connect = new MyConnect("NOP","getRecord", document.body);
    setTimeout(fetchBoard, 3000);
}
function checkResult(){
    //document.getElementById("test").innerHTML="Checking result";
    //let connect = new MyConnect("NOP","gameresult", document.body);
    var x_array=[];
    var y_array=[];
    var cells= document.getElementsByTagName('td');
    for(var i=0;i<cells.length;i++){
        if(cells[i].getAttribute("onclick")=="null"){

            //var div_append= cells[i].children;
            if(cells[i].innerHTML=="X"){
                x_array.push(cells[i].getAttribute("id"));
            }
            else{
                y_array.push(cells[i].getAttribute("id"));
            }
        }
    }
    var win1=['1-1','1-2','1-3'];
    var win2=['2-1','2-2','2-3'];
    var win3=['3-1','3-2','3-3'];
    var win4=['1-1','2-1','3-1'];
    var win5=['1-2','2-2','3-2'];
    var win6=['1-3','2-3','3-3'];
    var win7=['1-1','2-2','3-3'];
    var win8=['1-3','2-2','3-1'];


    alert(x_array.length);
    if(x_array.length>2){
        
        if(Win(win1,x_array)==true || Win(win2,x_array)==true || Win(win3,x_array)==true || Win(win4,x_array)==true || Win(win5,x_array)==true || Win(win6,x_array)==true || Win(win7,x_array)==true || Win(win8,x_array)==true ){
            document.body.innerHTML="You are the Winner!"
        }
    }
     
    if(y_array.length>2){
        if(Win(win1,y_array)==true || Win(win2,y_array)==true || Win(win3,y_array)==true || Win(win4,y_array)==true || Win(win5,y_array)==true || Win(win6,y_array)==true || Win(win7,y_array)==true || Win(win8,y_array)==true){
            document.body.innerHTML="You are the Loser!"
        }
    }
    
    
}
function Win(winarr, b ){
    var iswin= false;
    for(var x=0;x<winarr.length;x++){
        for(var y=0;y<b.length;y++){
            if(winarr[x]==b[y]){
                iswin=true;
                break;
            }
        }
    }
    return iswin;
}