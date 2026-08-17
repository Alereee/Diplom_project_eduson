document.querySelector(".burger-menu").addEventListener("click", () => {
  document
    .querySelector(".burger-menu-none")
    .classList.toggle("burger-menu-active");
});
document
  .querySelector(".burger-menu-none button")
  .addEventListener("click", () => {
    document
      .querySelector(".burger-menu-none")
      .classList.toggle("burger-menu-active");
  });
