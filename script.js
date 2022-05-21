const bars = document.getElementById("bars_icon");
const close = document.getElementById("close_icon");
const mobileNav = document.getElementById("nav_menu");

bars.addEventListener("click", function (e) {
    bars.classList.add("hide");
    mobileNav.classList.add("active");
    close.classList.remove("hide");
});

close.addEventListener("click", function (e) {
    bars.classList.remove("hide");
    mobileNav.classList.remove("active");
    close.classList.add("hide");

});