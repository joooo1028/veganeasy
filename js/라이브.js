// 라이브.js

$(document).ready(function(){
    
    $("section>a").click(function(){
        location.href = '상세페이지.html';
    });
    $("span.menu").click(function(){
     $("#gnb").addClass("on");
     });
     $(".btn_close").click(function(){
         $("#gnb").removeClass("on");
 
     });
 
    });