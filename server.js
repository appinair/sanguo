// JavaScript Document
var conns = new Array();  
 var ws = require('./node_modules/ws').Server;
 var server = new ws({
    port: 8080
});  
var j=0;
 server.on('connection', function(conn)
 {   
     console.log("<"+conn.id+"> "+'connection....');  
     conns.push(conn); 
     conn.id=j;
	 if(j%2!=0){
		 conns[conn.id].send("1");
		 conns[conn.id-1].send("1");    
	 }
	 j++;
      
     conn.on('message',function(msg)
	 {  
         console.log("<"+conn.id+"> "+msg); 

		 if(conns.length>1&&conn.id%2==0){
                 conns[conn.id+1].send(msg);  
		 }
		 if(conns.length>1&&conn.id%2!=0){
                 conns[conn.id-1].send(msg);  
		 }

     });
	 
	 conn.on("close", function(){
		 j--;
         console.log(""<"+conn.id+"> "+closed connection.... ");
     });   
 });
 
 

 //server.listen(8080);  
 console.log('running......'); 
                                 