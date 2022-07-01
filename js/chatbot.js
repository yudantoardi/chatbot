$(document).ready(function(){

    $(".pop-link").click(function(pl){
        pl.preventDefault();
        $(".chatbot-wrapper").addClass("popup-active");
        $(".chatbot-popup").removeClass("show");
        $($(this).attr("href")).addClass("show");
        $("input[type='text']").focus();
    });
    $(".chatbot-popup-head .btn-back").click(function(){
        $(".chatbot-wrapper").removeClass("popup-active");
        $(".chatbot-popup").removeClass("show");
    });


    var yourNavigation = $("chatbot-head");
    stickyDiv = "scrolled";
    yourHeader = $('chatbot-head').height();
    $(".chatbot-ct").scroll(function() {
        if( $(this).scrollTop() > 100 ) {
            yourNavigation.addClass(stickyDiv);
            $(".chatbot-head").addClass("scrolled");
        } else {
            yourNavigation.removeClass(stickyDiv);
            $(".chatbot-head").removeClass("scrolled");
        }
    });
});