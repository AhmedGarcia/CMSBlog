document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            localStorage.setItem("theme", "dark");
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            localStorage.setItem("theme", "light");
        }
    });
});
