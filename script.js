/* Navigation Bar */

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("fixed", window.scrollY > 0 );
})

