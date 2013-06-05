<?php
$q=$_GET["q"];
$result=json_decode($q); 

    $username=$result->username; 
    $money=$result->money;
	$cost=$result->cost;
	
	$item1=$result->items->items1;
	$item2=$result->items->items2;
	$item3=$result->items->items3;
	$item4=$result->items->items4;
	$item5=$result->items->items5;
	$item6=$result->items->items6;
	$item7=$result->items->items7;
	$item8=$result->items->items8;
	$item9=$result->items->items9;
	$item10=$result->items->items10;
	
	$cqnum=$result->cqnum;
	$ylnum=$result->ylnum;
	$heronum=$result->heronum;
	$armnum=$result->armnum;
	$itemnum=$result->itemnum;
	
	$hero = array();
	$hero[1] = $result->hero->hero1;
	$hero[2] = $result->hero->hero2;
	$hero[3] = $result->hero->hero3;
	$hero[4] = $result->hero->hero4;
	$hero[5] = $result->hero->hero5;
	$hero[6] = $result->hero->hero6;
	$hero[7] = $result->hero->hero7;
	$hero[8] = $result->hero->hero8;
	$hero[9] = $result->hero->hero9;
	$hero[10] = $result->hero->hero10;
	$hero[11] = $result->hero->hero11;
	$hero[12] = $result->hero->hero12;

	
	$qjtime=$result->qjtime;
	$tdtime=$result->tdtime;
	$kptime=$result->kptime;
	$fttime=$result->fttime;
	$ftrecord=$result->ftrecord;
	$qjrecord=$result->qjrecord;
	$tdrecord=$result->tdrecord;
	$kprecord=$result->kprecord;
	
	$stageid=$result->stageid;
	$fighthero=$result->fighthero;
	$fightuser=$result->fightuser;
	
	$arm = array();
	$arm[1] = $result->arm->arm1;
	$arm[2] = $result->arm->arm2;
	$arm[3] = $result->arm->arm3;
	$arm[4] = $result->arm->arm4;
	$arm[5] = $result->arm->arm5;
	$arm[6] = $result->arm->arm6;
	$arm[7] = $result->arm->arm7;
	$arm[8] = $result->arm->arm8;
	$arm[9] = $result->arm->arm9;
	$arm[10] = $result->arm->arm10;
	$arm[11] = $result->arm->arm11;
	$arm[12] = $result->arm->arm12;
	
	$heroarm = array();
	$heroarm[1] = $result->heroarm->heroarm1;
	$heroarm[2] = $result->heroarm->heroarm2;
	$heroarm[3] = $result->heroarm->heroarm3;
	$heroarm[4] = $result->heroarm->heroarm4;
	$heroarm[5] = $result->heroarm->heroarm5;
	$heroarm[6] = $result->heroarm->heroarm6;
	$heroarm[7] = $result->heroarm->heroarm7;
	$heroarm[8] = $result->heroarm->heroarm8;
	$heroarm[9] = $result->heroarm->heroarm9;
	$heroarm[10] = $result->heroarm->heroarm10;
	$heroarm[11] = $result->heroarm->heroarm11;
	$heroarm[12] = $result->heroarm->heroarm12;
	
	$heroexp = array();
	$heroexp[1] = $result->heroexp->heroexp1;
	$heroexp[2] = $result->heroexp->heroexp2;
	$heroexp[3] = $result->heroexp->heroexp3;
	$heroexp[4] = $result->heroexp->heroexp4;
	$heroexp[5] = $result->heroexp->heroexp5;
	$heroexp[6] = $result->heroexp->heroexp6;
	$heroexp[7] = $result->heroexp->heroexp7;
	$heroexp[8] = $result->heroexp->heroexp8;
	$heroexp[9] = $result->heroexp->heroexp9;
	$heroexp[10] = $result->heroexp->heroexp10;
	$heroexp[11] = $result->heroexp->heroexp11;
	$heroexp[12] = $result->heroexp->heroexp12;
	
	$mystate = $result->mystate;
	$mystep = $result->mystep;
	$myattack = $result->myattack;
	$heroact = array();
	$heroact[1] = $result->heroact->heroact1;
	$heroact[2] = $result->heroact->heroact2;
	$heroact[3] = $result->heroact->heroact3;
	$heroact[4] = $result->heroact->heroact4;
	$heroact[5] = $result->heroact->heroact5;
	$heroact[6] = $result->heroact->heroact6;
	$heroact[7] = $result->heroact->heroact7;
	$heroact[8] = $result->heroact->heroact8;
	$heroact[9] = $result->heroact->heroact9;
	$heroact[10] = $result->heroact->heroact10;
	$heroact[11] = $result->heroact->heroact11;
	$heroact[12] = $result->heroact->heroact12;
	
	$zhaomu = array();
	$zhaomu1 = $result->zhaomu->zhaomu1;
	$zhaomu2 = $result->zhaomu->zhaomu2;
	$zhaomu3 = $result->zhaomu->zhaomu3;
	$zhaomu4 = $result->zhaomu->zhaomu4;
	$zhaomu5 = $result->zhaomu->zhaomu5;
	$zhaomu6 = $result->zhaomu->zhaomu6;

    $xunbao = array();
	$xunbao1 = $result->xunbao->xunbao1;
	$xunbao2 = $result->xunbao->xunbao2;
	$xunbao3 = $result->xunbao->xunbao3;
	$xunbao4 = $result->xunbao->xunbao4;
	$xunbao5 = $result->xunbao->xunbao5;
	$xunbao6 = $result->xunbao->xunbao6;

	//session_start();
    //$username=$_SESSION["temp"][0];
	
$link=mysql_connect("localhost","122499","325545200");
//if(!$link) echo "没有连接成功!";
//else echo "连接成功!";
mysql_select_db("122499", $link); //选择数据库

$query1 = "UPDATE sg_userdata SET money='$money',consume='$cost' WHERE username = '$username'"; //SQL查询语句
    if(!mysql_query($query1, $link))
    {
        die('Error: ' . mysql_error());
    }
$query3 = "UPDATE sg_gamedata SET kptimes='$kptime',qjtimes='$qjtime',tdtimes='$tdtime' WHERE username = '$username'"; //SQL查询语句
    if(!mysql_query($query3, $link))
    {
        die('Error: ' . mysql_error());
    }
	
$query4 = "UPDATE sg_item SET item1='$item1',item2='$item2',item3='$item3',item4='$item4',item5='$item5',item6='$item6' WHERE username = '$username'"; //SQL查询语句
    if(!mysql_query($query4, $link))
    {
        die('Error: ' . mysql_error());
    }
	
$query4 = "UPDATE sg_zhaomu SET zhaomu1='$zhaomu1',zhaomu2='$zhaomu2',zhaomu3='$zhaomu3',zhaomu4='$zhaomu4',zhaomu5='$zhaomu5',zhaomu6='$zhaomu6' WHERE username = '$username'"; //SQL查询语句
    if(!mysql_query($query4, $link))
    {
        die('Error: ' . mysql_error());
    }
	
$query4 = "UPDATE sg_xunbao SET xunbao1='$xunbao1',xunbao2='$xunbao2',xunbao3='$xunbao3',xunbao4='$xunbao4',xunbao5='$xunbao5',xunbao6='$xunbao6' WHERE username = '$username'"; //SQL查询语句
    if(!mysql_query($query4, $link))
    {
        die('Error: ' . mysql_error());
    }
	
	//sg_hero
	$j=0;
	
	for($i=1;$i<=$heronum;$i++){
		if($hero[$i]!=NULL){
			$temphero=$hero[$i];
			$j++;
			$query2 = "UPDATE sg_hero SET ylnum='$ylnum',cqnum='$cqnum',heronum='$heronum',hero{$j}='$temphero' WHERE username = '$username'";
			if(!mysql_query($query2, $link)){
                die('Error: ' . mysql_error());}
		}
	}
	
	
	//sg_pk
	$query2 = "UPDATE sg_pk SET state='$mystate',step='$mystep',heroact{$step}='$myattack' WHERE username = '$username'";
			if(!mysql_query($query2, $link)){
                die('Error: ' . mysql_error());}


		$query2 = "UPDATE sg_fightstage SET stage{$stageid}='$fighthero' WHERE lv = 1";
			if(!mysql_query($query2, $link)){
                die('Error: ' . mysql_error());}
		$query2 = "UPDATE sg_fightuser SET stage{$stageid}='$fightuser' WHERE lv = 1";
			if(!mysql_query($query2, $link)){
                die('Error: ' . mysql_error());}


mysql_close($link);
?>
