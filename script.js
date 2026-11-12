
// Mobile Navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close navigation
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";

    });

});

// Close menu when clicking outside
document.addEventListener("click", function (event) {

    if (
        !menuToggle.contains(event.target) &&
        !navLinks.contains(event.target)
    ) {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";

    }

});

// Dynamic Copyright Year
const copyright = document.querySelector(".footer-content p:last-child");

if (copyright) {
    copyright.innerHTML =
        `&copy; ${new Date().getFullYear()} Nife. All Rights Reserved.`;
}
