document.addEventListener("DOMContentLoaded", function() {
    const poem = document.querySelector(".poem");
    poem.style.opacity = "0";
    setTimeout(() => {
        poem.style.transition = "opacity 2s ease-in-out";
        poem.style.opacity = "1";
    }, 500);
});