var hamburger = document.getElementsByClassName("hamburgerIcon")[0];
var sideMenu = document.getElementsByClassName("sideMenu")[0];
var closeBtn = document.getElementsByClassName("closeIcon")[0];

const body = document.getElementsByTagName("body")[0];

hamburger.addEventListener("click", function(){
  sideMenu.style.display = "flex";
  sideMenu.style.overflowY = "scroll";
  body.style.overflowY = "hidden";
})
closeBtn.addEventListener("click", function(){
  sideMenu.style.display = "none"
  body.style.overflowY = "scroll";
})

/*PARALLAX*/ 

let hg = document.getElementsByClassName("HG")[0];
let mg = document.getElementsByClassName("MG")[0];
let lg = document.getElementsByClassName("LG")[0];
let gradg = document.getElementsByClassName("GRADG")[0];
let container = document.getElementsByClassName("container")[0];
let g = document.getElementsByClassName("G");

function parallax(){
  const distance = window.scrollY;
  hg.style.transform = `translateY(${distance * -0.5}px)`;
  mg.style.transform = `translateY(${distance * -1}px)`;
  lg.style.transform = `translateY(${distance * -0.8}px)`;
  gradg.style.transform = `translateY(${distance * -0.8}px)`;
  container.style.transform = `translateY(${distance * 0.3}px)`;
}
$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      $(".container").css({"opacity" : "0.5"})
    }
    else {
      $(".container").css({"opacity" : "1"})
    }
  })
})
window.addEventListener("scroll", parallax)

/*
  if (window.innerWidth < 768) {
    window.addEventListener("scroll", parallaxCancel)
  } else if (window.innerWidth > 768){
    window.addEventListener("scroll", parallax)
  }

*/


