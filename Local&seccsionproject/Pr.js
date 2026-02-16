const body = document.body;
const toggleBtn = document.querySelector("#toggleTheme");
const storedTheme = localStorage.getItem("theme");
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(theme) {
    body.className = theme;
}

function setSystemTheme() {
    const systemTheme = mediaQuery.matches ? "dark" : "light";
    applyTheme(systemTheme);
}

if (storedTheme) {
    applyTheme(storedTheme);
} else {
    setSystemTheme();
}

mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        setSystemTheme();
    }
});

toggleBtn.addEventListener("click", () => {
    const newTheme = body.classList.contains("light") ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});
