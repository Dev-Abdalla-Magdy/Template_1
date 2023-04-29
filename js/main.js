let icon = document.getElementById("icon");
let links = document.getElementById("links");
icon.addEventListener("click",()=>{
  links.style.display = "block";
  icon.addEventListener("click",()=>{
    if(links.style.display = "block"){
      links.style.display = "none";
      icon.addEventListener("click",()=>{
        if(links.style.display = "none"){
          links.style.display = "block";
        }
      })
    }
  })
});
