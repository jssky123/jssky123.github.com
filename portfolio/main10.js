$(document).ready(function(){
   $("#gnb li, #gnb li a").hover(function(){
       $(this).find(".sub").stop().slideDown(700);
   });
   $("#gnb li").mouseleave(function(){
       $(this).find(".sub").stop().slideUp(100); 
   }); 
});


	
	
	