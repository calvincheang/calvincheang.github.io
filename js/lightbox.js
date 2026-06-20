const lightbox=document.querySelector(".lightbox");
const lightboxImage=document.querySelector(".lightbox-image");

document.querySelectorAll(".project img").forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

}

});

document.querySelector(".close").onclick=()=>{

lightbox.style.display="none";

}