<!DOCTYPE html>
<html lang="en" manifest="sanguo.appcache">
<head>
    <title>三国刷将乐demo6</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="theme/thomsander/css/reset.css" type="text/css" media="all">
    <link rel="stylesheet" href="theme/thomsander/css/layout.css" type="text/css" media="all">
    <link rel="stylesheet" href="theme/thomsander/css/prettyPhoto.css" type="text/css" media="all">
    <link rel="stylesheet" href="theme/thomsander/css/style.css" type="text/css" media="all">

    <script type="text/javascript" src="theme/thomsander/js/jquery-1.6.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/cufon-yui.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/cufon-replace.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/Ubuntu_400.font.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/Ubuntu_700.font.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/bgSlider.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/script.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/pages.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/bg.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/tabs.js"></script>
    <script type="text/javascript" src="theme/thomsander/js/jquery.prettyPhoto.js"></script>

    <script type="text/javascript" src="scripts/sanguo.js"></script>
    <script type="text/javascript" src="scripts/json2.js"></script>
    <script type="text/javascript" src="scripts/pvp.js"></script>
    <script type="text/javascript" src="scripts/get.js"></script>
    <script type="text/javascript" src="scripts/post.js"></script>

    <style type="text/css">
        .yiliu {
            color: #F00;
        }

        .erliu {
            color: #00F;
        }

        .sanliu {
            color: #060;
        }

        .putong {
            color: #FFF;
        }

        .chuanqi {
            color: #C90;
        }
    </style>
    <!--[if lt IE 9]>
    <script type="text/javascript" src="js/html5.js"></script>
    <![endif]-->
    <!--[if lt IE 7]>
    <div style='clear:both;text-align:center;position:relative'>
        <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx?ocid=ie6_countdown_bannercode"><img
            src="http://storage.ie6countdown.com/assets/100/images/banners/warning_bar_0000_us.jpg" border="0" alt=""/></a>
    </div>
    <![endif]-->
</head>
<body id="page1" onLoad="login(0)">

<div class="spinner"></div>
<div id="bgSlider"></div>
<div class="extra">

    <div class="main">

        <!--********************************娇艳欲滴的分割线 PKSCREEN****************************************-->

        <div class="box0" id="pkscreen">
            <div class="box0" id="resultdiv" style="display:none;height:428px;width:1076px; top:130px; left:135px"><img
                    id="resultpic" src="pic/pk/win.png" onClick="pkover();"></div>
            <div class="box02" style="left:150px; top:50px;">
                <p><a id="pkhero1" onClick="" href="#">PKHERO1</a></p>
                <p><a id="herolife1" onClick="" href="#">HEROLife1</a></p>
            </div>
            <div class="box01">
                <img id="pkpic1" src="pic/0_big.png" width="240" height="240">
            </div>
            <div id="pkpic1b" class="box01"
                 style="background-color:#F00;display:none; width:240px; height:240px;filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;">
            </div>
            <div class="box01" style="top:80px">
                <img id="pklife01b" src="pic/pk/sword01b.png" width="300" height="20">
            </div>
            <div class="box01" style="top:80px;">
                <img id="pklife01" src="pic/pk/sword01.png" width="300" height="20">
            </div>
            <div class="box02" style="left:200px; top:420px;">
                <p><a id="physicalattack1" onClick="physicalattack()" href="#">物理攻击</a></p>
                <p><a id="magicalattack1" onClick="magicalattack()" href="#">法术攻击</a></p>
                <p><a id="specialattack1" onClick="" href="#">特殊攻击</a></p>
            </div>

            <div class="box02" style="left:1100px; top:50px;">
                <p><a id="pkhero2" onClick="" href="#">PKHERO2</a></p>
                <p><a id="herolife2" onClick="" href="#">HEROLife2</a></p>
            </div>
            <div class="box01" style=" left:860px">
                <img id="pkpic2" src="pic/0_big.png" width="240" height="240">
            </div>
            <div id="pkpic2b" class="box01"
                 style="background-color:#F00;display:none; width:240px; height:240px;filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;left:860px;">
            </div>
            <div class="box03" style="top:80px">
                <img id="pklife02b" src="pic/pk/sword02b.png" width="300" height="20">
            </div>
            <div class="box03" style="top:80px;">
                <img id="pklife02" src="pic/pk/sword02.png" width="300" height="20">
            </div>
            <div class="box02" style="left:520px"><a id="pkuser1" onClick="" href="#">USER1</a>
                <img src="pic/quot1.png" alt=""><a id="masktext"
                                                   style="text-decoration:blink;font-size:72px;">VS</a><img
                    src="pic/quot2.png" alt=""><a id="pkuser2" onClick="" href="#">USER2</a>
            </div>
            <div class="box03">
                <p><a id="pkstate" onClick="getready()" href="#">准备</a></p>
            </div>
        </div>

        <!--********************************娇艳欲滴的分割线 MASKSCREEN****************************************-->
        <div class="box0" id="maskscreen">
            <div class="box01" id="maskpic">
                <img src="pic/0_big.png" width="360" height="360">
            </div>
            <div class="box02">
                <img src="pic/quot1.png" alt=""><a id="masktext" style="text-decoration:blink">恭喜主公成功穿越到三国，我是小婵，您的贴身保镖哦。今天天气好好，本来应该我带着你到处游玩的，可是我姐姐好像要见你呢，主公你要小心哦，我姐姐很色的......你好像等不及了，我这就带你见她去！</a><img
                    src="pic/quot2.png" alt="">
            </div>
            <div class="box03">
                <p><a id="maskact" onClick="tutor()" href="#">好的，带我走吧</a></p>
            </div>
        </div>

        <!--********************************娇艳欲滴的分割线 TUTORSCREEN****************************************-->
        <div class="box0" id="tutorscreen" style="background:url(theme/thomsander/images/bg_content2.png)">
            <div id="tutordiv" style="position:absolute;">
                <a id="tutora"><img id="tutorbox" src="pic/arrow.png"></a>
            </div>
        </div>
        <div class="box">
            <!-- header -->
            <header>
                <h1><a href="index.php" id="logo">三国刷将乐</a></h1>
                <nav>
                    <ul id="menu">
                        <li><a href="#!/HomePage"><span></span><strong><img src="pic/gamelogo/nav1.png"></strong></a>
                        </li>
                        <li><a href="#!/HeroPage"><span></span><strong><img src="pic/gamelogo/nav2.png"></strong></a>
                        </li>
                        <li><a href="#!/page_Portfolio"><span></span><strong><img src="pic/gamelogo/nav3.png"></strong></a>
                        </li>
                        <li><a href="#!/GamePage"><span></span><strong><img src="pic/gamelogo/nav4.png"></strong></a>
                        </li>
                        <li><a href="#!/ItemPage"><span></span><strong><img src="pic/gamelogo/nav5.png"></strong></a>
                        </li>
                    </ul>
                </nav>
            </header>
            <!--content -->
            <article id="content">
                <div class="ic">三国刷将乐</div>
                <ul>
                    <!-- 主公信息start  -->
                    <li id="HomePage">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>
                                <div class="wrapper pad_bot1">
                                    <div class="col1">
                                        <div class="pagetitle"><p>主公信息</p></div>
                                        <figure><img src="pic/mingjiang/10.jpg" alt="" class="pad_bot1"><a
                                                id="username">主公您好~</a></figure>
                                        <p>游戏规则：初级招募令价格为10Q点，中级招募令为30Q点，顶级招募令为180Q点。</p>


                                    </div>
                                    <div class="col1 pad_left1">
                                        <div class="pageh1"><p>经验等级</p></div>
                                        <div class="wrapper">
                                            <span class="date"><strong>25</strong><span>LV</span></span>
                                            <div class="col2">
                                                <p class="pad_bot2 color1"><strong>经验条</strong></p>
                                                <p>经验值</p>
                                            </div>
                                        </div>
                                        <div class="wrapper">
                                            <span class="date"><strong>22</strong><span>VIP</span></span>
                                            <div class="col2">
                                                <p class="pad_bot2 color1"><strong>功勋条</strong></p>
                                                <p class="pad_bot1">功勋值</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <p>您的Q点账户：<a name="money" id="money" class="chuanqi">0</a>点 <input type="button"
                                                                                                   name="button"
                                                                                                   id="button"
                                                                                                   value="Q点充值"
                                                                                                   onClick="chongzhi();"/>
                                    <a name="warning" id="warning" class="yiliu">每次充值需100RMB</a></p>
                                <p>您的充值记录： <a name="cost" id="cost">0</a>点</p>
                                <p>您的包裹：初级招募令<a name="num1" id="num1" class="erliu">0</a>个
                                    <input type="button" name="button4" id="button4" value="购买" onClick="tutor();"/>
                                    ，中级招募令<a name="num2" id="num2" class="sanliu">0</a>个
                                    <input type="button" name="button5" id="button5" value="购买" onClick="buy(2);"/>
                                    ，顶级招募令<a name="num3" id="num3" class="chuanqi">0</a>个
                                    <input type="button" name="button6" id="button6" value="购买" onClick="buy(3);"/>
                                </p>
                                <div class="wrapper">
                                    <figure class="left marg_right1"><a href="ad/qpad.jpg" class="lightbox-image"
                                                                        data-type="prettyPhoto[group2]"><span></span><img
                                                height="360" width="540" src="ad/qpad.jpg" alt=""></a></figure>
                                </div>
                                <a href="#!/page_More" class="button1"><span></span><strong><img
                                            src="pic/gamelogo/notice.png"></strong></a>
                            </div>
                        </div>
                    </li>
                    <!-- 我的武将start  -->
                    <li id="HeroPage">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>
                                <div class="pagetitle"><p>我的武将</p></div>
                                <div class="wrapper">
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,1,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj1">&nbsp;</div>
                                        <img id="mywj1" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,2,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj2">&nbsp;</div>
                                        <img id="mywj2" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,3,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj3">&nbsp;</div>
                                        <img id="mywj3" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,4,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj4">&nbsp;</div>
                                        <img id="mywj4" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                </div>

                                <div class="wrapper" style="font-size:">
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,5,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj5">&nbsp;</div>
                                        <img id="mywj5" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,6,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj6">&nbsp;</div>
                                        <img id="mywj6" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,7,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj7">&nbsp;</div>
                                        <img id="mywj7" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,8,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj8">&nbsp;</div>
                                        <img id="mywj8" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                </div>
                                <div class="wrapper">
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,9,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj9">&nbsp;</div>
                                        <img id="mywj9" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,10,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj10">&nbsp;</div>
                                        <img id="mywj10" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,11,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj11">&nbsp;</div>
                                        <img id="mywj11" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,12,event)"
                                            onMouseOut="hideheroinfo()">
                                        <div class="wjpic" id="wj12">&nbsp;</div>
                                        <img id="mywj12" src="pic/closed.png" width="125" height="125" alt=""></figure>
                                </div>
                                <p class="pad_bot1">武将属性数据显示区</p>
                                <div class="pagetitle"><p>我的刷将史</p></div>
                                <ul class="list2 pad_bot1">
                                    <li><a href="#" class="chuanqi">传奇武将<a id="chuanqi"></a>名</a></li>
                                    <li><a href="#" class="yiliu">一流武将<a id="yiliu"></a>名</a></li>
                                    <li><a href="#" class="erliu">二流武将<a id="erliu"></a>名</a></li>
                                    <li><a href="#" class="sanliu">三流武将<a id="sanliu"></a>名</a></li>
                                    <li><a href="#" class="putong">普通武将<a id="putong"></a>名</a></li>
                                    <li><a href="#">共计武将<a id="total"></a>名</a></li>
                                </ul>
                                <a onClick="showstageact()" class="button1"><span></span><strong>Read More</strong></a>
                            </div>
                        </div>
                    </li>
                    <!-- 酒馆纳贤start  -->
                    <li id="page_Portfolio">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>
                                <div class="wrapper tabs">
                                    <div class="col1">
                                        <div class="pagetitle"><p>酒馆纳贤</p></div>
                                        <ul class="nav">
                                            <input
                                                style="width:150px;height:80px;background-image:url(pic/gamelogo/cz.png); background-color:transparent"
                                                type="button" name="button1" id="button" value=""
                                                onClick="chujizhaomo();"/>
                                            <input
                                                style="width:150px;height:80px;background-image:url(pic/gamelogo/zz.png); background-color:transparent"
                                                type="button" name="button2" id="button2" value=""
                                                onClick="zhongjizhaomo();"/>
                                            <input
                                                style="width:150px;height:80px;background-image:url(pic/gamelogo/dz.png); background-color:transparent"
                                                type="button" name="button3" id="button3" value=""
                                                onClick="dingjizhaomo();"/>
                                            <p>&nbsp;</p>
                                            <p>&nbsp;</p>
                                            <a name="warning2" id="warning2">招募令越高级，越有机会招到传奇和一流武将~</a>
                                        </ul>
                                    </div>
                                    <div class="col2 pad_left1">
                                        <div class="tab-content" id="Fashion">
                                            <div class="pageh1"><p>主公可以用招募令招募武将哦</p></div>
                                            <div class="wrapper">
                                                <figure class="left marg_right1"><a href="" id="bigpic1"
                                                                                    onMouseMove="showheroinfo(9,1,event)"
                                                                                    onMouseOut="hideheroinfo()"
                                                                                    class="lightbox-image"
                                                                                    data-type="prettyPhoto[group2]"><span></span><img
                                                            id="pic1" width="200" height="200" src="pic/closed.png"
                                                            alt=""></a><a id="myAnchor1">神马武将</a><input type="button"
                                                                                                        id="guyong1"
                                                                                                        value="雇佣"
                                                                                                        disabled="disabled"
                                                                                                        onClick="guyong(1);"/>
                                                </figure>
                                                <figure class="left"><a href="" id="bigpic2"
                                                                        onMouseMove="showheroinfo(9,2,event)"
                                                                        onMouseOut="hideheroinfo()"
                                                                        class="lightbox-image"
                                                                        data-type="prettyPhoto[group2]"><span></span><img
                                                            id="pic2" width="200" height="200" src="pic/closed.png"
                                                            alt=""></a><a id="myAnchor2">神马武将</a><input type="button"
                                                                                                        id="guyong2"
                                                                                                        value="雇佣"
                                                                                                        disabled="disabled"
                                                                                                        onClick="guyong(2);"/>
                                                </figure>

                                            </div>
                                            <div class="wrapper">
                                                <figure class="left marg_right1"><a href="" id="bigpic3"
                                                                                    onMouseMove="showheroinfo(9,3,event)"
                                                                                    onMouseOut="hideheroinfo()"
                                                                                    class="lightbox-image"
                                                                                    data-type="prettyPhoto[group2]"><span></span><img
                                                            id="pic3" width="200" height="200" src="pic/closed.png"
                                                            alt=""></a><a id="myAnchor3">神马武将</a><input type="button"
                                                                                                        id="guyong3"
                                                                                                        value="雇佣"
                                                                                                        disabled="disabled"
                                                                                                        onClick="guyong(3);"/>
                                                </figure>
                                                <figure class="left"><a href="" id="bigpic4"
                                                                        onMouseMove="showheroinfo(9,4,event)"
                                                                        onMouseOut="hideheroinfo()"
                                                                        class="lightbox-image"
                                                                        data-type="prettyPhoto[group2]"><span></span><img
                                                            id="pic4" width="200" height="200" src="pic/closed.png"
                                                            alt=""></a><a id="myAnchor4">神马武将</a><input type="button"
                                                                                                        id="guyong4"
                                                                                                        value="雇佣"
                                                                                                        disabled="disabled"
                                                                                                        onClick="guyong(4);"/>
                                                </figure>
                                            </div>
                                            <div class="wrapper">
                                                <figure class="left marg_right1"><a href="" id="bigpic5"
                                                                                    onMouseMove="showheroinfo(9,5,event)"
                                                                                    onMouseOut="hideheroinfo()"
                                                                                    class="lightbox-image"
                                                                                    data-type="prettyPhoto[group2]"><span></span><img
                                                            id="pic5" width="200" height="200" src="pic/closed.png"
                                                            alt=""></a><a id="myAnchor5">神马武将</a><input type="button"
                                                                                                        id="guyong5"
                                                                                                        value="雇佣"
                                                                                                        disabled="disabled"
                                                                                                        onClick="guyong(5);"/>
                                                </figure>
                                                <figure class="left"><a href="" id="bigpic6"
                                                                        onMouseMove="showheroinfo(9,6,event)"
                                                                        onMouseOut="hideheroinfo()"
                                                                        class="lightbox-image"
                                                                        data-type="prettyPhoto[group2]"><span></span><img
                                                            id="pic6" width="200" height="200" src="pic/closed.png"
                                                            alt=""></a><a id="myAnchor6">神马武将</a><input type="button"
                                                                                                        id="guyong6"
                                                                                                        value="雇佣"
                                                                                                        disabled="disabled"
                                                                                                        onClick="guyong(6);"/>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- 征战天下start  -->
                    <li id="GamePage">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>
                                <div class="wrapper pad_bot3">
                                    <div class="pagetitle"><p>征战天下</p></div>
                                    <input
                                        style="width:128px;height:128px;background-image:url(pic/gamelogo/43.png); background-color:transparent"
                                        type="button" value="" onClick="pvpselecthero()"/>
                                    <div class="col2">
                                        <ul class="list2">
                                            <li><input type="button" value="擂台1" onClick="showstageact(1)"
                                                       onMouseMove="showstageinfo(1)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台2" onClick="showstageact(2)"
                                                       onMouseMove="showstageinfo(2)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台3" onClick="showstageact(3)"
                                                       onMouseMove="showstageinfo(3)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台4" onClick="showstageact(4)"
                                                       onMouseMove="showstageinfo(4)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台5" onClick="showstageact(5)"
                                                       onMouseMove="showstageinfo(5)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                        </ul>
                                    </div>
                                    <div class="col2">
                                        <ul class="list2">
                                            <li><input type="button" value="擂台6" onClick="showstageact(6)"
                                                       onMouseMove="showstageinfo(6)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台7" onClick="showstageact(7)"
                                                       onMouseMove="showstageinfo(7)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台8" onClick="showstageact(8)"
                                                       onMouseMove="showstageinfo(8)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台9" onClick="showstageact(9)"
                                                       onMouseMove="showstageinfo(9)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                            <li><input type="button" value="擂台10" onClick="showstageact(10)"
                                                       onMouseMove="showstageinfo(10)"
                                                       onMouseOut="closepage('StageInfoPage');"/></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pagetitle"><p>群雄割据</p></div>
                                <div class="wrapper pad_bot3">
                                    <figure class="left marg_right1"><img src="pic/gamelogo/kp_big.png" alt=""></figure>
                                    <p class="color1 pad_bot2"><strong>三国快跑</strong></p>
                                    <p>游戏说明</p>
                                    <p>今日剩余游戏次数：<a id="kp" class="chuanqi">3</a></p>
                                    <input type="button" value="进入游戏" onclick="kuaipao()"/>
                                </div>
                                <div class="wrapper pad_bot3">
                                    <figure class="left marg_right1"><img src="pic/gamelogo/qj_big.png" alt=""></figure>
                                    <p class="color1 pad_bot2"><strong>三国切将</strong></p>
                                    <p>游戏说明</p>
                                    <p>今日剩余游戏次数：<a id="qj" class="chuanqi">3</a></p>
                                    <input type="button" value="进入游戏" onclick="fruit()"/>
                                </div>
                                <div class="wrapper">
                                    <figure class="left marg_right1"><img src="pic/gamelogo/td_big.png" alt=""></figure>
                                    <p class="color1 pad_bot2"><strong>三国塔防</strong></p>
                                    <p>游戏说明</p>
                                    <p>今日剩余游戏次数：<a id="td" class="chuanqi">3</a></p>
                                    <input type="button" value="进入游戏" onclick="towerdefense()"/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- 客栈寻宝start  -->
                    <li id="ItemPage">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>
                                <div class="wrapper">
                                    <div class="pagetitle"><p>客栈寻宝</p></div>
                                    <div class="wrapper">
                                        <figure class="left marg_right1"><a href="" id="bigitempic1"
                                                                            onMouseMove="showiteminfo(9,1,event)"
                                                                            onMouseOut="hideiteminfo()"
                                                                            data-type="prettyPhoto[group2]"><span></span><img
                                                    id="itempic1" width="128" height="128" src="pic/item/item.png"
                                                    alt=""></a><a id="itemname1"></a></figure>
                                        <figure class="left marg_right1"><a href="" id="bigitempic2"
                                                                            onMouseMove="showiteminfo(9,1,event)"
                                                                            onMouseOut="hideiteminfo()"
                                                                            data-type="prettyPhoto[group2]"><span></span><img
                                                    id="itempic2" width="128" height="128" src="pic/item/item.png"
                                                    alt=""></a><a id="itemname2"></a></figure>
                                        <figure class="left marg_right1"><a href="" id="bigitempic3"
                                                                            onMouseMove="showiteminfo(9,1,event)"
                                                                            onMouseOut="hideiteminfo()"
                                                                            data-type="prettyPhoto[group2]"><span></span><img
                                                    id="itempic3" width="128" height="128" src="pic/item/item.png"
                                                    alt=""></a><a id="itemname3"></a></figure>
                                    </div>
                                    <div class="wrapper">
                                        <figure class="left marg_right1"><a href="" id="bigitempic4"
                                                                            onMouseMove="showiteminfo(9,1,event)"
                                                                            onMouseOut="hideiteminfo()"
                                                                            data-type="prettyPhoto[group2]"><span></span><img
                                                    id="itempic4" width="128" height="128" src="pic/item/item.png"
                                                    alt=""></a><a id="itemname4"></a></figure>
                                        <figure class="left marg_right1"><a href="" id="bigitempic5"
                                                                            onMouseMove="showiteminfo(9,1,event)"
                                                                            onMouseOut="hideiteminfo()"
                                                                            data-type="prettyPhoto[group2]"><span></span><img
                                                    id="itempic5" width="128" height="128" src="pic/item/item.png"
                                                    alt=""></a><a id="itemname5"></a></figure>
                                        <figure class="left marg_right1"><a href="" id="bigitempic6"
                                                                            onMouseMove="showiteminfo(9,1,event)"
                                                                            onMouseOut="hideiteminfo()"
                                                                            data-type="prettyPhoto[group2]"><span></span><img
                                                    id="itempic6" width="128" height="128" src="pic/item/item.png"
                                                    alt=""></a><a id="itemname6"></a></figure>
                                    </div>
                                    <div class="wrapper">
                                        <input
                                            style="width:150px;height:80px;background-image:url(pic/gamelogo/cx.png); background-color:transparent"
                                            type="button" name="button1" id="button" value="" onClick="chujixunbao();"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input
                                            style="width:150px;height:80px;background-image:url(pic/gamelogo/zx.png); background-color:transparent"
                                            type="button" name="button2" id="button2" value=""
                                            onClick="zhongjixunbao();"/>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <input
                                            style="width:150px;height:80px;background-image:url(pic/gamelogo/dx.png); background-color:transparent"
                                            type="button" name="button3" id="button3" value=""
                                            onClick="dingjixunbao();"/>
                                    </div>
                                    <p>您的包裹：初级寻宝令<a name="num4" id="num4" class="erliu">0</a>个
                                        <input type="button" name="button7" id="button7" value="购买" onClick="buy(4);"/>
                                        ，中级寻宝令<a name="num5" id="num5" class="sanliu">0</a>个
                                        <input type="button" name="button8" id="button8" value="购买" onClick="buy(5);"/>
                                        ，顶级寻宝令<a name="num6" id="num6" class="chuanqi">0</a>个
                                        <input type="button" name="button9" id="button9" value="购买" onClick="buy(6);"/>
                                    </p>
                                    <div class="pagetitle"><p>游戏建议</p></div>
                                    <form id="ContactForm">
                                        <div>
                                            <div class="wrapper">
                                                <span>姓名:</span>
                                                <input type="text" class="input">
                                            </div>
                                            <div class="wrapper">
                                                <span>E-mail:</span>
                                                <input type="text" class="input">
                                            </div>
                                            <div class="textarea_box">
                                                <span>建议:</span>
                                                <textarea name="textarea" cols="1" rows="1"></textarea>
                                            </div>
                                            <div class="wrapper">
                                                <span>&nbsp;</span>
                                                <a href="#" class="button1"
                                                   onClick="document.getElementById('ContactForm').reset()"><span></span><strong>Clear</strong></a>
                                                <a href="#" class="button1"
                                                   onClick="document.getElementById('ContactForm').submit()"><span></span><strong>Send</strong></a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </li>
                    <!-- 活动公告start  -->
                    <li id="page_More">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>

                                <div class="pagetitle"><p>游戏公告</p></div>
                                <div class="wrapper pad_bot3">
                                    <figure class="left marg_right1"><img src="pic/bg1.jpg" width="540px" height="360px"
                                                                          alt=""></figure>
                                    <p class="color1 pad_bot2"><strong>公告一</strong></p>

                                </div>
                                <p>DEMO期间，免费充值</p>
                                <p>公告内容占位</p>
                                <p>内容占位</p>
                                <div class="wrapper pad_bot3">
                                    <figure class="left marg_right1"><img src="pic/gamelogo/notice.png" alt=""></figure>
                                    <p class="color1 pad_bot2"><strong>公告二</strong></p>

                                </div>
                                <p>注册游戏送大礼，3000QB等你拿</p>
                                <p>内容占位</p>
                                <p>内容占位</p>
                            </div>
                        </div>
                    </li>
                    <!-- start  -->
                    <li id="page_More1">
                        <div class="box1">
                            <div class="inner">
                                <a href="#" class="close" data-type="close"><span></span></a>


                            </div>
                        </div>
                    </li>
                    <!-- end   -->
                    <!-- 消息页面start -->
                    <li id="MessagePage">
                        <div class="box2" style="text-align:center;">
                            <div class="inner">
                                <a class="close" onClick="closepage('MessagePage')"><span></span></a>
                                <div class="pagetitle" id="messagetitle">游戏公告</div>
                                <p>&nbsp;</p>
                                <div class="pageh1" id="messagetext">公告内容</div>
                            </div>
                        </div>
                    </li>
                    <!-- 消息页面end -->
                    <!-- Login页面start -->
                    <li id="LoginPage">
                        <div class="box2">
                            <div class="inner">
                                <a class="close" onClick="closepage('LoginPage')"><span></span></a>

                                <div class="pagetitle"><p>用户登陆</p></div>
                                <p><input id="loginname" type="text"
                                          style="width:240px;font-size:24px;color:#999;height:40px"
                                          onClick="inputchange('loginname')" value="USERNAME" maxlength="45"><a
                                        id="loginhint1" class="yiliu"></a></p>
                                <p><input id="password" type="password"
                                          style="width:240px;font-size:24px;color:#999;height:40px" value="********"
                                          maxlength="45" onClick="inputchange('password')"><a id="loginhint2"
                                                                                              class="yiliu"></a></p>
                                <div class="wrapper pad_bot3">
                                    <div id="loginbar"><p><a class="button1" onClick="login(1)"><span></span><strong>Login</strong></a><a
                                                id="loginhint3" class="yiliu"></a></p>
                                        <p>注册游戏送大礼，3000QB等你拿<a class="button1"
                                                               onClick="closepage('LoginPage');openpage('RegPage');"><span></span><strong>Register</strong></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <!-- REG页面start -->
                    <li id="RegPage">
                        <div class="box2">
                            <div class="inner">
                                <a class="close" onClick="closepage('RegPage')"><span></span></a>
                                <div class="pagetitle"><p>用户注册</p></div>
                                <p><input id="regname" type="text"
                                          style="width:240px;font-size:24px;color:#999;height:40px"
                                          onClick="inputchange('regname')" value="USERNAME" maxlength="45"><a
                                        id="reghint1" class="yiliu"></a></p>
                                <p><input id="regemail" type="text"
                                          style="width:240px;font-size:24px;color:#999;height:40px"
                                          onClick="inputchange('regemail')" value="邮箱(abc@abc.com)" maxlength="45"><a
                                        id="reghint2" class="yiliu"></a></p>
                                <p><input id="regpassword" type="password"
                                          style="width:240px;font-size:24px;color:#999;height:40px" value="********"
                                          maxlength="45" onClick="inputchange('regpassword')"><a id="reghint3"
                                                                                                 class="yiliu"></a></p>
                                <div class="wrapper pad_bot3">
                                    <div id="regbar" class="pagetitle"><p><a class="button1"
                                                                             onClick="register()"><span></span><strong>Register</strong></a><a
                                                id="reghint4" class="yiliu"></a></p></div>

                                </div>
                            </div>
                    </li>
                    <!-- 武将属性消息start -->
                    <li id="HeroInfoPage">
                        <div class="box2">
                            <div class="inner">
                                <div class="pageh1"><p><a id="heroname"></a><img id="heroclass"></p></div>
                                <p>能力：<a id="heroability"></a></p>
                                <p>统率：<a id="heroleadship"></a></p>
                                <p>武力：<a id="heroforce"></a></p>
                                <p>智力：<a id="heroiq"></a></p>
                                <p>魅力：<a id="herocharm"></a></p>
                                <p>政治：<a id="heropolite"></a></p>
                                <p>技能：<a id="herotrick"></a></p>
                            </div>
                        </div>
                    </li>
                    <!-- 武将选择start -->
                    <li id="HeroSelectPage">
                        <div class="box2">
                            <div class="inner">
                                <a class="close" onClick="closepage('HeroSelectPage')"><span></span></a>
                                <div class="pagetitle"><p>选择参战武将</p></div>
                                <div class="wrapper" style="font-size:8px;text-align:center;">
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,1,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(1)">
                                        <div class="wjpic" id="wj01">&nbsp;</div>
                                        <img class="wjpic" id="mywj01" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,2,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(2)">
                                        <div class="wjpic" id="wj02">&nbsp;</div>
                                        <img class="wjpic" id="mywj02" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,3,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(3)">
                                        <div class="wjpic" id="wj03">&nbsp;</div>
                                        <img class="wjpic" id="mywj03" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                </div>
                                <div class="wrapper" style="font-size:8px">
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,4,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(4)">
                                        <div class="wjpic" id="wj04">&nbsp;</div>
                                        <img class="wjpic" id="mywj04" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>

                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,5,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(5)">
                                        <div class="wjpic" id="wj05">&nbsp;</div>
                                        <img class="wjpic" id="mywj05" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,6,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(6)">
                                        <div class="wjpic" id="wj06">&nbsp;</div>
                                        <img class="wjpic" id="mywj06" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                </div>
                                <div class="wrapper" style="font-size:8px">

                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,7,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(7)">
                                        <div class="wjpic" id="wj07">&nbsp;</div>
                                        <img class="wjpic" id="mywj07" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,8,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(8)">
                                        <div class="wjpic" id="wj08">&nbsp;</div>
                                        <img class="wjpic" id="mywj08" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>

                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,9,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(9)">
                                        <div class="wjpic" id="wj09">&nbsp;</div>
                                        <img class="wjpic" id="mywj09" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                </div>
                                <div class="wrapper" style="font-size:8px">
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,10,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(10)">
                                        <div class="wjpic" id="wj010">&nbsp;</div>
                                        <img class="wjpic" id="mywj010" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,11,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(11)">
                                        <div class="wjpic" id="wj011">&nbsp;</div>
                                        <img class="wjpic" id="mywj011" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                    <figure class="left marg_right1" onMouseMove="showheroinfo(5,12,event)"
                                            onMouseOut="hideheroinfo()" onclick="selecthero(12)">
                                        <div class="wjpic" id="wj012">&nbsp;</div>
                                        <img class="wjpic" id="mywj012" src="pic/closed.png" width="70" height="70"
                                             alt=""></figure>
                                </div>
                                <input type="button" id="startpk"
                                       style="width:280px;height:81px;background-image:url(pic/gamelogo/startgame.png); background-color:transparent"
                                       value="" onClick="pk()"/>
                            </div>
                        </div>
                    </li>
                    <!-- 擂台信息start -->
                    <li id="StageInfoPage">
                        <div class="box2">
                            <div class="inner" style="font-size:18px">
                                <a class="close" onClick="closepage('StageInfoPage')"><span></span></a>
                                <figure class="left marg_right1"><img id="enemypic" src="pic/closed.png" width="70"
                                                                      height="70" alt=""></figure>
                                <figure class="left marg_right1">
                                    <div id="enemyuser">&nbsp;</div>
                                    <div id="enemyhero">&nbsp;</div>
                                </figure>
                            </div>
                    </li>
                    <!-- 擂台行为start -->
                    <li id="StageActPage">
                        <div class="box2">
                            <div class="inner">
                                <a class="close" onClick="closepage('StageActPage')"><span></span></a>
                                <div class="wrapper" class="wjpic">
                                    <div class="cols">
                                        <figure class="left marg_right1"><input
                                                style="width:70px;height:70px;background-image:url(pic/gamelogo/zhencha.png); background-color:transparent"
                                                type="button" value="" onClick="zhencha();"/>侦察
                                        </figure>
                                    </div>
                                    <div class="cols">
                                        <figure class="left marg_right1"><input
                                                style="width:70px;height:70px;background-image:url(pic/gamelogo/gongzhan.png); background-color:transparent"
                                                type="button" value="" onClick="showselecthero();"/>攻占
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                </ul>
            </article>
            <!-- / content -->
        </div>
    </div>
    <div class="block"></div>
</div>
<div class="bg1">
    <div class="main">
        <!-- footer -->
        <footer>
            <div class="bg_spinner"></div>
            <ul class="pagination">
                <li class="current"><a href="theme/thomsander/images/bg_img1.jpg">1</a></li>
                <li><a href="theme/thomsander/images/bg_img2.jpg">2</a></li>
                <li><a href="theme/thomsander/images/bg_img3.jpg">3</a></li>
            </ul>
            <div class="col_1">
                <a href="index.html" id="footer_logo"></a>
                <a id="footusername"></a>
                <a id="logindiv" onClick="openpage('LoginPage')" class="button1"><span></span><strong>LOGIN</strong></a>
            </div>

            <div class="col_2">
                Developed by <a rel="nofollow" href="" target="_blank">West Hacker</a> | <a rel="nofollow"
                                                                                            href="http://www.appinair.com/"
                                                                                            target="_blank">APPinAIR.com</a>

                <!-- {%FOOTER_LINK} -->
            </div>
        </footer>
        <!-- / footer-->
    </div>
</div>
<script type="text/javascript"> Cufon.now(); </script>
<script>
    $(window).load(function () {
        $('.spinner').fadeOut();
        $('body').css({overflow: 'inherit'})
    })
</script>
</body>
</html>