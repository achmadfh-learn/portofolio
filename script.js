const cards = document.querySelectorAll(".card");

function fadeScroll() {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 60) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", fadeScroll);
fadeScroll();
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("show");
}
