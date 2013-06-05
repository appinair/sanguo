<?php
session_start();
$username=$_GET["username"];
$password=$_GET["password"];
$email=$_GET["email"];
//$date = date('Y-m-d H:i:s');
	
	//session_start();
    //$username=$_SESSION["temp"][0];
	
    $_SESSION['username']=$username;
	$_SESSION['password']=$password;
	
$link=mysql_connect("localhost","122499","325545200");
if(!$link) echo "没有连接成功!";
else echo "连接成功!";
mysql_select_db("122499", $link); //选择数据库

 $q1 = "INSERT INTO sg_users (username,email,password,state) values('$username','$email','$password',1);"; //SQL查询语句
    if(!mysql_query($q1, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	
	$q2 = "INSERT INTO sg_hero (username,heronum,cqnum,ylnum,ability,attack,rank,hero1) values('$username',1,0,0,340,70,0,00000001);"; //SQL查询语句
    if(!mysql_query($q2, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
    
	$q3 = "INSERT INTO sg_gamedata (username,qjtimes,qjrecord,tdtimes,tdrecord,kptimes,kprecord,fttimes,ftrecord) values('$username',3,0,3,0,3,0,3,0);"; //SQL查询语句
    if(!mysql_query($q3, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	
	$q4 = "INSERT INTO sg_userdata (username,vip,consume,qdian,level,exp,money,fame,rank) values('$username',0,0,100,1,0,1000,0,0);"; //SQL查询语句
    if(!mysql_query($q4, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	
	$q5 = "INSERT INTO sg_item (username,itemnum,item1,item2,item3,item4,item5,item6) values('$username',6,00010010,00020005,00030000,00010010,00020005,00030000);"; //SQL查询语句
    if(!mysql_query($q5, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
    $q6 = "INSERT INTO sg_arm (username,armnum) values('$username',0);"; //SQL查询语句
    if(!mysql_query($q6, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	$q7 = "INSERT INTO sg_heroact (username) values('$username');"; //SQL查询语句
    if(!mysql_query($q7, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	$q8 = "INSERT INTO sg_heroarm (username) values('$username');"; //SQL查询语句
    if(!mysql_query($q8, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	$q9 = "INSERT INTO sg_heroexp (username) values('$username');"; //SQL查询语句
    if(!mysql_query($q9, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	$q10 = "INSERT INTO sg_xunbao (username) values('$username');"; //SQL查询语句
    if(!mysql_query($q10, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
	$q11 = "INSERT INTO sg_zhaomu (username) values('$username');"; //SQL查询语句
    if(!mysql_query($q11, $link))
    {
        die('Error: ' . mysql_error());
    }else echo "创建成功";
mysql_close($link);
?>
