// ===== MENU HAMBURGUER =====
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// ===== SUBMENU =====
const subHamburger = document.getElementById("hamburger-sub");
const sidebarSub = document.getElementById("sidebar-sub");

subHamburger.addEventListener("click", () => {
  sidebarSub.classList.toggle("active");
});

// Fecha menu clicando fora
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

// ===== LIGHTBOX =====
const images = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});