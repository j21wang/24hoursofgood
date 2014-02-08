$(".send").click(function(){
    var text = $(".textMessage").val();
    $(".textMessage").val('');
    $("#textsBox").append("<div id='bubbleRight' class='bubble'>" + text + "</div>");
    $("#textsBox").append("<br><br><img src='loading.gif' class='bubble' id='loadingImage'>");
    $("#loadingImage").delay(5000).fadeOut(100, function(){
        $(this).remove();
        $(".textMessage").attr('disabled','disabled');
        $("#textsBox").append("<div id='bubbleLeft' class='bubble'>" + text + "</div>");
        $(".textMessage").attr('disabled','');
        scrollDown();
    });
    scrollDown();
});

function scrollDown(){
    $("#textsBox").animate({
        scrollTop: $("#textsBox").height()
    }, 500);

}
