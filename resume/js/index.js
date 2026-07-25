'use strict';

$(function(){
    $('nav .menu-items a').click(function () {
        $('.navbar input[type="checkbox"]').prop('checked', false);
    });
});
