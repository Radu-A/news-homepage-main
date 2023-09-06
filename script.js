const menuDiv = document.querySelector(".menu-div"),
  openLink = document.querySelector(".open-link"),
  closeLink = document.querySelector(".close-link");

openLink.addEventListener("click", () => {
  menuDiv.classList.add("active");
});

closeLink.addEventListener("click", () => {
  menuDiv.classList.remove("active");
});
