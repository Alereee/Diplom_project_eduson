document.addEventListener("DOMContentLoaded", () => {
  const themeSwitchers = document.querySelectorAll(".theme-switch");
  const isDarkTheme = localStorage.getItem("theme-switch") === "true";
  let isDarkThemeActive = isDarkTheme;
  themeSwitchers.forEach((themeSwitcher) => {
    const switchElement = themeSwitcher.querySelector(".switch");
    const currentText = themeSwitcher
      .closest(".nav-li-theme")
      ?.querySelector("p");
    if (isDarkTheme) {
      switchElement.classList.add("active");
      if (currentText) {
        currentText.textContent = "Светлая тема";
      }
      themeSwitcher.style.backgroundColor = "rgb(223, 221, 221)";
      document.body.style.backgroundColor = "#000";
      isDarkThemeActive = true;
    } else {
      if (currentText) {
        currentText.textContent = "Тёмная тема";
      }
      switchElement.classList.remove("active");
      themeSwitcher.style.backgroundColor = "white";
      document.body.style.backgroundColor = "#f2f2f2";
      isDarkThemeActive = false;
    }
    themeSwitcher.addEventListener("click", () => {
      if (currentText) {
        currentText.textContent =
          currentText.textContent.trim() === "Тёмная тема"
            ? "Светлая тема"
            : "Тёмная тема";
      }
      themeSwitcher.style.backgroundColor =
        themeSwitcher.style.backgroundColor === "rgb(223, 221, 221)"
          ? "white"
          : "#dfdddd";
      document.body.style.backgroundColor = isDarkThemeActive
        ? "#f2f2f2"
        : "#000";
      isDarkThemeActive = !isDarkThemeActive;
      switchElement.classList.toggle("active");
      localStorage.setItem(
        "theme-switch",
        switchElement.classList.contains("active"),
      );
    });
  });
});
