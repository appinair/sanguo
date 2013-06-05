//上传数据，更新数据库
//处理register


var xmlHttp

function update()
{
//json

var sgdata = new Object();
sgdata.username=username;
sgdata.money=money;
sgdata.cost=cost;

sgdata.items=new Object();
sgdata.items.items1=items[1];
sgdata.items.items2=items[2];
sgdata.items.items3=items[3];
sgdata.items.items4=items[4];
sgdata.items.items5=items[5];
sgdata.items.items6=items[6];
sgdata.items.items7=items[7];
sgdata.items.items8=items[8];
sgdata.items.items9=items[9];
sgdata.items.items10=items[10];

sgdata.itemnum=itemnum;
sgdata.heronum=heronum;
sgdata.armnum=armnum;
sgdata.cqnum=cqnum;
sgdata.ylnum=ylnum;

sgdata.tdtime=tdtime;
sgdata.tdrecord=tdrecord;
sgdata.qjtime=qjtime;
sgdata.qjrecord=qjrecord;
sgdata.kptime=kptime;
sgdata.kprecord=kprecord;
sgdata.fttime=fttime;
sgdata.ftrecord=ftrecord;

sgdata.stageid=stageid;
sgdata.fighthero=fightstage[stageid];
sgdata.fightuser=fightuser[stageid];

sgdata.hero=new Object();
sgdata.hero.hero1=hero[1];
sgdata.hero.hero2=hero[2];
sgdata.hero.hero3=hero[3];
sgdata.hero.hero4=hero[4];
sgdata.hero.hero5=hero[5];
sgdata.hero.hero6=hero[6];
sgdata.hero.hero7=hero[7];
sgdata.hero.hero8=hero[8];
sgdata.hero.hero9=hero[9];
sgdata.hero.hero10=hero[10];
sgdata.hero.hero11=hero[11];
sgdata.hero.hero12=hero[12];

sgdata.arm=new Object();
sgdata.arm.arm1=arm[1];
sgdata.arm.arm2=arm[2];
sgdata.arm.arm3=arm[3];
sgdata.arm.arm4=arm[4];
sgdata.arm.arm5=arm[5];
sgdata.arm.arm6=arm[6];
sgdata.arm.arm7=arm[7];
sgdata.arm.arm8=arm[8];
sgdata.arm.arm9=arm[9];
sgdata.arm.arm10=arm[10];
sgdata.arm.arm11=arm[11];
sgdata.arm.arm12=arm[12];

sgdata.heroexp=new Object();
sgdata.heroexp.heroexp1=heroexp[1];
sgdata.heroexp.heroexp2=heroexp[2];
sgdata.heroexp.heroexp3=heroexp[3];
sgdata.heroexp.heroexp4=heroexp[4];
sgdata.heroexp.heroexp5=heroexp[5];
sgdata.heroexp.heroexp6=heroexp[6];
sgdata.heroexp.heroexp7=heroexp[7];
sgdata.heroexp.heroexp8=heroexp[8];
sgdata.heroexp.heroexp9=heroexp[9];
sgdata.heroexp.heroexp10=heroexp[10];
sgdata.heroexp.heroexp11=heroexp[11];
sgdata.heroexp.heroexp12=heroexp[12];

sgdata.heroarm=new Object();
sgdata.heroarm.heroarm1=heroarm[1];
sgdata.heroarm.heroarm2=heroarm[2];
sgdata.heroarm.heroarm3=heroarm[3];
sgdata.heroarm.heroarm4=heroarm[4];
sgdata.heroarm.heroarm5=heroarm[5];
sgdata.heroarm.heroarm6=heroarm[6];
sgdata.heroarm.heroarm7=heroarm[7];
sgdata.heroarm.heroarm8=heroarm[8];
sgdata.heroarm.heroarm9=heroarm[9];
sgdata.heroarm.heroarm10=heroarm[10];
sgdata.heroarm.heroarm11=heroarm[11];
sgdata.heroarm.heroarm12=heroarm[12];

//sgdata.mystate=mystate;
//sgdata.mystep=mystate;
//sgdata.myattack=myattack;
sgdata.heroact=new Object();
sgdata.heroact.heroact1=heroact[1];
sgdata.heroact.heroact2=heroact[2];
sgdata.heroact.heroact3=heroact[3];
sgdata.heroact.heroact4=heroact[4];
sgdata.heroact.heroact5=heroact[5];
sgdata.heroact.heroact6=heroact[6];
sgdata.heroact.heroact7=heroact[7];
sgdata.heroact.heroact8=heroact[8];
sgdata.heroact.heroact9=heroact[9];
sgdata.heroact.heroact10=heroact[10];
sgdata.heroact.heroact11=heroact[11];
sgdata.heroact.heroact12=heroact[12];

sgdata.zhaomu=new Object();
sgdata.zhaomu.zhaomu1=zhaomu[1];
sgdata.zhaomu.zhaomu2=zhaomu[2];
sgdata.zhaomu.zhaomu3=zhaomu[3];
sgdata.zhaomu.zhaomu4=zhaomu[4];
sgdata.zhaomu.zhaomu5=zhaomu[5];
sgdata.zhaomu.zhaomu6=zhaomu[6];

sgdata.xunbao=new Object();
sgdata.xunbao.xunbao1=xunbao[1];
sgdata.xunbao.xunbao2=xunbao[2];
sgdata.xunbao.xunbao3=xunbao[3];
sgdata.xunbao.xunbao4=xunbao[4];
sgdata.xunbao.xunbao5=xunbao[5];
sgdata.xunbao.xunbao6=xunbao[6];

var json_data = JSON.stringify(sgdata);

 //alert(json_data);
xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }
//alert("go on"+newhero);
var url="update.php"
url=url+"?q="+json_data
/*
url=url+"?q="+username+"&money="+money+"&cost="+cost+"&item1="+items[1]+"&item2="+items[2]+"&item3="+items[3]+"&cqnum="+chuanqi+"&ylnum="+yiliu+"&heronum="+heronum+"&tdtime="+tdtime+"&qjtime="+qjtime+"&kptime="+kptime+"&stageid="+stageid+"&fighthero="+fightstage[stageid]+"&fightuser="+fightuser[stageid]+"&hero1="+hero[1]+"&hero2="+hero[2]+"&hero3="+hero[3]+"&hero4="+hero[4]+"&hero5="+hero[5]+"&hero6="+hero[6]+"&hero7="+hero[7]+"&hero8="+hero[8]+"&hero9="+hero[9]+"&hero10="+hero[10]+"&hero11="+hero[11]+"&hero12="+hero[12]
*/
//alert(fightuser[stageid]);
url=url+"&sid="+Math.random()
xmlHttp.onreadystatechange=UpdateStateChanged()
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
}


function register()
{ 
var regname=document.getElementById("regname").value;
var regpassword=document.getElementById("regpassword").value;
var regemail=document.getElementById("regemail").value;

	if(regname=="USERNAME"||regname==""){document.getElementById("reghint1").innerHTML="请输入用户名！";exit(1);}
	if(regemail=="邮箱(abc@abc.com)"||regemail==""){document.getElementById("reghint2").innerHTML="请输入邮箱！";exit(1);}
	if(regpassword=="********"||regpassword==""){document.getElementById("reghint3").innerHTML="请输入密码！";exit(1);}
    document.getElementById("reghint4").className="putong";
	document.getElementById("regbar").innerHTML="注册中...";

xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 }
//alert("go on"+newhero);

var url="register.php"
url=url+"?username="+regname+"&email="+regemail+"&password="+regpassword
url=url+"&sid="+Math.random()

xmlHttp.onreadystatechange=RegStateChanged()
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
login(2);
}


function UpdateStateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 {  
 alert(1);
 login(0);
 } 
}

function RegStateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 {
	 
 } 
}



function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}
// JavaScript Document

