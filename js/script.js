(function () {
  "use strict";

  // === Boton volver arriba ===
  var backBtn = document.getElementById("backToTop");
  if (backBtn) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backBtn.classList.add("visible");
      } else {
        backBtn.classList.remove("visible");
      }
    });
    backBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Busqueda en la pagina index (filtra cards) ===
  var searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var term = this.value.toLowerCase().trim();
      var cards = document.querySelectorAll(".card");
      var anyVisible = false;
      cards.forEach(function (card) {
        var text = card.textContent.toLowerCase();
        if (text.indexOf(term) !== -1) {
          card.style.display = "";
          anyVisible = true;
        } else {
          card.style.display = "none";
        }
      });
      var noRes = document.querySelector(".no-results");
      if (!anyVisible && term) {
        if (!noRes) {
          noRes = document.createElement("p");
          noRes.className = "no-results";
          noRes.textContent = "No se encontraron resultados.";
          searchInput.parentNode.parentNode.appendChild(noRes);
        }
        noRes.style.display = "";
      } else if (noRes) {
        noRes.style.display = "none";
      }
    });
  }

  // === Busqueda en paginas de comandos (filtra filas de tabla) ===
  var filterInput = document.querySelector(".filter-input");
  if (filterInput) {
    filterInput.addEventListener("input", function () {
      var term = this.value.toLowerCase().trim();
      var rows = document.querySelectorAll("tbody tr");
      var anyVisible = false;
      rows.forEach(function (row) {
        var text = row.textContent.toLowerCase();
        if (text.indexOf(term) !== -1) {
          row.style.display = "";
          anyVisible = true;
        } else {
          row.style.display = "none";
        }
      });
      var noRes = document.querySelector(".no-results");
      if (!anyVisible && term) {
        if (!noRes) {
          noRes = document.createElement("p");
          noRes.className = "no-results";
          noRes.textContent = "No se encontraron comandos.";
          var wrapper = document.querySelector(".table-wrapper");
          if (wrapper) {
            wrapper.parentNode.appendChild(noRes);
          }
        }
        noRes.style.display = "";
      } else if (noRes) {
        noRes.style.display = "none";
      }
    });
  }
})();