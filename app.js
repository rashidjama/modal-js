const triggerEl = document.querySelector(".trigger");
const modalEl = document.querySelector(".modal");
const closeEl = document.querySelector(".close");


function main() {
  triggerEl.addEventListener("click", function() {
  modalEl.classList.toggle("open");
  })
closeEl.addEventListener("click", function () {
modalEl.classList.remove("open");
})
window.addEventListener("click", function (event) {
if (event.target === modalEl) {
modalEl.classList.remove("open");
}
})
}

main();
