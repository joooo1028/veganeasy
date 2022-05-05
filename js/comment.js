//comment.js

$(document).ready(function(){

    $("div.menu").click(function(){
        $("#gnb").addClass("on");
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
    
    });