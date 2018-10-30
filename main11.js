$(document).ready(function(){
		var pageCnt = parseInt($(".page").length); 
		var pageWd = parseInt($(".page").width());
		var pageMax = pageCnt * pageWd * -1;
		var c_page;
		$(".more").on("click", function(){
			c_page = parseInt($(this).attr("page-value"));
			var ani = pageWd * (c_page - 1) * -1;
			if(ani > pageMax) {
				$(".imgBox").animate({"margin-left" : ani+"px"}, 900);
			}
            $(".more.item").removeClass("on");
            $(".more.item").eq(c_page-1).addClass("on");
		});
	});