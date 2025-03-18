const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => {
  console.log("Open button clicked!");
  container.classList.add("show-nav");
});

close.addEventListener("click", () => {
  console.log("Close button clicked!");
  container.classList.remove("show-nav");
});
