/* Start List Show And Hidden */

let icon = document.getElementById("icon");
let links = document.getElementById("links");
icon.addEventListener("click",()=>{
  links.classList.toggle("hide");
});

/* End List Show And Hidden */

/* Start Scroller */

let scroll = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop;
	scroll.style.width = `${((scrollTop / height) * 100)}%`;
})

/* End Scroller */

/* Start Social Links */