
    $(document).ready(function(){
       $(".lstBtn").click(function(){
          $("#gnb").animate({"right":"0px"}, 700);
       }); 
       $("#gnb .close").click(function(){
          $("#gnb").animate({"right":"-270px"}, 700);
       });
        
    });    
