document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    const pages = document.querySelectorAll(".page");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const href = this.getAttribute("href");
        // Aplicar animación 
        pages.forEach(function(page) {
          page.classList.add("fade-out");
          page.classList.remove("fade-in");
        });
        setTimeout(function() {
          window.location.href = href;
        }, 500); 
      });
    });
  });

addEventListener("scroll" ,(e) =>{
  const header = document.getElementById("cabecero");
  header.classList.toggle("cabecero-scroll" ,scrollY >0)
})
/*funcionalidad de cambio de forma del icono del menu amburguesa*/
const btnMenuAmb =document.getElementById("btnMenuAmb")
const btnCerrar=document.getElementById("btnCerrar")
const cabeceroNav =document.getElementById("cabeceroNav")
btnMenuAmb.addEventListener("click",()=>{
  btnMenuAmb.classList.add("btnNoDisplay")
  cabeceroNav.classList.add("despNavMovil")
  btnCerrar.addEventListener("click",()=>{
      cabeceroNav.classList.remove("despNavMovil")
      btnMenuAmb.classList.remove("btnNoDisplay")
  })
})

/**/ 
