let menu = document.querySelector(".menu");
let headerBtn = document.querySelector(".header_icon");
let headerIcon = document.querySelector(".header_icon i");

headerBtn.onclick = () => {
  if (headerIcon.classList.contains("fa-bars")) {
    headerIcon.className = "fa fa-times";
    menu.style.left = "0";
  } else {
    headerIcon.className = "fa fa-bars";
    menu.style.left = "-256px";
  }
};
