$(function(){
    $('.modal-trigger').click(function(){
        $("body").addClass("no-scroll");
        var id = $(this).data('id');
        $('#overlay, .modal-window[data-id="modal' + id + '"]').fadeIn(300);
    });
    $('.close-btn, #overlay').click(function(){
        $("body").removeClass("no-scroll");
        $('#overlay, .modal-window').fadeOut(300);
    });
});