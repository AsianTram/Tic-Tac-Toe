// CREATE DATABASE
// CREATE gameBoard (id VARCHAR(50), xcord VARCHAR(10), ycord VARCHAR(10));
class MyConnect extends XMLHttpRequest{

    constructor(sendcapsule, target, append)
    {
        super();
    // declare var appenResultTo
    this.appendResultTo= append;
    //alert("You sent: "+message+" to "+ target);
    this.onreadystatechange = this.ajaxin;
    this.open("POST", target+".php", true);
    //this.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //this.handleResultsWith= resulthandler;
        //this.appendResultTo= append;
        //this.onreadystatechange = this.ajaxin();
        //this.open("POST", target+".php", true);
        this.setRequestHeader("Content-Type", "application/json");
        let jsonout= JSON.stringify(sendcapsule);
        this.send(jsonout);
        //alert("Completed");
        //this.send("message=hello");
    
    }
    
    ajaxin()
    {
        //alert("AJAX stuff occurred" + this.readyState);
        if(this.readyState ===4)
        {
            
        
            if(this.status===200)
            {
              //alert("The response is "+this.responseText);
            //   document.getElementById("notification").innerHTML=this.responseText;
            //  let responsecapsule = null;
            //  try{
            //      responsecapsule=JSON.parse(this.responseText);
            //  }
             if(this.responseText=="X")
             {
                 
                //  let texttodiv = document.createTextNode(this.responseText);
                //  let newdiv=document.createElement('div');
                //  newdiv.appendChild(texttodiv);
                // this.appendResultTo.appendChild(newdiv);
                this.appendResultTo.innerHTML=this.responseText;
                 document.getElementById(this.appendResultTo.getAttribute("id")).setAttribute('onclick',null);
             }
             else if(this.responseText.length==3){
                 // this.appendResultTo = this.responseText;
                 // let texttodiv = document.createTextNode("O");
             
                 // this.appendResultTo.appendChild(texttodiv);
                 document.getElementById(this.responseText).innerHTML="O";
                 document.getElementById(this.responseText).setAttribute('onclick',null);
             }
             else{
                 // this.appendResultTo = "notification";
                 // let texttodiv = document.createTextNode(this.responseText);
             
                 // this.appendResultTo.appendChild(texttodiv);
                 document.getElementById("notification").innerHTML=this.responseText;
             }
             
             // catch (exception){
             //     alert("This is not JSON: "+this.responseText);
             // }
             //if(this.responseText != null) this.handleResultsWith(this.responseText);
      
            
            }
            else
            {
                    alert("Whoopsee... something failed...");
            }
        }
    }
        
}
