<?php
session_start();              //一定要在这个页面最开始加上session_start();(一定要在第一行)
$username=$_GET["username"];
$password=$_GET["password"];
$x=$_GET["x"];


if($x==0||$x==2||$username=="USERNAME")        //from pageload or register
{

$username=$_SESSION['username'];
$password=$_SESSION['password'];
}

if($username==""||$username==null) 
{//if($x==2)echo 2;   //注册成功登陆不成功
//if($x==0)echo 0;    //刷新页面登陆不成功
}
else{

$link=mysql_connect("localhost","122499","325545200");
//if(!$link) echo "没有连接成功!";
//else echo "连接成功!";
mysql_select_db("122499", $link); //选择数据库
$sql ="Select * from sg_users where username='$username' and password='$password' limit 1";
   $query = mysql_query( $sql );
   
   if( mysql_num_rows( $query ) )
   {
        //session_start();
		$_SESSION['username']=$username;
        $_SESSION['password']=$password;
	
	$q = "SELECT * FROM sg_users where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs = mysql_query($q); //获取数据集
    if(!$rs){die("Valid result!");}
	$row = mysql_fetch_row($rs);
	
	$q0 = "SELECT * FROM sg_userdata where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs0 = mysql_query($q0); //获取数据集
    if(!$rs0){die("Valid result0!");}
	$row0 = mysql_fetch_row($rs0);
	
	$q1 = "SELECT * FROM sg_hero where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs1 = mysql_query($q1); //获取数据集
    if(!$rs1){die("Valid result1!");}
	$row1 = mysql_fetch_row($rs1);
	
	$q2 = "SELECT * FROM sg_gamedata where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs2 = mysql_query($q2); //获取数据集
    if(!$rs2){die("Valid result2!");}
	$row2 = mysql_fetch_row($rs2);
	
	$q3 = "SELECT * FROM sg_item where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs3 = mysql_query($q3); //获取数据集
    if(!$rs3){die("Valid result3!");}
	$row3 = mysql_fetch_row($rs3);
	
	$q4 = "SELECT * FROM sg_fightstage where lv = 1"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs4 = mysql_query($q4); //获取数据集
    if(!$rs4){die("Valid result4!");}
	$row4 = mysql_fetch_row($rs4);
	
	$q5 = "SELECT * FROM sg_fightuser where lv = 1"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs5 = mysql_query($q5); //获取数据集
    if(!$rs5){die("Valid result5!");}
	$row5 = mysql_fetch_row($rs5);
	
	$q6 = "SELECT * FROM sg_arm where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs6 = mysql_query($q6); //获取数据集
    if(!$rs6){die("Valid result6!");}
	$row6 = mysql_fetch_row($rs6);
	
	$q7 = "SELECT * FROM sg_zhaomu where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs7 = mysql_query($q7); //获取数据集
    if(!$rs7){die("Valid result7!");}
	$row7 = mysql_fetch_row($rs7);
	
	$q8 = "SELECT * FROM sg_xunbao where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs8 = mysql_query($q8); //获取数据集
    if(!$rs8){die("Valid result8!");}
	$row8 = mysql_fetch_row($rs8);
	
	$q9 = "SELECT * FROM sg_heroexp where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs9 = mysql_query($q9); //获取数据集
    if(!$rs9){die("Valid result9!");}
	$row9 = mysql_fetch_row($rs9);
	
	$q10 = "SELECT * FROM sg_heroarm where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs10 = mysql_query($q10); //获取数据集
    if(!$rs10){die("Valid result10!");}
	$row10 = mysql_fetch_row($rs10);
	
	$q11 = "SELECT * FROM sg_heroact where username = '$username'"; //SQL查询语句
    //echo $q;
    //mysql_query("SET NAMES UTF-8");
    $rs11 = mysql_query($q11); //获取数据集
    if(!$rs11){die("Valid result11!");}
	$row11 = mysql_fetch_row($rs11);
	

	$arr = array(
	
	    'gameid' => $row[0],
		'username' => $row[1],
		'email' => $row[2],
		'password' => $row[3],
		'sex' => $row[4],
		'regdate' => $row[5],
		'state' => $row[6],
		
		'vip' => $row0[2],
		'consume' => $row0[3],
		'qdian' => $row0[4],
		'level' => $row0[5],
		'exper' => $row0[6],
		'nation' => $row0[7],
		'money' => $row0[8],
		'fame' => $row0[9],
		'exprank' => $row0[10],
		
		'heronum' => $row1[2],
		'cqnum' => $row1[3],
		'ylnum' => $row1[4],
		'herorank' => $row1[5],
		'ability' => $row1[6],
		'attack' => $row1[7],
		
		'hero' => array(
		'hero1' => $row1[8],
		'hero2' => $row1[9],
		'hero3' => $row1[10],
		'hero4' => $row1[11],
		'hero5' => $row1[12],
		'hero6' => $row1[13],
		'hero7' => $row1[14],
		'hero8' => $row1[15],
		'hero9' => $row1[16],
		'hero10' => $row1[17],
		'hero11' => $row1[18],
		'hero12' => $row1[19]
		),
		

		'kptime' => $row2[2],
		'kprecord' => $row2[3],
		'qjtime' => $row2[4],
		'qjrecord' => $row2[5],
		'tdtime' => $row2[6],
		'tdrecord' => $row2[7],
		'fttime' => $row2[8],
		'ftrecord' => $row2[9],
		
		'itemnum' => $row3[2],
		'items' => array(
		'item1' => $row3[3],
		'item2' => $row3[4],
		'item3' => $row3[5],
		'item4' => $row3[6],
		'item5' => $row3[7],
		'item6' => $row3[8],
		'item7' => $row3[9],
		'item8' => $row3[10],
		'item9' => $row3[11],
		'item10' => $row3[12]
		),
		
		'fightstage' => array(
		'fightstage1' => $row4[1],
		'fightstage2' => $row4[2],
		'fightstage3' => $row4[3],
		'fightstage4' => $row4[4],
		'fightstage5' => $row4[5],
		'fightstage6' => $row4[6],
		'fightstage7' => $row4[7],
		'fightstage8' => $row4[8],
		'fightstage9' => $row4[9],
		'fightstage10' => $row4[10]
		),
		
		'fightuser' => array(
		'fightuser1' => $row5[1],
		'fightuser2' => $row5[2],
		'fightuser3' => $row5[3],
		'fightuser4' => $row5[4],
		'fightuser5' => $row5[5],
		'fightuser6' => $row5[6],
		'fightuser7' => $row5[7],
		'fightuser8' => $row5[8],
		'fightuser9' => $row5[9],
		'fightuser10' => $row5[10]
		),
		
		'armnum' => $row6[2],
		'arm' => array(
		'arm1' => $row6[3],
		'arm2' => $row6[4],
		'arm3' => $row6[5],
		'arm4' => $row6[6],
		'arm5' => $row6[7],
		'arm6' => $row6[8],
		'arm7' => $row6[9],
		'arm8' => $row6[10],
		'arm9' => $row6[11],
		'arm10' => $row6[12],
		'arm11' => $row6[13],
		'arm12' => $row6[14]
		),
		
		'zhaomu' => array(
		'zhaomu1' => $row7[2],
		'zhaomu2' => $row7[3],
		'zhaomu3' => $row7[4],
		'zhaomu4' => $row7[5],
		'zhaomu5' => $row7[6],
		'zhaomu6' => $row7[7]
		),
		
		'xunbao' => array(
		'xunbao1' => $row8[2],
		'xunbao2' => $row8[3],
		'xunbao3' => $row8[4],
		'xunbao4' => $row8[5],
		'xunbao5' => $row8[6],
		'xunbao6' => $row8[7]
		),
		
		'heroexp' => array(
		'heroexp1' => $row9[2],
		'heroexp2' => $row9[3],
		'heroexp3' => $row9[4],
		'heroexp4' => $row9[5],
		'heroexp5' => $row9[6],
		'heroexp6' => $row9[7],
		'heroexp7' => $row9[8],
		'heroexp8' => $row9[9],
		'heroexp9' => $row9[10],
		'heroexp10' => $row9[11],
		'heroexp11' => $row9[12],
		'heroexp12' => $row9[13]
		),
		
		'heroarm' => array(
		'heroarm1' => $row10[2],
		'heroarm2' => $row10[3],
		'heroarm3' => $row10[4],
		'heroarm4' => $row10[5],
		'heroarm5' => $row10[6],
		'heroarm6' => $row10[7],
		'heroarm7' => $row10[8],
		'heroarm8' => $row10[9],
		'heroarm9' => $row10[10],
		'heroarm10' => $row10[11],
		'heroarm11' => $row10[12],
		'heroarm12' => $row10[13]
		),
		
		'heroact' => array(
		'heroact1' => $row11[2],
		'heroact2' => $row11[3],
		'heroact3' => $row11[4],
		'heroact4' => $row11[5],
		'heroact5' => $row11[6],
		'heroact6' => $row11[7],
		'heroact7' => $row11[8],
		'heroact8' => $row11[9],
		'heroact9' => $row11[10],
		'heroact10' => $row11[11],
		'heroact11' => $row11[12],
		'heroact12' => $row11[13]
		)
		
		
		/*
		'contact' => array(
			'email' => 'gonnsai@163.com',
			'website' => 'http://www.nowamagic.net',
		)
		*/
	);
	
	$json_string = json_encode($arr);
	echo $json_string;
	
    mysql_free_result($rs); //关闭数据集
	mysql_free_result($rs1); //关闭数据集
	mysql_free_result($rs2); //关闭数据集
	mysql_free_result($rs3);
	mysql_free_result($rs4);
	mysql_free_result($rs5);
	mysql_free_result($rs6);
	mysql_free_result($rs7);
	mysql_free_result($rs8);
	mysql_free_result($rs9);
	mysql_free_result($rs10);
	mysql_free_result($rs11);
   }
   else
   {
    echo 1;       //登陆失败
   }

mysql_close($link);

}
?>
