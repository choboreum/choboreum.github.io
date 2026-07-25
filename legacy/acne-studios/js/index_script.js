$(document).ready(function () {
      $(".menuOpen").toggle(function() {
         $(".mainMenu").slideDown('slow');
       }, function() {
         $(".mainMenu").slideUp('fast');
       });
    
      var screenSize = $(window).width();

       function screenW(){     
          if(screenSize>1024){
             $('.col1').attr('src','images/collection1.jpg');
             $('.col2').attr('src','images/collection2.jpg');
             $('.col3').attr('src','images/collection3.jpg');
          }else if(screenSize>768){
             $('.col1').attr('src','images/collection4.jpg');
             $('.col2').attr('src','images/collection5.jpg');
             $('.col3').attr('src','images/collection6.jpg');
          }else if(screenSize>640){
             $('.col1').attr('src','images/collection4.jpg');
          }else{
             $('.col1').attr('src','images/collection7.jpg');
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
       if( screenSize > 768){//모바일이상
         $(".mainMenu").show(); //모바일이상 해상도에선 무조건 보여라!
         current=1; //모바일 이상의 해상도가 되면 1!
       }
       if(current==1 && screenSize <= 768){ 
         $(".mainMenu").hide();
         current=0; //모바일 해상도일 경우 0!
       }
    }); 

});