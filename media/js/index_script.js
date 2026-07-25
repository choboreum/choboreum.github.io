$(document).ready(function () {
      $(".menuOpen").toggle(function() {
         $(".mainMenu").slideDown('slow');
       }, function() {
         $(".mainMenu").slideUp('fast');
       });
    
      var screenSize = $(window).width();

       function screenW(){     
          if(screenSize>1024){
             $('.rn').attr('src','images/ron.jpg');
             $('.dv').attr('src','images/dumbledore.jpg');
          }else if(screenSize>768){
             $('.rn').attr('src','images/ronhermion.jpg');
             $('.dv').attr('src','images/dumvole.jpg');
          }else if(screenSize>640){
             $('.rn').attr('src','images/hrh.jpg');
             $('.dv').attr('src','images/harryvolde.jpg');
          }else{
             $('.rn').attr('src','images/character2.jpg');
             $('.dv').attr('src','images/character.jpg');
          }
        }

    screenW();  //함수호출    

    $(window).resize(function(){ 
      screenSize = $(window).width(); 
      screenW();//함수호출
    }); 
    
       var current=0;
       $(window).resize(function(){ 
           var screenSize = $(window).width(); //브라우저의 넓이
           if( screenSize > 640){//모바일이상
             $(".mainMenu").show(); //모바일이상 해상도에선 무조건 보여라!
             current=1; //모바일 이상의 해상도가 되면 1!
           }
           if(current==1 && screenSize <= 640){ 
             $(".mainMenu").hide();
             current=0; //모바일 해상도일 경우 0!
           }
        }); 
    
        $('.top_move').click(function(){
              //상단으로 스르륵 이동합니다.
           $('html,body').stop().animate({'scrollTop':0},1000); 
        }); //여기까지 공통js => commom js에 놓고 쓰면 됨
    
});