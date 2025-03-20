document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header a");
    const activeLink = localStorage.getItem("activeLink");
  
    if (activeLink) {
      document.querySelector(`header a[href="${activeLink}"]`)?.classList.add("active");
    }
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        links.forEach(l => l.classList.remove("active")); // Remove a classe de todos os links
        this.classList.add("active"); // Adiciona a classe ao link clicado
        localStorage.setItem("activeLink", this.getAttribute("href")); // Salva no localStorage
      });
    });
  });

  