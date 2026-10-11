const year = document.getElementById("year");
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");
const topBtn = document.getElementById("topBtn");

// Joriy yilni ko'rsatish
year.textContent = new Date().getFullYear();

// Shior tugmasi
messageBtn.addEventListener("click", () => {
  message.textContent =
    "Orzu qil. O‘rgan. Yarat. Hech qachon to‘xtama! 🚀";
});

// Yuqoriga qaytish tugmasi
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 300);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
