document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.querySelector(".theme-switch");
  const switchElement = document.querySelector(".switch");
  const currentText = document.querySelector(".nav-li-theme p");
  const isDarkTheme = localStorage.getItem("theme-switch") === "true";
  if (isDarkTheme) {
    switchElement.classList.add("active");
    currentText.textContent = "Светлая тема";
    themeSwitcher.style.backgroundColor = "rgb(223, 221, 221)";
  } else {
    currentText.textContent = "Тёмная тема";
    switchElement.classList.remove("active");
    themeSwitcher.style.backgroundColor = "white";
  }
  switchElement.addEventListener("click", () => {
    currentText.textContent =
      currentText.textContent.trim() === "Тёмная тема"
        ? "Светлая тема"
        : "Тёмная тема";
    themeSwitcher.style.backgroundColor =
      themeSwitcher.style.backgroundColor === "rgb(223, 221, 221)"
        ? "white"
        : "#dfdddd";

    console.log(themeSwitcher.style.backgroundColor);
    switchElement.classList.toggle("active");
    localStorage.setItem(
      "theme-switch",
      switchElement.classList.contains("active"),
    );
  });
});
