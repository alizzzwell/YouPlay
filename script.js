/* Navigation Bar */

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("fixed", window.scrollY > 0 );
})



// Set the Scroll Page speed
// using https://github.com/gblazex/smoothscroll-for-websites
// SmoothScroll({ stepSize: 40 })

// Add some parallax
// ====================
const heroImage = document.querySelector(".imageParallax");
const textEl = document.querySelector(".textParallax");
const bannerImage = document.querySelector("#banner .imageParallax");
const purchaseImage = document.querySelector("#purchase .imageParallax");
const footerImage = document.querySelector("#footer .imageParallax");

 
// Create the translate3d function
function setTranslate(xPos, yPos, el) {
 el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}

// Add event Listenter to Window
window.addEventListener("DOMContentLoaded", scrollLoop, false);

// Define position variables
let xScrollPosition;
let yScrollPosition;

// Scroll function
function scrollLoop() {
  xScrollPosition = window.pageXOffset;
  yScrollPosition = window.pageYOffset;
 
  // We only change the Y variable
  setTranslate(0, yScrollPosition * -0.2, heroImage);
  setTranslate(0, yScrollPosition * 0.1, textEl);

  setTranslate(0, yScrollPosition  * -0.12, bannerImage);
  setTranslate(0, yScrollPosition  * 0.1, purchaseImage);
  setTranslate(0, yScrollPosition  * -0.1, footerImage);
 

  
 
  // We use requestAnimationFrame to target the GPU instead of the CPU
  requestAnimationFrame(scrollLoop);
}