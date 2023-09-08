const menuDiv = document.querySelector(".menu-div"),
  openLink = document.querySelector(".open-link"),
  closeLink = document.querySelector(".close-link"),
  closeDiv = document.querySelector(".icon-close-div");
layer = document.querySelector(".layer");

// openLink.addEventListener("click", () => {
//   menuDiv.classList.add("active");
//   layer.classList.add("active");
//   document.body.classList.add("fixed");
// });

// closeLink.addEventListener("click", () => {
//   menuDiv.classList.remove("active");
//   layer.classList.remove("active");
//   document.body.classList.remove("fixed");
// });
openLink.addEventListener("click", () => {
  menuDiv.style.width = '69%';
  closeDiv.style.display = 'block';
  layer.classList.add("active");
  document.body.classList.add("fixed");
});

closeLink.addEventListener("click", () => {
  menuDiv.style.width = '0%';
  closeDiv.style.display = 'none';
  layer.classList.remove("active");
  document.body.classList.remove("fixed");
});
