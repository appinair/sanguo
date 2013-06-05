// JavaScript Document

//文字信息依此显示，大小变化

var size = 25; 
var speed_between_messages=1500 //in miliseconds 


var tekst = new Array() 
{ 
tekst[0] = "Shock Wave text @ Dynamicdrive.com"; 
tekst[1] = "Here you can type anything you want"; 
tekst[2] = "You can change the size"; 
tekst[3] = "And you can change the speed"; 
} 

var klaar = 0; 
var s = 0; 
var veran =0; 
var tel = 0; 

function bereken(i,Lengte) 
{ 
return (size*Math.abs( Math.sin(i/(Lengte/3.14))) ); 
} 


function motor(p) 
{ 
var output = ""; 
for(w = 0;w < tekst[s].length - klaar+1; w++) 
{ 
q = bereken(w/2 + p,16); 
if (q > size - 0.5) 
{klaar++;} 
if (q < 5) 
{tel++; 
if (tel > 1) 
{ 
tel = 0; 
if (veran == 1) 
{ 
veran = 0; 
s++; 
if ( s == tekst.length) 
{s = 0;} 
p = 0; 
if (window.loop) 
{clearInterval(loop)} 
loop = motor(); 
} 
} 
} 
output += "<font style='font-size: "+ q +"pt'>" +tekst[s].substring(w,w+1)+ "</font>"; 
} 
for(k=w;k<klaar+w;k++) 
{ 
output += "<font style='font-size: " + size + "pt'>" +tekst[s].substring(k,k+1)+ "</font>"; 
} 
return output; 
} 


function startmotor(p){ 
if (!document.all) 
return 
var loop = motor(p); 
if (window.time) 
{clearInterval(time)} 
if (klaar == tekst[s].length) 
{ 
klaar = 0; 
veran = 1; 
tel = 0; 
var time = setTimeout("startmotor(" +(p+1) + ")", speed_between_messages); 
}else 
{ 
var time =setTimeout("startmotor(" +(p+1) + ")", 50); 
} 

} 


//变色文字

var someText = "Welcome to my Website!!"; // the text 
var aChar; 
var aSentence; 
var i=0; // a counter 

var colors = new Array("FF0000","FFFF66","FF3399","00FFFF","FF9900","00FF00"); // the colors 
var aColor; // the chosen color 

function loadText() 
{ 
// randomly choose color 
aColor = colors[Math.floor(Math.random()*colors.length)]; 

aChar = someText.charAt(i); 
if (i == 0) 
aSentence = aChar; 
else 
aSentence += aChar; 

// 50 iterations max. 
if (i < 50) i++; 

// For IE 
if (document.all) 
{ 
textDiv.innerHTML= "<font color='#"+aColor+"' face='Tahoma' size='5'><i>"+aSentence+"</i></font>"; 
setTimeout("loadText()",100); 
} 

// For Netscape Navigator 4 
else if (document.layers) 
{ 
document.textDiv.document.write("<font color='#"+aColor+"' face='Tahoma' size='5'><i>"+aSentence+"</i></font>"); 
document.textDiv.document.close(); 
setTimeout("loadText()",100); 
} 

// For other 
else if (document.getElementById) 
{ 
document.getElementById("textDiv").innerHTML = "<font color='#"+aColor+"' face='Tahoma'size='5'><i>"+aSentence+"</i></font>"; 
setTimeout("loadText()",100); 
} 
} 


