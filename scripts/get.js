//获取数据，更新页面
//处理login事件

var xmlHttp;
function createXMLHttpRequest() {
//var xmlHttp=null;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    return xmlHttp;
}

//根据页面下载数据
function download(page) {
    if (username == "USERNAME" || username == "") {
        message("提示", "网络连接异常，请主公重新登陆！");
        exit(1);
    }

    createXMLHttpRequest();
    try {
        var url = "php/download.php?username=" + username + "&page=" + page

        xmlHttp.onreadystatechange = downloadStateChange;
        xmlHttp.open("POST", url, true);//xmlHttp.open("GET", url, true); /*  url="json.php?cid="+id;*/
        xmlHttp.send(null); //xmlHttp.send(null);
    }
    catch (exception) {
        alert("xmlHttp Fail");
    }
}


//login主函数
function login(x)                   //x==1,from button;x==2,from register;x==0,from pageload;
{

    var username = document.getElementById("loginname").value;
    var password = document.getElementById("password").value;

    if (x == 1) {
        if (username == "USERNAME" || username == "") {
            document.getElementById("loginhint1").innerHTML = "请输入用户名！";
            exit(1);
        }
        if (password == "********" || password == "") {
            document.getElementById("loginhint2").innerHTML = "请输入密码！";
            exit(1);
        }
        //document.getElementById("loginhint3").st="putong";
        document.getElementById("loginhint3").innerHTML = "登陆中...";
    }

    createXMLHttpRequest();
    try {
        var url = "php/login.php"

        url = url + "?username=" + username + "&password=" + password + "&x=" + x
//url=url+"&sid="+Math.random()
        xmlHttp.onreadystatechange = loginStateChange;
        xmlHttp.open("POST", url, true);//xmlHttp.open("GET", url, true); /*  url="json.php?cid="+id;*/
        xmlHttp.send(null); //xmlHttp.send(null);
    }
    catch (exception) {
        alert("xmlHttp Fail");
    }
}

function loginStateChange() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200 || xmlHttp.status == 0) {

            var json = xmlHttp.responseText;
            //alert(json);

            if (json == 0) {
                refreshdata();
                document.getElementById("username").innerHTML = "主公还未登陆哦->";
                document.getElementById("footusername").innerHTML = "主公还未登陆哦->";
                exit(1);
            }
            else if (json == 2) {
                openpage('LoginPage');
                closepage('RegPage');
                document.getElementById("loginhint3").innerHTML = "恭喜主公注册成功，登陆吧亲！";
                exit(1);
            }
            else {

                if (json == 1) {
                    document.getElementById("loginhint3").innerHTML = "用户名或密码错误，请主公重新登陆";
                }
                else {

                    var result = eval("(" + json + ")");

//from sg_users
                    gameid = result.gameid
                    username = result.username
                    email = result.email
                    sex = result.sex
                    regdate = result.regdate
                    state = result.state

//from sg_userdata
                    vip = result.vip * 1
                    cost = result.consume * 1
                    qdian = result.qdian * 1
                    level = result.level * 1
                    exper = result.exper * 1
                    nation = result.nation * 1
                    money = result.money * 1
                    fame = result.fame * 1
                    rank = result.rank * 1

//from sg_hero
                    var i = 1;
                    if (result.hero.hero1)hero[i++] = result.hero.hero1
                    if (result.hero.hero2)hero[i++] = result.hero.hero2
                    if (result.hero.hero3)hero[i++] = result.hero.hero3
                    if (result.hero.hero4)hero[i++] = result.hero.hero4
                    if (result.hero.hero5)hero[i++] = result.hero.hero5
                    if (result.hero.hero6)hero[i++] = result.hero.hero6
                    if (result.hero.hero7)hero[i++] = result.hero.hero7
                    if (result.hero.hero8)hero[i++] = result.hero.hero8
                    if (result.hero.hero9)hero[i++] = result.hero.hero9
                    if (result.hero.hero10)hero[i++] = result.hero.hero10
                    if (result.hero.hero11)hero[i++] = result.hero.hero11
                    if (result.hero.hero12)hero[i++] = result.hero.hero12

                    heronum = result.heronum * 1
                    cqnum = result.cqnum * 1
                    herorank = result.herorank * 1
                    ylnum = result.ylnum * 1
                    attack = result.attack * 1
                    ability = result.ability * 1


//from sg_gamedata
                    qjtime = result.qjtime * 1;
                    qjrecord = result.qjrecord * 1
                    kptime = result.kptime * 1
                    kprecord = result.kprecord * 1
                    tdtime = result.tdtime * 1
                    tdrecord = result.tdrecord * 1
                    ftrecord = result.ftrecord * 1
                    fttime = result.fttime * 1


//from sg_item
                    items[1] = result.items.item1 * 1;
                    items[2] = result.items.item2 * 1;
                    items[3] = result.items.item3 * 1;
                    items[4] = result.items.item4 * 1;
                    items[5] = result.items.item5 * 1;
                    items[6] = result.items.item6 * 1;
                    items[7] = result.items.item7 * 1;
                    items[8] = result.items.item8 * 1;
                    items[9] = result.items.item9 * 1;
                    items[10] = result.items.item10 * 1;
                    itemnum = result.itemnum * 1;

                    //from sg_arm
                    arm[1] = result.arm.arm1 * 1;
                    arm[2] = result.arm.arm2 * 1;
                    arm[3] = result.arm.arm3 * 1;
                    arm[4] = result.arm.arm4 * 1;
                    arm[5] = result.arm.arm5 * 1;
                    arm[6] = result.arm.arm6 * 1;
                    arm[7] = result.arm.arm7 * 1;
                    arm[8] = result.arm.arm8 * 1;
                    arm[9] = result.arm.arm9 * 1;
                    arm[10] = result.arm.arm10 * 1;
                    arm[11] = result.arm.arm11 * 1;
                    arm[12] = result.arm.arm12 * 1;
                    armnum = result.armnum * 1;

                    //from sg_fightstage
                    fightstage[1] = result.fightstage.fightstage1;
                    fightstage[2] = result.fightstage.fightstage2;
                    fightstage[3] = result.fightstage.fightstage3;
                    fightstage[4] = result.fightstage.fightstage4;
                    fightstage[5] = result.fightstage.fightstage5;
                    fightstage[6] = result.fightstage.fightstage6;
                    fightstage[7] = result.fightstage.fightstage7;
                    fightstage[8] = result.fightstage.fightstage8;
                    fightstage[9] = result.fightstage.fightstage9;
                    fightstage[10] = result.fightstage.fightstage10;


                    //from sg_fightuser
                    fightuser[1] = result.fightuser.fightuser1;
                    fightuser[2] = result.fightuser.fightuser2;
                    fightuser[3] = result.fightuser.fightuser3;
                    fightuser[4] = result.fightuser.fightuser4;
                    fightuser[5] = result.fightuser.fightuser5;
                    fightuser[6] = result.fightuser.fightuser6;
                    fightuser[7] = result.fightuser.fightuser7;
                    fightuser[8] = result.fightuser.fightuser8;
                    fightuser[9] = result.fightuser.fightuser9;
                    fightuser[10] = result.fightuser.fightuser10;

                    //from sg_xunbao
                    xunbao[1] = result.xunbao.xunbao1 * 1;
                    xunbao[2] = result.xunbao.xunbao2 * 1;
                    xunbao[3] = result.xunbao.xunbao3 * 1;
                    xunbao[4] = result.xunbao.xunbao4 * 1;
                    xunbao[5] = result.xunbao.xunbao5 * 1;
                    xunbao[6] = result.xunbao.xunbao6 * 1;

                    //from sg_zhaomu
                    zhaomu[1] = result.zhaomu.zhaomu1 * 1;
                    zhaomu[2] = result.zhaomu.zhaomu2 * 1;
                    zhaomu[3] = result.zhaomu.zhaomu3 * 1;
                    zhaomu[4] = result.zhaomu.zhaomu4 * 1;
                    zhaomu[5] = result.zhaomu.zhaomu5 * 1;
                    zhaomu[6] = result.zhaomu.zhaomu6 * 1;

                    //from sg_heroexp
                    heroexp[1] = result.heroexp.heroexp1 * 1;
                    heroexp[2] = result.heroexp.heroexp2 * 1;
                    heroexp[3] = result.heroexp.heroexp3 * 1;
                    heroexp[4] = result.heroexp.heroexp4 * 1;
                    heroexp[5] = result.heroexp.heroexp5 * 1;
                    heroexp[6] = result.heroexp.heroexp6 * 1;
                    heroexp[7] = result.heroexp.heroexp7 * 1;
                    heroexp[8] = result.heroexp.heroexp8 * 1;
                    heroexp[9] = result.heroexp.heroexp9 * 1;
                    heroexp[10] = result.heroexp.heroexp10 * 1;
                    heroexp[11] = result.heroexp.heroexp11 * 1;
                    heroexp[12] = result.heroexp.heroexp12 * 1;

                    //from sg_heroarm
                    heroarm[1] = result.heroarm.heroarm1 * 1;
                    heroarm[2] = result.heroarm.heroarm2 * 1;
                    heroarm[3] = result.heroarm.heroarm3 * 1;
                    heroarm[4] = result.heroarm.heroarm4 * 1;
                    heroarm[5] = result.heroarm.heroarm5 * 1;
                    heroarm[6] = result.heroarm.heroarm6 * 1;
                    heroarm[7] = result.heroarm.heroarm7 * 1;
                    heroarm[8] = result.heroarm.heroarm8 * 1;
                    heroarm[9] = result.heroarm.heroarm9 * 1;
                    heroarm[10] = result.heroarm.heroarm10 * 1;
                    heroarm[11] = result.heroarm.heroarm11 * 1;
                    heroarm[12] = result.heroarm.heroarm12 * 1;

                    //from sg_heroact
                    heroact[1] = result.heroact.heroact1 * 1;
                    heroact[2] = result.heroact.heroact2 * 1;
                    heroact[3] = result.heroact.heroact3 * 1;
                    heroact[4] = result.heroact.heroact4 * 1;
                    heroact[5] = result.heroact.heroact5 * 1;
                    heroact[6] = result.heroact.heroact6 * 1;
                    heroact[7] = result.heroact.heroact7 * 1;
                    heroact[8] = result.heroact.heroact8 * 1;
                    heroact[9] = result.heroact.heroact9 * 1;
                    heroact[10] = result.heroact.heroact10 * 1;
                    heroact[11] = result.heroact.heroact11 * 1;
                    heroact[12] = result.heroact.heroact12 * 1;

                    checklogin()
                }
            }
        }
    }
}

function inputchange(x) {
    if (document.getElementById(x).value == "USERNAME" || document.getElementById(x).value == "********" || document.getElementById(x).value == "邮箱(abc@abc.com)") {
        document.getElementById(x).value = "";
        document.getElementById(x).style.color = "000";
    }

    document.getElementById("loginhint1") = "";
    document.getElementById("loginhint2") = "";
    document.getElementById("loginhint3") = "";
    document.getElementById("reghint1") = "";
    document.getElementById("reghint2") = "";
    document.getElementById("reghint3") = "";
    document.getElementById("reghint4") = "";
}


function checklogin() {
    //alert(username);
    if (username != null && username != "") {
        document.getElementById("logindiv").innerHTML = "Logout";
        document.getElementById("logindiv").href = "php/logout.php";
        document.getElementById("LoginPage").style.display = "none";
        document.getElementById("RegPage").style.display = "none";
    }
    refreshdata()
    //else alert("主公你终于来了！您可以在本页面进行试玩，登录到账户后有更多精彩等着你哦亲！");
}


//更新显示页面数据
function refreshdata() {

    document.getElementById("username").innerHTML = username;
    document.getElementById("footusername").innerHTML = username;
    document.getElementById('money').innerHTML = money;
    document.getElementById('cost').innerHTML = cost;
    document.getElementById('num1').innerHTML = items[1];
    document.getElementById('num2').innerHTML = items[2];
    document.getElementById('num3').innerHTML = items[3];
    document.getElementById('num4').innerHTML = items[4];
    document.getElementById('num5').innerHTML = items[5];
    document.getElementById('num6').innerHTML = items[6];
    document.getElementById('chuanqi').innerHTML = cqnum;
    document.getElementById('yiliu').innerHTML = ylnum;
    document.getElementById("kp").innerHTML = kptime;
    document.getElementById("td").innerHTML = tdtime;
    document.getElementById("qj").innerHTML = qjtime;

    for (i = 1; i <= heronum; i++) {
        //alert(i);
        document.getElementById("mywj" + i).src = "pic/wjpic/" + id(hero[i]) + ".jpg";
        document.getElementById("wj" + i).innerHTML = xmlDoc.getElementsByTagName("name")[id(hero[i])].childNodes[0].nodeValue + " 能力：" + xmlDoc.getElementsByTagName("ability")[id(hero[i])].childNodes[0].nodeValue;
    }

    //恢复酒馆现场
    for (i = 1; i <= 6; i++) {
        if (zhaomu[i]) {
            document.getElementById("pic" + i).src = "pic/wjpic/" + lv(zhaomu[i]) + ".jpg";
            document.getElementById("bigpic" + i).src = "pic/wjpic/" + lv(zhaomu[i]) + ".jpg";
            document.getElementById("myAnchor" + i).innerHTML = xmlDoc.getElementsByTagName("name")[lv(zhaomu[i])].childNodes[0].nodeValue + " 能力：" + xmlDoc.getElementsByTagName("ability")[lv(zhaomu[i])].childNodes[0].nodeValue;
            if (zhaomu[i] < 10000) {
                document.getElementById("guyong" + i).disabled = true;
            }
            else document.getElementById("guyong" + i).disabled = false;
            switch (xmlDoc.getElementsByTagName("class")[lv(zhaomu[i])].childNodes[0].nodeValue) {
                case '0':
                    document.getElementById("myAnchor" + i).style.color = "#FFD306";
                    break;
                case '1':
                    document.getElementById("myAnchor" + i).style.color = "#CE0000";
                    break;
                case '2':
                    document.getElementById("myAnchor" + i).style.color = "#0000C6";
                    break;
                case '3':
                    document.getElementById("myAnchor" + i).style.color = "#009100";
                    break;
                case '4':
                    document.getElementById("myAnchor" + i).style.color = "#fff";
                    break;
            }
        }
    }

    //恢复寻宝现场
    for (i = 1; i <= 6; i++) {
        if (xunbao[i] != null) {
            document.getElementById("itempic" + i).src = "pic/item/" + xunbao[i] + ".png";
            document.getElementById("bigitempic" + i).href = "pic/item/" + xunbao[i] + ".png";
        }
    }
}


function downloadStateChange() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200 || xmlHttp.status == 0) {
            var json = xmlHttp.responseText;
            //alert(json);

            if (json == 0) {
                message("提示", "网络连接异常，请主公检查网络连接！");
                exit(1);
            }
            else if (json == 1) {
                message("提示", "用户名不存在，请主公检查账户信息！");
                exit(1);
            }
            else {

                var result = eval("(" + json + ")");
                var page = result.page;
                //alert(page);
                switch (page) {
                    case 'HomePage':
//from sg_userdata
                        vip = result.vip * 1
                        consume = result.consume * 1
                        qdian = result.qdian * 1
                        level = result.level * 1
                        exper = result.exper * 1
                        nation = result.nation * 1
                        money = result.money * 1
                        fame = result.fame * 1
                        rank = result.rank * 1
                        cost = consume
                        document.getElementById("username").innerHTML = username;
                        document.getElementById("footusername").innerHTML = username;
                        document.getElementById('money').innerHTML = money;
                        document.getElementById('cost').innerHTML = cost;
                        break;
                    case 'HeroPage':
//from sg_hero
                        var i = 1;
                        if (result.hero.hero1)hero[i++] = result.hero.hero1
                        if (result.hero.hero2)hero[i++] = result.hero.hero2
                        if (result.hero.hero3)hero[i++] = result.hero.hero3
                        if (result.hero.hero4)hero[i++] = result.hero.hero4
                        if (result.hero.hero5)hero[i++] = result.hero.hero5
                        if (result.hero.hero6)hero[i++] = result.hero.hero6
                        if (result.hero.hero7)hero[i++] = result.hero.hero7
                        if (result.hero.hero8)hero[i++] = result.hero.hero8
                        if (result.hero.hero9)hero[i++] = result.hero.hero9
                        if (result.hero.hero10)hero[i++] = result.hero.hero10
                        if (result.hero.hero11)hero[i++] = result.hero.hero11
                        if (result.hero.hero12)hero[i++] = result.hero.hero12

                        heronum = result.heronum * 1;
                        cqnum = result.cqnum * 1;
                        herorank = result.herorank * 1
                        ylnum = result.ylnum * 1
                        attack = result.attack * 1
                        ability = result.ability * 1
                        chuanqi = cqnum
                        yiliu = ylnum
                        for (i = 1; i <= heronum; i++) {
                            //alert(i);
                            document.getElementById("mywj" + i).src = "pic/wjpic/" + id(hero[i]) + ".jpg";
                            document.getElementById("wj" + i).innerHTML = xmlDoc.getElementsByTagName("name")[id(hero[i])].childNodes[0].nodeValue + " 能力：" + xmlDoc.getElementsByTagName("ability")[id(hero[i])].childNodes[0].nodeValue;

                        }
                        break;
                    case 'page_Portfolio':

                        break;
                    case 'GamePage':
//from sg_gamedata
                        qjtime = result.qjtime * 1;
                        qjrecord = result.qjrecord * 1
                        kptime = result.kptime * 1;
                        kprecord = result.kprecord * 1
                        tdtime = result.tdtime * 1;
                        tdrecord = result.tdrecord * 1
                        ftrecord = result.ftrecord * 1
                        fttime = result.fttime * 1

                        //from sg_fightstage
                        fightstage[1] = result.fightstage.fightstage1;
                        fightstage[2] = result.fightstage.fightstage2;
                        fightstage[3] = result.fightstage.fightstage3;
                        fightstage[4] = result.fightstage.fightstage4;
                        fightstage[5] = result.fightstage.fightstage5;
                        fightstage[6] = result.fightstage.fightstage6;
                        fightstage[7] = result.fightstage.fightstage7;
                        fightstage[8] = result.fightstage.fightstage8;
                        fightstage[9] = result.fightstage.fightstage9;
                        fightstage[10] = result.fightstage.fightstage10;


                        //from sg_fightuser
                        fightuser[1] = result.fightuser.fightuser1;
                        fightuser[2] = result.fightuser.fightuser2;
                        fightuser[3] = result.fightuser.fightuser3;
                        fightuser[4] = result.fightuser.fightuser4;
                        fightuser[5] = result.fightuser.fightuser5;
                        fightuser[6] = result.fightuser.fightuser6;
                        fightuser[7] = result.fightuser.fightuser7;
                        fightuser[8] = result.fightuser.fightuser8;
                        fightuser[9] = result.fightuser.fightuser9;
                        fightuser[10] = result.fightuser.fightuser10;

                        document.getElementById("kp").innerHTML = kptime;
                        document.getElementById("td").innerHTML = tdtime;
                        document.getElementById("qj").innerHTML = qjtime;

                        break;
                    case 'ItemPage':
//from sg_item
                        items[1] = result.items.item1 * 1;
                        items[2] = result.items.item2 * 1;
                        items[3] = result.items.item3 * 1;
                        items[4] = result.items.item4 * 1;
                        items[5] = result.items.item5 * 1;
                        items[6] = result.items.item6 * 1;
                        items[7] = result.items.item7 * 1;
                        items[8] = result.items.item8 * 1;
                        items[9] = result.items.item9 * 1;
                        items[10] = result.items.item10 * 1;
                        itemnum = result.itemnum * 1;

                        document.getElementById('num1').innerHTML = items[1];
                        document.getElementById('num2').innerHTML = items[2];
                        document.getElementById('num3').innerHTML = items[3];
                        break;
                }
            }
        }
    }
}
