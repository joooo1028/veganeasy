// login.js
$(document).ready(function(){
    var start = setTimeout(function(){
       $("section").addClass("on");
   },500);
   $("section > button").click(function(){
       location.href = '메인메뉴.html';
   });
   $("section > ul li").eq(0).click(function(){
    location.href = '아이디찾기.html';
    });
    $("section > ul li").eq(1).click(function(){
        location.href = '회원가입.html';
    });
    $("section > ul li").eq(2).click(function(){
        location.href = '비밀번호찾기.html';
    });
    $("section > p").eq(1).click(function(){
        location.href = '메인메뉴.html';
    });
   
   });