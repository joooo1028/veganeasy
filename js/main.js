// main.js
$(document).ready(function(){
 var start = setTimeout(function(){
    $("section").addClass("on");
},500);
$("#container").click(function(){
    location.href = '로그인.html';
});

});