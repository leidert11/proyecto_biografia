document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    const pages = document.querySelectorAll(".page");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const href = this.getAttribute("href");
  
        // Aplicar animación de desaparición
        pages.forEach(function(page) {
          page.classList.add("fade-out");
          page.classList.remove("fade-in");
        });
  
        // Esperar a que termine la animación de desaparición
        setTimeout(function() {
          window.location.href = href;
        }, 500); // Tiempo de espera en milisegundos
      });
    });
  });
  