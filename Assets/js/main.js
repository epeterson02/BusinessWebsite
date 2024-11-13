// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
});

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("nav-open")) {
            navMenu.classList.remove("nav-open");
        }
    });
});

// Form Validation (for Contact or Signup Forms)
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        const requiredFields = document.querySelectorAll("input[required], textarea[required]");
        let valid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add("error");
                valid = false;
            } else {
                field.classList.remove("error");
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill out all required fields.");
        }
    });
}
