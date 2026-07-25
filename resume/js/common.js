'use strict';

/* 섹션별 제목 */
$(function(){
    $('nav .menu-items a').click(function () {
        $('.navbar input[type="checkbox"]').prop('checked', false);
    });

    $(window).on('load',function(){
        $(window).on('scroll', scrEff);
        scrEff();
    });

    function scrEff(){
        /*var height1=$('#panels-container .part').eq(0).offset().top + 30;
        var height2=$('#panels-container .part').eq(1).offset().top + 30;
        var height3=$('#panels-container .part').eq(2).offset().top + 30;

        var scrHeight = $(window).scrollTop() + $(window).height();

        if( (height1 < scrHeight) ) {
            $('#panels-container .part').eq(0).addClass('active');
        }
        if( (height2 <= scrHeight) ) {
            $('#panels-container .part').eq(1).addClass('active');
        }
        if (( height3 <= scrHeight) ){
            $('#panels-container .part').eq(2).addClass('active');
        }*/
    }
});

/**
* 모바일 페이지 강제 이동
*/
//Mobile여부를 구분하기 위함
    // var uAgent = navigator.userAgent.toLowerCase();

// 아래는 모바일 장치들의 모바일 페이지 접속을위한 스크립트
    // var mobilePhones = new Array('iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce','nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile');
    // for (var i = 0; i < mobilePhones.length; i++){
    //   if (uAgent.indexOf(mobilePhones[i]) != -1){
    //    alert('해당 포트폴리오는 PC로만 접근 가능합니다.')
    //   }
    // };