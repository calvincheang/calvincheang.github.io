const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".reveal").forEach(item=>{

observer.observe(item);

});