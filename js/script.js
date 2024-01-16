// toggle navbar menu
const hamburger = document.querySelector("#hamburger-menu");
const navItems = document.querySelector(".nav-items");
const navEl = document.querySelector("nav.nav");
const backdrop = document.querySelector(".backdrop");

window.onscroll = function() {
  const fixedTop = navEl.offsetTop;

  if(window.scrollY > fixedTop) {
    navEl.classList.add("scrolled")
  } else {
    navEl.classList.remove("scrolled")
  }
}

hamburger.onclick = () => {
  navItems.classList.toggle("active");
  navEl.classList.toggle("nav-opened");
  backdrop.classList.toggle("backdrop-enabled");
  backdrop.classList.toggle("hidden");
}

// close nav without hamburger menu
document.addEventListener('click', (e) => {
  if(!hamburger.contains(e.target) && !navItems.contains(e.target)) {
    navItems.classList.remove("active");
    backdrop.classList.remove("backdrop-enabled");
    backdrop.classList.add("hidden");
  }
});