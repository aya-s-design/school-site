$(function(){
    $('.cover-slide > div:nth-child(n+2)').hide();
        setInterval(function(){
            $('.cover-slide > div:first-child').fadeOut(2000);
            $('.cover-slide > div:nth-child(2)').fadeIn(1000);
            $('.cover-slide > div:first-child').appendTo('.cover-slide');
        }, 8000);
});
