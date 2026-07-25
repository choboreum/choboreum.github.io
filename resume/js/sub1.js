$(function(){
    $(window).on('load',function(){
        $('.sub1-title span').addClass('op1').addClass('pt');

        $(window).on('scroll', scrEff);
        scrEff();
    });
});

function scrEff(){
    //console.log($(window).scrollTop());
    var height1=$('.items .item').eq(0).offset().top + 300;
    var height2=$('.items .item').eq(1).offset().top + 300;
    var height3=$('.items .item').eq(2).offset().top + 300;
    var height4=$('.items .item').eq(3).offset().top + 300;
    var height5=$('.items .item').eq(4).offset().top + 300;
    var height6=$('.items .item').eq(5).offset().top + 300;
    var height7=$('.items .item').eq(6).offset().top + 300;
    var height8=$('.items .item').eq(7).offset().top + 300;
    var height9=$('.items .item').eq(8).offset().top + 300;
    var height10=$('.items .item').eq(9).offset().top + 300;
    var height11=$('.items .item').eq(10).offset().top + 300;

    var scrHeight = $(window).scrollTop() + $(window).height();

    if( (height1 < scrHeight) ) {
        $('.item1').find('.from_left').addClass('pl');
        $('.item1').find('.from_right').addClass('pr');
        $('.item1').find('.text-container').addClass('op1').addClass('pt');
    }
    if( (height2 <= scrHeight) ) {
        $('.item2').find('.from_left').addClass('pl');
        $('.item2').find('.from_right').addClass('pr');
        $('.item2').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height3 <= scrHeight) ){
        $('.item3').find('.from_left').addClass('pl');
        $('.item3').find('.from_right').addClass('pr');
        $('.item3').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height4 <= scrHeight) ){
        $('.item4').find('.from_left').addClass('pl');
        $('.item4').find('.from_right').addClass('pr');
        $('.item4').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height5 <= scrHeight) ){
        $('.item5').find('.from_left').addClass('pl');
        $('.item5').find('.from_right').addClass('pr');
        $('.item5').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height6 <= scrHeight) ){
        $('.item6').find('.from_left').addClass('pl');
        $('.item6').find('.from_right').addClass('pr');
        $('.item6').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height7 <= scrHeight) ){
        $('.item7').find('.from_left').addClass('pl');
        $('.item7').find('.from_right').addClass('pr');
        $('.item7').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height8 <= scrHeight) ){
        $('.item8').find('.from_left').addClass('pl');
        $('.item8').find('.from_right').addClass('pr');
        $('.item8').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height9 <= scrHeight) ){
        $('.item9').find('.from_left').addClass('pl');
        $('.item9').find('.from_right').addClass('pr');
        $('.item9').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height10 <= scrHeight) ){
        $('.item10').find('.from_left').addClass('pl');
        $('.item10').find('.from_right').addClass('pr');
        $('.item10').find('.text-container').addClass('op1').addClass('pt');
    }
    if (( height11 <= scrHeight) ){
        $('.item11').find('.from_left').addClass('pl');
        $('.item11').find('.from_right').addClass('pr');
        $('.item11').find('.text-container').addClass('op1').addClass('pt');
    }
}