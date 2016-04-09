// JavaScript Document

function getready() {
    var host = '127.0.0.1';
    //var host = 'node.remysharp.com';
    var port = 8080;
    var url = 'ws://' + host + ':' + port + '/';
    var ws = new WebSocket(url);  //构建于服务器之间的连接通信

    ws.onopen = function ()//通过onopen事件句柄来监听socket的打开事件
    {
        document.getElementById('pkstate').innerHTML = '已准备<br/>';
    }

    document.getElementById('physicalattack1').onclick = function () {
        pvpphysicalattack()
        pvpdata.username = username;
        pvpdata.hero = selectedhero;
        pvpdata.step = mystep;
        pvpdata.attack = myattack;

        ws.send(JSON.stringify(pvpdata));
    }

    document.getElementById('magicalattack1').onclick = function () {
        pvpmagicalattack()
        pvpdata.username = username;
        pvpdata.hero = selectedhero;
        pvpdata.step = mystep;
        pvpdata.attack = myattack;

        ws.send(JSON.stringify(pvpdata));
    }

    document.getElementById("resultpic").onshow = function () {
        ws.close();
    }

    ws.onmessage = function (e)//用onmessage事件句柄接受服务器传过来的数据
    {
        //var msg = JSON.parse(e.data); 
        if (e.data == "1") {
            pvpdata.username = username;
            pvpdata.hero = selectedhero;
            pvpdata.step = mystep;
            pvpdata.attack = myattack;
            ws.send(JSON.stringify(pvpdata));
        } else {
            var msg = eval("(" + e.data + ")");
            enemystep = msg.step;
            enemyuser = msg.username;
            enemy = msg.hero;
            if (enemystep == 0) {
                //alert(enemy);
                document.getElementById('pkuser2').innerHTML = enemyuser;
                document.getElementById('pkpic2').src = "pic/wjpic/" + enemy + ".jpg";
                document.getElementById('herolife2').innerHTML = xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue * 10;
                document.getElementById('pkhero2').innerHTML = xmlDoc.getElementsByTagName("name")[enemy].childNodes[0].nodeValue;
                pklife2 = xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue * 10;
            }

            mystep++;
            enemyattack = msg.attack;
            pvpattack();
        }
        // audioElement.play();      
        //document.getElementById('pkstate').innerHTML = msg.username+'<br/>';  
    }


    //ws.close();
}

function pvpselecthero() {
    selectedhero = -1;
    //closepage("StageActPage");
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
        pvp();
    }
}

function pvp() {
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
        //document.getElementById('pkuser2').innerHTML=enemyuser;
        document.getElementById('specialattack1').innerHTML = xmlDoc.getElementsByTagName("trick")[selectedhero].childNodes[0].nodeValue;
        document.getElementById('herolife1').innerHTML = xmlDoc.getElementsByTagName("leadship")[selectedhero].childNodes[0].nodeValue * 10;
        //document.getElementById('herolife2').innerHTML=xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue*10;

        document.getElementById('pkhero1').innerHTML = xmlDoc.getElementsByTagName("name")[selectedhero].childNodes[0].nodeValue;
        //document.getElementById('pkhero2').innerHTML=xmlDoc.getElementsByTagName("name")[enemy].childNodes[0].nodeValue;
        document.getElementById('pkpic1').src = "pic/wjpic/" + selectedhero + ".jpg";
        ;
        document.getElementById('pkpic2').src = "pic/closed.png";
        document.getElementById('pkscreen').style.display = "block";
        pklife1 = xmlDoc.getElementsByTagName("leadship")[selectedhero].childNodes[0].nodeValue * 10;
        //pklife2=xmlDoc.getElementsByTagName("leadship")[enemy].childNodes[0].nodeValue*10;
    }
    else alert("今日三国擂台游戏次数已达到上限，请主公明日再战吧！");
    //document.getElementById("td").innerHTML=fttime;
    //update();
}


function pvpattack() {
    pklife1 -= enemyattack;

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


function pvpphysicalattack() {
    myattack = xmlDoc.getElementsByTagName("force")[selectedhero].childNodes[0].nodeValue * 1;
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
    }
}

function pvpmagicalattack() {
    myattack = xmlDoc.getElementsByTagName("iq")[selectedhero].childNodes[0].nodeValue * 1;
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
    }
}