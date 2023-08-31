const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const submitBtn = document.querySelector(".submit-btn");
const filename = window.location.pathname.split("/").pop();

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

if (filename === "addHero.html") {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
