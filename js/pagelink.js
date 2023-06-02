$(function(){

    $('a[href^="#"]').click(function(){
        let speed = 400;
        let type = 'swing';
        let href= $(this).attr("href");
        let target = $(href == "#index" ? 'html' : href);
        let position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, type);
        return false;
    });

    function PageTopAnime(){
        var scroll = $(window).scrollTop();
        if(scroll >= 200){
            $('#page-top').removeClass('DownMove');
            $('#page-top').addClass('UpMove');
        }else{
            if($('#page-top').hasClass('UpMove')){
                $('#page-top').removeClass('UpnMove');
                $('#page-top').addClass('DownMove');
            }
        }
    }
    $(window).scroll(function(){
        PageTopAnime();
    });
    $('#page-top').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});