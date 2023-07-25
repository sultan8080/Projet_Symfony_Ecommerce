document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".nav-link");
    tabLinks.forEach(link => {
        link.addEventListener("click", function () {
            tabLinks.forEach(link => link.classList.remove("active", "bg-warning", "text-info"));
            this.classList.add("active", "bg-warning", "text-info");
        });
    });
});