<?php
$username = $_GET["username"];
$page = $_GET["page"];

$link = mysql_connect("localhost", "122499", "325545200");
if (!$link) echo 0;         //连接失败
//else echo "连接成功!";
mysql_select_db("122499", $link); //选择数据库

$sql = "Select * from sg_users where username='$username' limit 1";
$query = mysql_query($sql);

if (mysql_num_rows($query)) {

    switch ($page) {
        case 'HomePage':
            $q = "SELECT * FROM sg_userdata where username = '$username'"; //SQL查询语句
            $rs = mysql_query($q); //获取数据集
            if (!$rs) {
                die("Valid result!");
            }
            $row = mysql_fetch_row($rs);
            $arr = array(
                'page' => $page,
                'vip' => $row[2],
                'consume' => $row[3],
                'qdian' => $row[4],
                'level' => $row[5],
                'exper' => $row[6],
                'nation' => $row[7],
                'money' => $row[8],
                'fame' => $row[9],
                'exprank' => $row[10]);
            break;
        case 'HeroPage':
            $q = "SELECT * FROM sg_hero where username = '$username'"; //SQL查询语句
            $rs = mysql_query($q); //获取数据集
            if (!$rs) {
                die("Valid result!");
            }
            $row = mysql_fetch_row($rs);
            $arr = array(
                'page' => $page,
                'heronum' => $row[2],
                'cqnum' => $row[3],
                'ylnum' => $row[4],
                'herorank' => $row[5],
                'ability' => $row[6],
                'attack' => $row[7],

                'hero' => array(
                    'hero1' => $row[8],
                    'hero2' => $row[9],
                    'hero3' => $row[10],
                    'hero4' => $row[11],
                    'hero5' => $row[12],
                    'hero6' => $row[13],
                    'hero7' => $row[14],
                    'hero8' => $row[15],
                    'hero9' => $row[16],
                    'hero10' => $row[17],
                    'hero11' => $row[18],
                    'hero12' => $row[19]
                ));
            break;
        case 'page_Portfolio':
            //$q = "SELECT * FROM sg_pub where username = '$username'"; //SQL查询语句
            //$rs = mysql_query($q); //获取数据集
            //if(!$rs){die("Valid result!");}
            //$row = mysql_fetch_row($rs);
            //............
            break;
        case 'GamePage':
            $q = "SELECT * FROM sg_gamedata where username = '$username'"; //SQL查询语句
            $rs = mysql_query($q); //获取数据集
            if (!$rs) {
                die("Valid result!");
            }
            $row = mysql_fetch_row($rs);
            $q = "SELECT * FROM sg_fightstage where lv = 1"; //SQL查询语句
            $rs = mysql_query($q); //获取数据集
            if (!$rs) {
                die("Valid result!");
            }
            $row1 = mysql_fetch_row($rs);
            $q = "SELECT * FROM sg_fightuser where lv = 1"; //SQL查询语句
            $rs = mysql_query($q); //获取数据集
            if (!$rs) {
                die("Valid result!");
            }
            $row2 = mysql_fetch_row($rs);
            $arr = array(
                'page' => $page,
                'kptime' => $row[2],
                'kprecord' => $row[3],
                'qjtime' => $row[4],
                'qjrecord' => $row[5],
                'tdtime' => $row[6],
                'tdrecord' => $row[7],
                'fttime' => $row[8],
                'ftrecord' => $row[9],

                'fightstage' => array(
                    'fightstage1' => $row1[1],
                    'fightstage2' => $row1[2],
                    'fightstage3' => $row1[3],
                    'fightstage4' => $row1[4],
                    'fightstage5' => $row1[5],
                    'fightstage6' => $row1[6],
                    'fightstage7' => $row1[7],
                    'fightstage8' => $row1[8],
                    'fightstage9' => $row1[9],
                    'fightstage10' => $row1[10]
                ),

                'fightuser' => array(
                    'fightuser1' => $row2[1],
                    'fightuser2' => $row2[2],
                    'fightuser3' => $row2[3],
                    'fightuser4' => $row2[4],
                    'fightuser5' => $row2[5],
                    'fightuser6' => $row2[6],
                    'fightuser7' => $row2[7],
                    'fightuser8' => $row2[8],
                    'fightuser9' => $row2[9],
                    'fightuser10' => $row2[10]
                ));
            break;
        case 'ItemPage':
            $q = "SELECT * FROM sg_item where username = '$username'"; //SQL查询语句
            $rs = mysql_query($q); //获取数据集
            if (!$rs) {
                die("Valid result!");
            }
            $row = mysql_fetch_row($rs);
            $arr = array(
                'page' => $page,
                'itemnum' => $row[2],
                'items' => array(
                    'item1' => $row[3],
                    'item2' => $row[4],
                    'item3' => $row[5],
                    'item4' => $row[6],
                    'item5' => $row[7],
                    'item6' => $row[8],
                    'item7' => $row[9],
                    'item8' => $row[10],
                    'item9' => $row[11],
                    'item10' => $row[12]
                ));
            break;
    }

    $json_string = json_encode($arr);
    echo $json_string;

    mysql_free_result($rs); //关闭数据集
} else {
    echo 1;       //用户名不存在
}

mysql_close($link);

?>
