// ==UserScript==
// @name		爱奇艺视频VIP替换
// @namespace	http://tampermonkey.net/
// @version		1.0
// @description	直接在视频页查看会员视频
// @author		申杰
// @match		*.iqiyi.com/v*
// @grant		none
// @run-at		document-start
// @require		https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    // 替换播放器
    function replace_original_player() {
        // 生成替换源
        var current_url = window.location.href;
        var request_url = '<iframe id="play_iframe" allowfullscreen="true" ' +
			'style="background-color: #000;" width="100%" height="100%" ' +
			'allowtransparency="true" frameborder="0" scrolling="no" ' +
			'src="http://api.pucms.com/?url=' + current_url + '"></iframe>';
		$('div.pw-video').empty().html(request_url);
    };
    function clear_html(){
        $(".J_play-underFrame").remove();
        var c = $(".vipFloatbgCls").length;
        console.log(c);
        if(c == 1){
            $(".vipFloatbgCls").parent().remove();
        } else {
            setTimeout(function(){
                clear_html();
            }, 1000);
        }
    }
    setTimeout(function(){
		replace_original_player();
	}, 1000);
    setTimeout(function(){
		clear_html();
	}, 1000);
})();