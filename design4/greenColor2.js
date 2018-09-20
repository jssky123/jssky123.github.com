(function($){
    $.fn.greenColor2 = function(){
        $(this).css("color", "green");
    }
}(jQuery));




/* 

$의 별칭으로 인한 타 언어와의 충돌문제 해결법 

(function($){
    $.fn.메소드명 = function(){
        //기능
    };
}(jquery));

*/


/*

<script src = "플러그인명.js"></script>
<script>
$(선택자).메소드명 ();
</script>

*/