//html5特效

//***************************drag and drop******************************
function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
ev.target.appendChild(document.getElementById(data));
}

function closepage(x)
{   
	document.getElementById(x).style.display="none";
}

function openpage(x)
{
	document.getElementById(x).style.zIndex=100;
	document.getElementById(x).style.display="block";
}
function message(title,text)
{
	document.getElementById("messagetitle").innerHTML=title;
	document.getElementById("messagetext").innerHTML=text;
	openpage('MessagePage');
}
// JavaScript Document