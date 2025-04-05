// Script untuk hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamMenu = document.querySelector(".ham-menu");
  const offScreenMenu = document.querySelector(".off-screen-menu");

  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });

  const certificates = document.querySelectorAll(".certificate-container");

  certificates.forEach((cert) => {
    cert.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
});
