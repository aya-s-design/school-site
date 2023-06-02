$(function(){
    $('#hamburger-btn').click(function(){
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('panelactive');
    });
    $('.sp-nav a').click(function(){
        $('#hamburger-btn').removeClass('active');
        $('.sp-nav').removeClass('panelactive');
    });
});