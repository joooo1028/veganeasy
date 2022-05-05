
window.addEventListener('load',function(){
    
    const preactiveItem = document.querySelector(".pre-active");
    const barItems = document.querySelectorAll(".bar-item");

    function changeActive() {
    preactiveItem.classList.remove("pre-active");
    barItems.forEach((element) => {
        element.classList.remove("active");
    });
    }

    barItems.forEach((element) => {
            element.addEventListener('click',function(){
            changeActive();
            element.classList.add("active");
        });
    });
    

    
});