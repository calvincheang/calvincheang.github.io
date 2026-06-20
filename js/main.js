const menu=document.querySelector("nav ul");
const button=document.querySelector(".menu-btn");

button.onclick=()=>{

menu.classList.toggle("show");

}

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});