// 레시피목록.js

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

    var heartimg = "";
    $("span.heart").click(function(){
        $(this).toggleClass("on");
        
        if($(this).hasClass("on")){
            heartimg = "<img src='images/레시피목록/합치기 1.png' alt='관심목록등록'/>";
        }else{
            heartimg = "<img src='images/레시피목록/빈하트.png' alt='관심목록해제'/>";
        }
        $(this).html(heartimg);
    });

    var starimg = "";
    $("span.star").click(function(){
        $(this).toggleClass("on");
        
        if($(this).hasClass("on")){
            starimg = "<img src='images/레시피목록/그룹 8-2.png' alt='별점등록'/>";
        }else{
            starimg = "<img src='images/레시피목록/그룹 8.png' alt='별점등록해제'/>";
        }
        $(this).html(starimg);
    });

    $("div.filter > img").click(function(){
        $("div.filter_inner").addClass("on");
        });
    $("button.apply").click(function(){
            $("div.filter_inner").removeClass("on");
    
        });


   });