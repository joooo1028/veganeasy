//mypage.js

$(document).ready(function(){

    $("div.menu").click(function(){
        $("#gnb").addClass("on");
        console.log(flag);
        });
        $(".btn_close").click(function(){
            $("#gnb").removeClass("on");
           if($("div.menu").hasClass("active")){
               $("div.menu").removeClass("active");
           }
        });
   
        $("div.home").click(function(){
           setTimeout(function(){
               location.href = '메인메뉴.html';
           }, 700);
           
       });
   
       $("div.mypage").click(function(){
           setTimeout(function(){
               location.href = '마이페이지.html';
           },700);
       });

     $("button").click(function(){
        location.href = '공지사항.html';
    });
    
});
