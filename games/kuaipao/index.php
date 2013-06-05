<?php
/*
*Author: Jamin
*
*Blog:http://meego123.net
*/
if(substr_count($_SERVER['HTTP_ACCEPT_ENCODING'],'gzip')){
	ob_start('ob_gzhandler');
}
?>
<!DOCTYPE html>
<html>
<head>
<title>三国快跑</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="js/jquery-1.3.1.min.js"></script>
<script type="text/javascript" src="js/game.js"></script>
<noscript><iframe scr="*.htm"></iframe></noscript>
<link rel="stylesheet" type="text/css" media="all" href="css/index.css" />
</head>
<body oncontextmenu="return false">
<div id="container">
      <div id="info">
        <div id="wolf">已获得Q币:<span id="wolfCounter">0</span></div>
        <div id="scorer">&nbsp;<!--Score:<span id="scoreCounter">0</span>--></div>
     </div>
     <div id="content">
     <div id="mask"></div>
     <div id="option">
     <div id="result"></div>
         <ul id="menu">
            <li id="start"><span>Start Game</span></li>
            <li id="helpMe"><span >Help</span></li>
        </ul>
        <div id="help">
            <ol>
                <li>按键：W、S、A、D 分别控制 上、下、左、右。</li>
                <li>说明：通过控制诸葛亮向四周跑动，避开吕布的追捕。</li>
                <li>胜利条件：坚持时间越长，吕布出现的数量越多，得分越高。</li>
                <li>作者：West</li>
            </ol>
        </div>
     </div>
     <canvas id="map" width="800" height="600">
         你的浏览器不支持HTML5！建议使用IE9+、Chrome、Opera、FireFox、Safari 等浏览器 
     </canvas>
     </div>
</div>
</body>
</html>