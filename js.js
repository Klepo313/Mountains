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
let container = document.getElementsByClassName("container")[0];

window.addEventListener("scroll", function(){
  var value = window.scrollY;
/*
  hg.style.top = value * 0.5 + "px";
  mg.style.top = -value * 0.15 + "px";
  lg.style.top = value * 0.5 + "px";*/
  hg.style.top = value * 0.5 + "px";
  container.style.top = value * 1 + "px";
})
