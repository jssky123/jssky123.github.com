(function($){
    $.fn.sliding = function(){
    $(document).ready(function){
    var th = $(this);
    var wd = parseInt($("#visual .img_Box2").width());
    var n=$("#visual .img_Box2").length;
    var sw1=true;
    var intsl1=setInterval(function(){
        lAni();
        
    }, spd*4);
    function lAni(){
        $(th).not(":animated").animate({"margin-left" : -wd+"px"}, spd, function(){
            $(child).eq(0).appendTo($(th));
            $(th).css("margin-left", -wd+"px");
        });
    };
};  
    
function rAni(){
    $(child).eq(n-1).prependTo($(th));
    $(th).css("margin-left", -wd+"px");
    $(th).not(":animated").animate({"margin-left":"0px"},spd);
};
$(playBtn).click(function(){
    if(sw==true) {
        clearInterval(intsl1);
        $(this).css("background-image",
                   "url('./img/btn')");
                insl1=setInterval(function(){ lAni(); }, spd);
    }
})        
    }
}(jQuery));
