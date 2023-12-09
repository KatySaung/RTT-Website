const navbar = document.querySelector("#NavBar");
let navTop = navbar.offsetTop;
function stickynavbar() {
  if (window.scrollY >= navTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  console.log(window.scrollY);
}
window.addEventListener("scroll", stickynavbar);
