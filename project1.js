"use strict"

let icon = document.getElementById("icon");
let mainNav = document.getElementById("mainNav");
let iconDiv=document.getElementById("iconDiv");

icon.addEventListener("click",toggleFunc);
pageLoad()

function pageLoad() {
  if(window.innerWidth < 768) {
     mainNav.style.display = "none";
     icon.style.display = "block";
  }
  else {
    mainNav.style.display = "flex"
    icon.style.display = "none";
  }
}

window.addEventListener("resize", function() {
  pageLoad();
})

function toggleFunc() {
  if (mainNav.style.display === "none") {
    mainNav.style.display = "block";
  }
  else if(mainNav.style.display === "block") {
    mainNav.style.display = "none";
  }
  else if(mainNav.style.display === "flex") {
    mainNav.style.display = "flex";
  }
}
