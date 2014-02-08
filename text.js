$(document).ready(function(){
    console.log("ehy");
    var asked = false;
    $(".send").click(function(){
        var text = $(".textMessage").val();
        $(".textMessage").val('');
        $("#textsBox").append("<div id='bubbleRight' class='bubble'>" + text + "</div>");
        $("#textsBox").append("<img src='loading.gif' class='bubble' id='loadingImage'>");
        $("#loadingImage").delay(1000).fadeOut(100, function(){
            $(this).remove();
            if(containsSSN(text.toLowerCase()) && !asked){
                $("#textsBox").append("<div id='bubbleLeft' class='bubble'>it's "+ssn+"</div>");
                asked = true;
            } else if(containsSSN(text.toLowerCase())){
                $("#textsBox").append("<div id='bubbleLeft' class='bubble'>you asked me already...</div>");
            } else {
                var momArr = ["i love u","how's it going?","i miss u","where r u?","come back home 2nite","i want 2 c u","why don't u call me more?","did you eat yet?","dad says hi"];
                $("#textsBox").append("<div id='bubbleLeft' class='bubble'>"+momArr[getRandomNum(0,momArr.length-1)]+"</div>");
            }
            scrollDown();
        });
        scrollDown();
    });

    function scrollDown(){
        $("#textsBox").animate({
            scrollTop: $("#textsBox").height()
        }, 500);

    }

    function containsSSN(text){
        var arr = ["ssn","social security number","social security #","ss#","ssn?","social security","social"];
        for(var i=0; i<arr.length; i++){
            if(text.indexOf(arr[i]) > -1){
                return true;
            }
        }
    }

    function getRandomNum(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }
});
