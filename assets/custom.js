// document.addEventListener("DOMContentLoaded", function () {
//     const tabLinksHome = document.querySelectorAll(".nav-active-1");
//     tabLinksHome.forEach(link => {
//         link.addEventListener("click", function () {
//             tabLinksHome.forEach(link => link.classList.remove("active", "bg-warning", "text-info"));
//             this.classList.add("active", "bg-warning", "text-info");
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const tabLinksProducts = document.querySelectorAll(".nav-active-2");
//     tabLinksProducts.forEach(link => {
//         link.addEventListener("click", function () {
//             tabLinksProducts.forEach(link => link.classList.remove("active", "bg-info", "text-white"));
//             this.classList.add("active", "bg-info", "text-white");
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const tabLinksHome = document.querySelectorAll(".nav-active-1");
    const tabLinksProducts = document.querySelectorAll(".nav-active-2");

    function setActiveMenu(links, activeClass, bgClass, textClass) {
        links.forEach(link => {
            link.addEventListener("click", function () {
                links.forEach(link => link.classList.remove(activeClass, bgClass, textClass));
                this.classList.add(activeClass, bgClass, textClass);
            });
        });
    }

    setActiveMenu(tabLinksHome, "active", "bg-warning", "text-info");
    setActiveMenu(tabLinksProducts, "active", "bg-info", "text-white");
});

