//공지사항
// JavaScript Document
$(document).ready(function() {
   var position=0;  //최초위치
   var movesize=16;//$('.news_slide ul li a').height(); //이미지 하나의 너비, 이동 폭 
   var timeonoff;
   // 자동 넘어가기
   function moveNitice(){
	    position-=movesize;  // 16씩 감소
    	$('.news_slide').stop().animate({top:position}, 'slow',
	         function(){							
		    if(position==-144){
			   $('.news_slide').css('top',-64);
			   position=-64;
		    }
	 });
   }

     timeonoff= setInterval(moveNitice, 3000);  
    $('.news_slide ul').after($('.news_slide ul').clone()); // a의 뒤에 b를 복사해서 넣기
       //슬라이드 겔러리를 한번 복제
    $('.news_slide ul').hover(function(){clearInterval(timeonoff);},function(){timeonoff= setInterval(moveNitice, 3000); });
 });
 
 
 