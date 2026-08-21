document.addEventListener("DOMContentLoaded", () => {
  const themeSwitchers = document.querySelectorAll(".theme-switch");
  const body = document.body;

  const setTheme = (isDark) => {
    if (isDark) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme-switch", isDark);

    themeSwitchers.forEach((themeSwitcher) => {
      const switchElement = themeSwitcher.querySelector(".switch");
      const currentText = themeSwitcher
        .closest(".nav-li-theme")
        ?.querySelector("p");

      if (isDark) {
        switchElement.classList.add("active");
        if (currentText) {
          currentText.textContent = "Светлая тема";
        }
      } else {
        switchElement.classList.remove("active");
        if (currentText) {
          currentText.textContent = "Тёмная тема";
        }
      }
    });
  };

  const isDarkTheme = localStorage.getItem("theme-switch") === "true";
  body.classList.add("no-transition");
  setTheme(isDarkTheme);
  setTimeout(() => {
    body.classList.remove("no-transition");
  }, 100);

  themeSwitchers.forEach((themeSwitcher) => {
    themeSwitcher.addEventListener("click", () => {
      const isDark = body.classList.contains("dark-theme");
      setTheme(!isDark);
    });
  });
});
