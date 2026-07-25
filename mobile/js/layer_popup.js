 $(document).ready(function(){
     
      $('.openBtn').on('click', function(){
          $(this).next('.big').fadeIn('slow');
          $('.popupbox').show();
      });
     
     $('.closeBtn, .popupbox').on('click', function(){
          $('.big').fadeOut('fast');
          $('.popupbox').hide();
     });
 });

