$.fn.mainban = (function(){
       var wd=parseInt($(window).width());
        function rAni(){
            $(".imgBox").not(":animated").animate({"margin-left" : -wd+"px"},
                                                 
                                                 800, function(){
                $(".imgBox li").eq(0).appendTo($(".imgBox"));
                $(".imgBox").css("margin-left", "0px");
            });
        };
        var intv = setInterval(function(){ rAni(); }, 3000);
    });
    
    $(document).ready(function(){
        var ht=parseInt($(window).height());
        $(window).on("mousewheel", function(e){
            if(e.originalEvent.wheelDelta < 0){
                $("html, body").not(":animated").animate({scrollTop:"+="
+ht+"px"},1000);
            } else {
                $("html, body").not(":animated").animate({scrollTop:"-="+ht+"px"}, 1000);
            }
            return false;
        });
    });