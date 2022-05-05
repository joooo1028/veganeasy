// 상세페이지.js

$(document).ready(function(){

    $("button.map").click(function(){
        location.href = 'map.html';
    });

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
     
     var heartimg = "";
     $("span.heart").click(function(){
         $(this).toggleClass("on");
         if($(".heart").hasClass("on")){
             heartimg = "<img src='images/상세페이지/하트.png' alt='관심목록등록'/>";
         }else{
             heartimg = "<img src='images/상세페이지/합치기 1.png' alt='관심목록해제'/>";
         }
         $(this).html(heartimg);
     });

     var starimg = "";
    $("section").eq(4).children("span.star").click(function(){
        $(this).toggleClass("on");
        
        if($(this).hasClass("on")){
            starimg = "<img src='images/상세페이지2/그룹 8.png' alt='별점등록'/>";
        }else{
            starimg = "<img src='images/상세페이지2/그룹 8-1.png' alt='별점등록해제'/>";
        }
        $(this).html(starimg);
    });
 
    });