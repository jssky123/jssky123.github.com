 $(document).ready(function(){  
    var wd = parseInt($(".visual").width());  
    var cnt = $(".imgLst a").length; 

    $(".btnBox .left").click(function (){
       $(".imgLst").not(":animated").animate({"margin-left":wd*-1+"px"}, 800, function(){
           $(".imgLst a").eq(0).appendTo($(".imgLst"));
           $(".imgLst").css("margin-left", "0px");
       });
    });
    
    $(".btnBox .right").click(function(){
        $(".imgLst a").eq(cnt-1).prependTo($(".imgLst"));
        $(".imgLst").css("margin-left", wd*-1+"px");
        $(".imgLst").not(":animated").animate({"margin-left":"0px"}, 800);
    });
});