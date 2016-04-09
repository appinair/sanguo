var money = 100;
var cost = 0;
var username = null;

var heronum = 1;
var itemnum = 6;
var armnum = 0;
//from sg_hero
var cqnum = 0;
var ylnum = 0;

//from sg_gamedata
var qjtime = 3;
var kptime = 3;
var tdtime = 3;
var fttime = 3;
var qjrecord = 0;
var kprecord = 0;
var tdrecord = 0;
var ftrecord = 0;

var hero = new Array();
var items = new Array();
var arm = new Array();
var zhaomu = new Array();
var xunbao = new Array();
var heroexp = new Array();
var heroarm = new Array();
var heroact = new Array();
var fightstage = new Array();
var fightuser = new Array();
var selectedhero;
var stageid;
var enemy;
var enemyuser;

var mystate = 0;
var mystep = 0;
var enemystate = 0;
var enemystep = 0;
var myattack = 0;
var enemyattack = 0;
var pvpdata = new Object();

//XML配适
if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
}
else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "data/wjdata/Total.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var step = 0;
function tutor() {
    step++;

    switch (step) {
        case 1:
            document.getElementById('maskscreen').style.display = "block";
            document.getElementById('tutorscreen').style.display = "none";
            document.getElementById('masktext').innerHTML = "哦，对了，主公你现在还不能见我姐姐，我姐姐虽然色，但却是天姿国色，对男人要求很高的，主公你现在光棍儿司令一个，还是先找几个帮手吧~";
            document.getElementById('maskact').innerHTML = "但是去哪找帮手呢？";
            break;
        case 2:
            document.getElementById('masktext').innerHTML = "主公要招募武将就得去酒馆，那里人来人往，常有能人在酒馆里吃喝玩乐，主公可以点击酒馆纳贤进入酒馆";
            document.getElementById('maskact').innerHTML = "好，这就去招募！";
            break;
        case 3:
            document.getElementById('maskscreen').style.display = "none";
            document.getElementById('tutorscreen').style.display = "block";
            document.getElementById('tutordiv').style.top = "400px";
            document.getElementById('tutordiv').style.left = "180px";
            document.getElementById('tutorbox').style.width = "180px";
            document.getElementById('tutorbox').style.height = "180px";
            document.getElementById('tutora').href = "#!/page_Portfolio";
            tutora.onclick = function () {
                tutor();
            }
            //document.getElementById('maskscreen').style.display="none";
            break;
        case 4:
            document.getElementById('tutordiv').style.top = "40px";
            document.getElementById('tutordiv').style.left = "550px";

            document.getElementById('tutora').href = "#";
            tutora.onclick = function () {
                chujizhaomo();
                tutor();
            };
            break;
        case 5:
            document.getElementById('maskscreen').style.display = "block";
            document.getElementById('tutorscreen').style.display = "none";
            document.getElementById('masktext').innerHTML = "主公刚刚成功使用初级招募令找到两名武将，但是初级招募来的武将都不是厉害，主公可以试试中级招募。";
            document.getElementById('maskact').innerHTML = "好，这就去试试！";
            break;
        case 6:
            //alert(1);
            document.getElementById('tutorscreen').style.display = "block";
            document.getElementById('maskscreen').style.display = "none";
            //document.getElementById('tutorscreen').style.display="block";
            document.getElementById('tutordiv').style.top = "120px";
            document.getElementById('tutordiv').style.left = "550px";
            document.getElementById('tutora').href = "#";
            tutora.onclick = function () {
                zhongjizhaomo();
                tutor();
            }
            //document.getElementById('maskscreen').style.display="none";
            break;
        default:
            document.getElementById('maskscreen').style.display = "none";
            document.getElementById('tutorscreen').style.display = "none";
    }
}

function id(x) {
    var y = parseInt(x / 10000);
    return y;
}

function lv(x) {
    var y = parseInt(x % 10000);
    return y;
}

function encode(a, b) {
    var y = a * 10000 + b;
    return y;
}

//Fight Games
function herolife1() {

    return xmlDoc.getElementsByTagName("leadship")[selectedhero].childNodes[0].nodeValue / 50;

}

function heroattack1() {
    if (Math.random(1, 200) < xmlDoc.getElementsByTagName("iq")[selectedhero].childNodes[0].nodeValue)
        return xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue * 2 / 50;
    else return xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue * 1 / 50;

}

function herolife2() {
    return xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue / 50;
}

function heroattack2() {
    if (Math.random(1, 200) < xmlDoc.getElementsByTagName("iq")[enemy].childNodes[0].nodeValue)
        return xmlDoc.getElementsByTagName("force")[enemy].childNodes[0].nodeValue / 50 * 2;
    else return xmlDoc.getElementsByTagName("force")[enemy].childNodes[0].nodeValue / 50 * 1;
}

function heroname1() {
    return xmlDoc.getElementsByTagName("name")[selectedhero].childNodes[0].nodeValue;
}

function heroname2() {
    return xmlDoc.getElementsByTagName("name")[enemy].childNodes[0].nodeValue;
}


function selecthero(x) {

    document.getElementById("mywj0" + x).style.borderColor = "#F90";
    document.getElementById("mywj0" + x).style.borderStyle = "solid";
    for (i = 1; i <= heronum; i++) {
        if (i == x)
            document.getElementById("mywj0" + i).style.borderWidth = "3px";
        else document.getElementById("mywj0" + i).style.borderWidth = "0px";
    }
    selectedhero = id(hero[x]);
}

function showselecthero() {
    selectedhero = -1;
    closepage("StageActPage");
    openpage("HeroSelectPage");
    for (i = 1; i <= heronum; i++)document.getElementById("mywj0" + i).style.borderWidth = "0px";
    x = document.documentElement.scrollLeft + event.clientX - 760; //获取当前鼠标位置的X坐标
    y = document.documentElement.scrollTop + event.clientY - 480; //获取当前鼠标位置的Y坐标
    document.getElementById("HeroSelectPage").style.left = x + "px";
    document.getElementById("HeroSelectPage").style.top = y + "px";
    document.getElementById("HeroSelectPage").style.zIndex = 99;
    document.getElementById("HeroSelectPage").style.width = "110%";
    document.getElementById("HeroSelectPage").style.height = "180%";

    for (i = 1; i <= heronum; i++) {
        document.getElementById("mywj0" + i).src = "pic/wjpic/" + id(hero[i]) + ".jpg";
        document.getElementById("wj0" + i).innerHTML = xmlDoc.getElementsByTagName("name")[id(hero[i])].childNodes[0].nodeValue + " 能力：" + xmlDoc.getElementsByTagName("ability")[id(hero[i])].childNodes[0].nodeValue;
    }
    document.getElementById("startpk").onclick = function () {
        pk();
    }
}

function zhencha() {
    closepage("StageActPage");
    openpage("StageInfoPage");
    x = document.documentElement.scrollLeft + event.clientX - 560; //获取当前鼠标位置的X坐标
    y = document.documentElement.scrollTop + event.clientY - 480; //获取当前鼠标位置的Y坐标
    document.getElementById("StageInfoPage").style.left = x + "px";
    document.getElementById("StageInfoPage").style.top = y + "px";
    document.getElementById("StageInfoPage").style.zIndex = 100;
    document.getElementById("StageInfoPage").style.width = "80%";
    document.getElementById("StageInfoPage").style.height = "100%";
    if (enemy != null) {
        document.getElementById("enemypic").src = "pic/wjpic/" + enemy + ".jpg";
        document.getElementById("enemyuser").innerHTML = fightuser[stageid];
        document.getElementById("enemyhero").innerHTML = "<p>" + xmlDoc.getElementsByTagName("name")[enemy].childNodes[0].nodeValue + "</p>" + "<p>能力：" + xmlDoc.getElementsByTagName("ability")[enemy].childNodes[0].nodeValue + "</p>" + "<p>统率：" + xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue + "</p>" + "<p>武力：" + xmlDoc.getElementsByTagName("force")[enemy].childNodes[0].nodeValue + "</p>" + "<p>智力：" + xmlDoc.getElementsByTagName("iq")[enemy].childNodes[0].nodeValue + "</p>";
    } else {
        document.getElementById("enemypic").src = "pic/closed.png";
        document.getElementById("enemyuser").innerHTML = "空闲";
        document.getElementById("enemyhero").innerHTML = "可占领";
    }

}

function showstageinfo(z) {
    update();
    openpage("StageInfoPage");
    x = document.documentElement.scrollLeft + event.clientX - 480; //获取当前鼠标位置的X坐标
    y = document.documentElement.scrollTop + event.clientY - 380; //获取当前鼠标位置的Y坐标
    document.getElementById("StageInfoPage").style.left = x + "px";
    document.getElementById("StageInfoPage").style.top = y + "px";
    document.getElementById("StageInfoPage").style.zIndex = 100;
    document.getElementById("StageInfoPage").style.width = "50%";
    document.getElementById("StageInfoPage").style.height = "50%";
    if (fightstage[z] != null) {
        document.getElementById("enemypic").src = "pic/wjpic/" + id(fightstage[z]) + ".jpg";
        document.getElementById("enemyuser").innerHTML = fightuser[z];
        document.getElementById("enemyhero").innerHTML = xmlDoc.getElementsByTagName("name")[id(fightstage[z])].childNodes[0].nodeValue;
    } else {
        document.getElementById("enemypic").src = "pic/closed.png";
        document.getElementById("enemyuser").innerHTML = "空闲";
        document.getElementById("enemyhero").innerHTML = "可占领";
    }
}


function showstageact(z) {
    stageid = z;
    enemy = id(fightstage[z]);
    enemyuser = fightuser[z];
    openpage("StageActPage");
    closepage("StageInfoPage");
    x = document.documentElement.scrollLeft + event.clientX - 480; //获取当前鼠标位置的X坐标
    y = document.documentElement.scrollTop + event.clientY - 380; //获取当前鼠标位置的Y坐标
    document.getElementById("StageActPage").style.left = x + "px";
    document.getElementById("StageActPage").style.top = y + "px";
    document.getElementById("StageActPage").style.zIndex = 99;
    document.getElementById("StageActPage").style.width = "80%";
    document.getElementById("StageActPage").style.height = "40%";
}


function fightover(x) {
    if (x == 0) {
        alert("主公，我输了，再给我一次机会，让我将战斗进行到底吧！");
    }
    if (x == 1) {
        fightuser[stageid] = username;
        fightstage[stageid] = encode(selectedhero, 1);
        update();
        alert("哦也，赢得就是这么飘柔~");
    }

}


//游戏得分
function gamebonus(x) {
    alert("游戏已结束，你获得Q点：" + x);
    money += x;
    document.getElementById("money").innerHTML = money;
    update();
}


function fight() {
    closepage("HeroSelectPage");
    if (selectedhero == -1) {
        alert("请主公选择武将");
        exit(1);
    }

    if (username == null && fttime > 2)fttime = 3;
    if (fttime > 0) {
        fttime--;
        window.open('games/fight/index.html', 'newwindow', 'height=490,width=900,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no')
    }
    else alert("今日三国擂台游戏次数已达到上限，请主公明日再战吧！");
    //document.getElementById("td").innerHTML=fttime;
    update();
}

//新版武将PK
var pklife1;
var pklife2;

function pk() {
    closepage("HeroSelectPage");
    if (selectedhero == -1) {
        alert("请主公选择武将");
        exit(1);
    }
    document.getElementById('pklife01').width = "300px";
    document.getElementById('pklife02').width = "300px";

    if (username == null && fttime > 2)fttime = 3;
    if (fttime > 0) {
        fttime--;
        //new pk content
        document.getElementById('pkuser1').innerHTML = username;
        document.getElementById('pkuser2').innerHTML = enemyuser;
        document.getElementById('specialattack1').innerHTML = xmlDoc.getElementsByTagName("trick")[selectedhero].childNodes[0].nodeValue;
        document.getElementById('herolife1').innerHTML = xmlDoc.getElementsByTagName("leadship")[selectedhero].childNodes[0].nodeValue * 10;
        document.getElementById('herolife2').innerHTML = xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue * 10;

        document.getElementById('pkhero1').innerHTML = xmlDoc.getElementsByTagName("name")[selectedhero].childNodes[0].nodeValue;
        document.getElementById('pkhero2').innerHTML = xmlDoc.getElementsByTagName("name")[enemy].childNodes[0].nodeValue;
        document.getElementById('pkpic1').src = "pic/wjpic/" + selectedhero + ".jpg";
        ;
        document.getElementById('pkpic2').src = "pic/wjpic/" + enemy + ".jpg";
        document.getElementById('pkscreen').style.display = "block";
        pklife1 = xmlDoc.getElementsByTagName("leadship")[selectedhero].childNodes[0].nodeValue * 10;
        pklife2 = xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue * 10;
    }
    else alert("今日三国擂台游戏次数已达到上限，请主公明日再战吧！");
    //document.getElementById("td").innerHTML=fttime;
    //update();
}

function physicalattack() {
    pklife2 = pklife2 - xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue * 1;
    document.getElementById('herolife2').innerHTML = pklife2;
    document.getElementById('pklife02').style.width = pklife2 / xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue * 0.1 * 300 + "px";
    document.getElementById('pkpic2b').style.display = "block";
    setTimeout(function () {
        document.getElementById('pkpic2b').style.display = "none";
    }, 500);
    if (pklife2 <= 0) {
        fightuser[stageid] = username;
        fightstage[stageid] = encode(selectedhero, 1);
        document.getElementById('resultpic').src = "pic/pk/win.png";
        document.getElementById('resultdiv').style.display = "block";
        setTimeout(function () {
            pkover()
        }, 3000);
    } else setTimeout(function () {
        AIattack()
    }, 1000);
}

function magicalattack() {
    pklife2 -= xmlDoc.getElementsByTagName("iq")[selectedhero].childNodes[0].nodeValue;
    document.getElementById('herolife2').innerHTML = pklife2;
    document.getElementById('pklife02').style.width = pklife2 / xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue * 0.1 * 300 + "px";
    document.getElementById('pkpic2b').style.display = "block";
    setTimeout(function () {
        document.getElementById('pkpic2b').style.display = "none";
    }, 500);
    if (pklife2 <= 0) {
        fightuser[stageid] = username;
        fightstage[stageid] = encode(selectedhero, 1);
        document.getElementById('resultpic').src = "pic/pk/win.png";
        document.getElementById('resultdiv').style.display = "block";
        setTimeout(function () {
            pkover()
        }, 3000);
    } else setTimeout(function () {
        AIattack()
    }, 1000);
}

function AIattack() {
    var x = Math.random(1, 100);
    if (xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue > xmlDoc.getElementsByTagName("iq")[selectedhero].childNodes[0].nodeValue) {
        if (x < 80)pklife1 -= xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue;
        else pklife1 -= xmlDoc.getElementsByTagName("iq")[selectedhero].childNodes[0].nodeValue;
    } else {
        if (x >= 80)pklife1 -= xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue;
        else pklife1 -= xmlDoc.getElementsByTagName("iq")[selectedhero].childNodes[0].nodeValue;
    }
    document.getElementById('pkpic1b').style.display = "block";
    setTimeout(function () {
        document.getElementById('pkpic1b').style.display = "none";
    }, 500);
    document.getElementById('herolife1').innerHTML = pklife1;
    document.getElementById('pklife01').style.width = pklife1 / xmlDoc.getElementsByTagName("leadship")[selectedhero].childNodes[0].nodeValue * 0.1 * 300 + "px";
    if (pklife1 <= 0) {
        //lose
        document.getElementById('resultpic').src = "pic/pk/lose.png";
        document.getElementById('resultdiv').style.display = "block";
        setTimeout(function () {
            pkover()
        }, 3000);
    }
}

function pkover() {
    document.getElementById('resultdiv').style.display = "none";
    document.getElementById('pkscreen').style.display = "none";
    update();
}


//塔防
function towerdefense() {
    if (username == null && tdtime > 2)tdtime = 3;
    if (tdtime > 0) {
        tdtime--;
        window.open('games/td/index.html', 'newwindow', 'height=640,width=680,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no')
    }
    else alert("今日三国塔防游戏次数已达到上限，请主公明日再战吧！");
    document.getElementById("td").innerHTML = tdtime;
    update();
}


//快跑
function kuaipao() {
    if (username == null && tdtime > 2)kptime = 3;
    if (kptime > 0) {
        kptime--;
        window.open('games/kuaipao/index.php', 'newwindow', 'height=600, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
    }
    else alert("今日三国快跑游戏次数已达到上限，请主公明日再战吧！");
    document.getElementById("kp").innerHTML = kptime;
    update();
}

//切将
function fruit() {
    if (username == null && tdtime > 2)qjtime = 3;
    if (qjtime > 0) {
        qjtime--;
        window.open('games/fruit/index.html', 'newwindow', 'height=540, width=640, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')
    }
    else alert("今日三国切将游戏次数已达到上限，请主公明日再战吧！");
    document.getElementById("qj").innerHTML = qjtime;
    update();
}


//武将属性数组
//0 class 1 id 2 name 3 force 4 leadship 5 iq 6 charm 7 polite 8 ability 9 trick
var wjinfo = new Array();         //先声明一维
for (var i = 0; i < 10; i++) {          //一维长度为10
    wjinfo[i] = new Array();    //在声明二维
    for (var j = 0; j < 7; j++) {      //二维长度为20
        wjinfo[i][j] = null;
    }
}

//雇佣


/*

 */
var newhero;
function guyong(x) {
    if (heronum >= 12) {
        alert("主公您的武将太多了，请解雇对您不忠的武将后再找我吧亲~");
        exit(0);
    }
    if (money < 100) {
        alert("没钱了怎么给我发薪水，哎主公快去赚钱吧亲~");
        exit(0);
    }
    heronum++;
    money -= 100;
    document.getElementById("money").innerHTML = money;
    newhero = wjinfo[1][x];
    hero[heronum] = encode(newhero, 1);
    zhaomu[x] -= 10000;
    if (wjinfo[0][x] == 0) {
        cqnum++;
        document.getElementById("chuanqi").innerHTML = cqnum;
    }
    if (wjinfo[0][x] == 1) {
        ylnum++;
        document.getElementById("yiliu").innerHTML = ylnum;
    }
    document.getElementById("wj" + heronum).innerHTML = wjinfo[2][x] + "(能力：" + wjinfo[8][x] + ")";
    document.getElementById("mywj" + heronum).src = "pic/wjpic/" + newhero + ".jpg";
    document.getElementById("guyong" + x).disabled = true;

    update();
}

//显示武将属性
function showheroinfo(a, z, event) {
    num = null;
    if (a == 9) {
        num = lv(zhaomu[z]);
    }
    if (a == 5) {
        num = id(hero[z]);
    }

    if (num != null) {
        if (a == 5 && z > heronum)exit(1);
        x = document.documentElement.scrollLeft + event.clientX - 480; //获取当前鼠标位置的X坐标
        y = document.documentElement.scrollTop + event.clientY - 380; //获取当前鼠标位置的Y坐标
        document.getElementById("HeroInfoPage").style.left = x + "px";
        document.getElementById("HeroInfoPage").style.top = y + "px";
        document.getElementById("HeroInfoPage").style.width = "50%";
        document.getElementById("HeroInfoPage").style.height = "120%";
        openpage('HeroInfoPage');
        var checkclass = xmlDoc.getElementsByTagName("class")[num].childNodes[0].nodeValue * 1;
        switch (checkclass) {
            case 0:
                document.getElementById("heroclass").src = "pic/gamelogo/wjclass0.png";
                break;
            case 1:
                document.getElementById("heroclass").src = "pic/gamelogo/wjclass1.png";
                break;
            case 2:
                document.getElementById("heroclass").src = "pic/gamelogo/wjclass2.png";
                break;
            case 3:
                document.getElementById("heroclass").src = "pic/gamelogo/wjclass3.png";
                break;
            case 4:
                document.getElementById("heroclass").src = "pic/gamelogo/wjclass4.png";
                break;
        }

        document.getElementById("heroname").innerHTML = xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        document.getElementById("heroforce").innerHTML = xmlDoc.getElementsByTagName("force")[num].childNodes[0].nodeValue;
        document.getElementById("heroleadship").innerHTML = xmlDoc.getElementsByTagName("leadship")[num].childNodes[0].nodeValue;
        document.getElementById("heroiq").innerHTML = xmlDoc.getElementsByTagName("iq")[num].childNodes[0].nodeValue;
        document.getElementById("herocharm").innerHTML = xmlDoc.getElementsByTagName("charm")[num].childNodes[0].nodeValue;
        document.getElementById("heropolite").innerHTML = xmlDoc.getElementsByTagName("polite")[num].childNodes[0].nodeValue;
        document.getElementById("heroability").innerHTML = xmlDoc.getElementsByTagName("ability")[num].childNodes[0].nodeValue;
        document.getElementById("herotrick").innerHTML = xmlDoc.getElementsByTagName("trick")[num].childNodes[0].nodeValue;
    }

}


function hideheroinfo() {

    closepage('HeroInfoPage');

}

//随机数函数
var native_random = Math.random;
Math.random = function (min, max, exact) {
    if (arguments.length === 0) {
        return native_random();
    }
    else if (arguments.length === 1) {
        max = min;
        min = 0;
    }
    var range = min + (native_random() * (max - min));
    return exact === void(0) ? Math.round(range) : range.toFixed(exact);
};


//检测登陆信息


//购买道具
function buy(x) {
    //document.getElementById('maskscreen').style.display="block";
    xmlhttp.open("GET", "data/wjdata/Items.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    var price = xmlDoc.getElementsByTagName("qdian")[x].childNodes[0].nodeValue;
    xmlhttp.open("GET", "data/wjdata/Total.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    var warning = document.getElementById('warning');
    var qdian = document.getElementById('money');
    var num = document.getElementById('num' + x);

    if (money >= price) {
        items[x]++;
        money -= price;
        qdian.innerHTML = money;
        num.innerHTML = items[x];
    }
    else {
        warning.innerHTML = "账户余额不足，请充值哦亲~";
    }
    update();
}


//Q点充值
function chongzhi() {
    money += 1000;
    cost += 1000;
    var warning = document.getElementById('warning');
    var qdian = document.getElementById('money');
    var chong = document.getElementById('cost');

    qdian.innerHTML = money;
    chong.innerHTML = cost;
    warning.innerHTML = "亲太给力了，再接再厉哦亲~";
    //updatecookie();
    update();
}


//排序
function BubbleSort(arr) { //交换排序->冒泡排序
    var st = new Date();
    var temp;
    var exchange;
    for (var i = 0; i < arr.length; i++) {
        exchange = false;
        for (var j = arr.length - 2; j >= i; j--) {
            if ((arr[j + 1]) < (arr[j])) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                exchange = true;
            }
        }
        if (!exchange) break;
    }
    status = (new Date() - st) + ' ms';
    return arr;
}

//清零
function clear() {
    var x = document.getElementById('myAnchor1');
    var y = document.getElementById('myAnchor2');
    var z = document.getElementById('myAnchor3');
    var u = document.getElementById('myAnchor4');
    var v = document.getElementById('myAnchor5');
    var w = document.getElementById('myAnchor6');

    var pic1 = document.getElementById('pic1');
    var pic2 = document.getElementById('pic2');
    var pic3 = document.getElementById('pic3');
    var pic4 = document.getElementById('pic4');
    var pic5 = document.getElementById('pic5');
    var pic6 = document.getElementById('pic6');

    x.innerHTML = "";
    y.innerHTML = "";
    z.innerHTML = "";
    u.innerHTML = "";
    v.innerHTML = "";
    w.innerHTML = "";

    pic1.src = "pic/closed.png";
    pic2.src = "pic/closed.png";
    pic3.src = "pic/closed.png";
    pic4.src = "pic/closed.png";
    pic5.src = "pic/closed.png";
    pic6.src = "pic/closed.png";

}
/*
 function loadXMLDoc(dname)        //响应太慢
 {
 try //Internet Explorer
 {
 xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
 }
 catch(e)
 {
 try //Firefox, Mozilla, Opera, etc.
 {
 xmlDoc=document.implementation.createDocument("","",null);
 }
 catch(e) {alert(e.message)}
 }
 try
 {
 xmlDoc.async=false;
 xmlDoc.load(dname);
 return(xmlDoc);
 }
 catch(e) {alert(e.message)}
 return(null);
 }
 */
function checkhero(x) {
    switch (x) {
        case id(hero[1]):
            return 1;
            break;
        case id(hero[2]):
            return 1;
            break;
        case id(hero[3]):
            return 1;
            break;
        case id(hero[4]):
            return 1;
            break;
        case id(hero[5]):
            return 1;
            break;
        case id(hero[6]):
            return 1;
            break;
        case id(hero[7]):
            return 1;
            break;
        case id(hero[8]):
            return 1;
            break;
        case id(hero[9]):
            return 1;
            break;
        case id(hero[10]):
            return 1;
            break;
        case id(hero[11]):
            return 1;
            break;
        case id(hero[12]):
            return 1;
            break;
        default:
            return 0;
    }
}

//选将
function xj(x, y)               //x--武将等级，y--所在窗口
{
    var pic = document.getElementById('pic' + y);
    var txt = document.getElementById('myAnchor' + y);
    var num;
    var name;
    //xmlDoc=loadXMLDoc("data/wjdata/chuanqi.xml");
    if (x < 12) {
        do {
            num = Math.random(1, 37);
        } while (checkhero(num) == 1);

        name = xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        //picurl
        txt.innerHTML = name + "(传奇)";
        txt.style.color = "#FFD306";
        wjinfo[0][y] = 0;
    }

    if (x >= 12 && x < 52) {
        do {
            num = Math.random(38, 137);
        } while (checkhero(num) == 1);

        name = xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        //picurl
        txt.innerHTML = name + "(一流)";
        txt.style.color = "#CE0000";
        wjinfo[0][y] = 1;
    }

    if (x >= 53 && x < 800) {
        do {
            num = Math.random(131, 278);
        } while (checkhero(num) == 1);

        name = xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        //picurl
        txt.innerHTML = name + "(二流)";
        txt.style.color = "#0000C6";
        wjinfo[0][y] = 2;
    }

    if (x >= 801 && x < 3000) {
        do {
            num = Math.random(279, 456);
        } while (checkhero(num) == 1);

        name = xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        //picurl
        txt.innerHTML = name + "(三流)";
        txt.style.color = "#009100";
        wjinfo[0][y] = 3;
    }

    if (x >= 3000) {
        do {
            num = Math.random(457, 670);
        } while (checkhero(num) == 1);

        name = xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        //picurl
        txt.innerHTML = name + "(普通)";
        txt.style.color = "#fff";
        wjinfo[0][y] = 4;
    }

    pic.src = "pic/wjpic/" + num + ".jpg"
    document.getElementById("bigpic" + y).href = "pic/wjpic/" + num + ".jpg";
    wjinfo[1][y] = num;
    zhaomu[y] = encode(1, num);
    wjinfo[8][y] = xmlDoc.getElementsByTagName("ability")[num].childNodes[0].nodeValue;
    wjinfo[2][y] = name;
    /*
     wjinfo[3][y]=xmlDoc.getElementsByTagName("force")[num].childNodes[0].nodeValue;
     wjinfo[4][y]=xmlDoc.getElementsByTagName("leadship")[num].childNodes[0].nodeValue;
     wjinfo[5][y]=xmlDoc.getElementsByTagName("iq")[num].childNodes[0].nodeValue;
     wjinfo[6][y]=xmlDoc.getElementsByTagName("charm")[num].childNodes[0].nodeValue;
     wjinfo[7][y]=xmlDoc.getElementsByTagName("polite")[num].childNodes[0].nodeValue;

     wjinfo[9][y]=xmlDoc.getElementsByTagName("trick")[num].childNodes[0].nodeValue;
     */
}

//初级招募
function chujizhaomo() {
    if (items[1] <= 0) {
        var warning2 = document.getElementById('warning2');
        warning2.innerHTML = "-_- !木有这种招募令了亲~";
        warning2.style.color = "#CE0000";
        exit(0);
    }
    clear();
    items[1]--;
    var warning2 = document.getElementById('warning2');
    warning2.innerHTML = "招募令越高级越大几率找到黄将和红将哦亲~";
    var num1 = document.getElementById('num1');
    num1.innerHTML = items[1];
    var pa = Math.random(13, 14400);
    var pb = Math.random(13, 14400);

    var possiblea, possibleb;

    if (pa > pb) {
        possiblea = pb;
        possibleb = pa;
    }
    else {
        possibleb = pb;
        possiblea = pa;
    }

    document.getElementById("guyong1").disabled = false;
    document.getElementById("guyong2").disabled = false;
    document.getElementById("guyong3").disabled = true;
    document.getElementById("guyong4").disabled = true;
    document.getElementById("guyong5").disabled = true;
    document.getElementById("guyong6").disabled = true;
    xj(possiblea, 1);
    xj(possibleb, 2);
    wjinfo[1][3] = null;
    zhaomu[3] = null;
    wjinfo[1][4] = null;
    zhaomu[4] = null;
    wjinfo[1][5] = null;
    zhaomu[5] = null;
    wjinfo[1][6] = null;
    zhaomu[6] = null;
    //wujiang();
//updatecookie();
    update();
}

//中级招募
function zhongjizhaomo() {
    if (items[2] <= 0) {
        var warning2 = document.getElementById('warning2');
        warning2.innerHTML = "-_- !木有这种招募令了亲~";
        warning2.style.color = "#CE0000";
        exit(0);
    }
    clear();
    items[2]--;
    var warning2 = document.getElementById('warning2');
    warning2.innerHTML = "招募令越高级越大几率找到黄将和红将哦亲~";
    var num2 = document.getElementById('num2');
    num2.innerHTML = items[2];

    var possiblea = Math.random(0, 7200);
    var possibleb = Math.random(0, 7200);
    var possiblec = Math.random(0, 7200);
    var a = 9;
    var b = 9;
    var c = 9;

    var arr = new Array();
    arr[0] = possiblea;
    arr[1] = possibleb;
    arr[2] = possiblec;
    BubbleSort(arr);
    possiblea = arr[0];
    possibleb = arr[1];
    possiblec = arr[2];

    document.getElementById("guyong1").disabled = false;
    document.getElementById("guyong2").disabled = false;
    document.getElementById("guyong3").disabled = false;
    document.getElementById("guyong4").disabled = true;
    document.getElementById("guyong5").disabled = true;
    document.getElementById("guyong6").disabled = true;

    xj(possiblea, 1);
    xj(possibleb, 2);
    xj(possiblec, 3);
    wjinfo[1][4] = null;
    zhaomu[4] = null;
    wjinfo[1][5] = null;
    zhaomu[5] = null;
    wjinfo[1][6] = null;
    zhaomu[6] = null;
//wujiang();
//updatecookie();
    update();
}


//顶级招募
function dingjizhaomo() {
    if (items[3] <= 0) {
        var warning2 = document.getElementById('warning2');
        warning2.innerHTML = "-_- !木有这种招募令了亲~";
        warning2.style.color = "#CE0000";
        exit(0);
    }
    clear();
    items[3]--;
    var warning2 = document.getElementById('warning2');
    warning2.innerHTML = "招募令越高级越大几率找到黄将和红将哦亲~";
    var num3 = document.getElementById('num3');
    num3.innerHTML = items[3];
    var possiblea = Math.random(0, 3600);
    var possibleb = Math.random(0, 3600);
    var possiblec = Math.random(0, 3600);
    var possibled = Math.random(0, 3600);
    var possiblee = Math.random(0, 3600);
    var possiblef = Math.random(0, 3600);
    var a = 9;
    var b = 9;
    var c = 9;
    var d = 9;
    var e = 9;
    var f = 9;

    var arr = new Array();
    arr[0] = possiblea;
    arr[1] = possibleb;
    arr[2] = possiblec;
    arr[3] = possibled;
    arr[4] = possiblee;
    arr[5] = possiblef;
    BubbleSort(arr);
    possiblea = arr[0];
    possibleb = arr[1];
    possiblec = arr[2];
    possibled = arr[3];
    possiblee = arr[4];
    possiblef = arr[5];

    document.getElementById("guyong1").disabled = false;
    document.getElementById("guyong2").disabled = false;
    document.getElementById("guyong3").disabled = false;
    document.getElementById("guyong4").disabled = false;
    document.getElementById("guyong5").disabled = false;
    document.getElementById("guyong6").disabled = false;

//w.innerHTML=f+"流武将";	
    xj(possiblea, 1);
    xj(possibleb, 2);
    xj(possiblec, 3);
    xj(possibled, 4);
    xj(possiblee, 5);
    xj(possiblef, 6);
//wujiang();
    update();
}

//清零
function xbclear() {
    var pic1 = document.getElementById('itempic1');
    var pic2 = document.getElementById('itempic2');
    var pic3 = document.getElementById('itempic3');
    var pic4 = document.getElementById('itempic4');
    var pic5 = document.getElementById('itempic5');
    var pic6 = document.getElementById('itempic6');

    pic1.src = "pic/item/item.png";
    pic2.src = "pic/item/item.png";
    pic3.src = "pic/item/item.png";
    pic4.src = "pic/item/item.png";
    pic5.src = "pic/item/item.png";
    pic6.src = "pic/item/item.png";

}


//选宝
function xb(x, y)               //x--武将等级，y--所在窗口
{
    var pic = document.getElementById('itempic' + y);
    var num;

    if (x < 12) {
        num = 0 + 10000 * Math.random(1, 6);
        //name=xmlDoc.getElementsByTagName("name")[num].childNodes[0].nodeValue;
        //picurl
    }

    if (x >= 12 && x < 52) {
        num = 1 + 10000 * Math.random(1, 6);
    }

    if (x >= 53 && x < 800) {
        num = 2 + 10000 * Math.random(1, 6);
    }

    if (x >= 801 && x < 3000) {
        num = 3 + 10000 * Math.random(1, 6);
    }

    if (x >= 3000) {
        num = 4 + 10000 * Math.random(1, 6);
    }
    xunbao[y] = num;
    pic.src = "pic/item/" + num + ".png"
    document.getElementById("bigitempic" + y).href = "pic/item/" + num + ".png";
}


//初级寻宝
function chujixunbao() {
    if (items[4] <= 0) {
        message('提示', '主公，木有这种寻宝令了！');
        exit(0);
    }
    xbclear();
    items[4] -= 1;
    var num4 = document.getElementById('num4');
    num4.innerHTML = items[4];
    var pa = Math.random(13, 14400);
    var pb = Math.random(13, 14400);

    var possiblea, possibleb;

    if (pa > pb) {
        possiblea = pb;
        possibleb = pa;
    }
    else {
        possibleb = pb;
        possiblea = pa;
    }

    xb(possiblea, 1);
    xb(possibleb, 2);

    xb(possiblea, 1);
    xb(possibleb, 2);
    update();
}

//中级寻宝
function zhongjixunbao() {
    if (items[5] <= 0) {
        message('提示', '主公，木有这种寻宝令了！');
        exit(0);
    }
    xbclear();
    items[5] -= 1;
    var num5 = document.getElementById('num5');
    num5.innerHTML = items[5];
    var possiblea = Math.random(0, 7200);
    var possibleb = Math.random(0, 7200);
    var possiblec = Math.random(0, 7200);
    var a = 9;
    var b = 9;
    var c = 9;

    var arr = new Array();
    arr[0] = possiblea;
    arr[1] = possibleb;
    arr[2] = possiblec;
    BubbleSort(arr);
    possiblea = arr[0];
    possibleb = arr[1];
    possiblec = arr[2];

    xb(possiblea, 1);
    xb(possibleb, 2);
    xb(possiblec, 3);
    update();
}


//顶级寻宝
function dingjixunbao() {
    if (items[6] <= 0) {
        message('提示', '主公，木有这种寻宝令了！');
        exit(0);
    }
    xbclear();
    items[6] -= 1;
    //items[3]--;
    var num6 = document.getElementById('num6');
    num6.innerHTML = items[6];
    var possiblea = Math.random(0, 3600);
    var possibleb = Math.random(0, 3600);
    var possiblec = Math.random(0, 3600);
    var possibled = Math.random(0, 3600);
    var possiblee = Math.random(0, 3600);
    var possiblef = Math.random(0, 3600);
    var a = 9;
    var b = 9;
    var c = 9;
    var d = 9;
    var e = 9;
    var f = 9;

    var arr = new Array();
    arr[0] = possiblea;
    arr[1] = possibleb;
    arr[2] = possiblec;
    arr[3] = possibled;
    arr[4] = possiblee;
    arr[5] = possiblef;
    BubbleSort(arr);
    possiblea = arr[0];
    possibleb = arr[1];
    possiblec = arr[2];
    possibled = arr[3];
    possiblee = arr[4];
    possiblef = arr[5];

//w.innerHTML=f+"流武将";	
    xb(possiblea, 1);
    xb(possibleb, 2);
    xb(possiblec, 3);
    xb(possibled, 4);
    xb(possiblee, 5);
    xb(possiblef, 6);
//wujiang();
    update();
}
// JavaScript Document