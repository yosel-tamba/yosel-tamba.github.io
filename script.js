
// Mobile nav dropdown animation
function toggleNavDropdown() {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
        setTimeout(() => {
            nav.classList.remove("-translate-y-8", "opacity-0");
            nav.classList.add("translate-y-0", "opacity-100");
        }, 10);
    } else {
        nav.classList.remove("translate-y-0", "opacity-100");
        nav.classList.add("-translate-y-8", "opacity-0");
        setTimeout(() => {
            nav.classList.add("hidden");
        }, 300);
    }
}

// AOS init
AOS.init({ duration: 800, once: true });

// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    btn.innerHTML =
        next === "dark"
            ? '<i class="fas fa-moon" style="color: #fff; text-shadow: 0 0 8px #8b5cf688;"></i>'
            : '<i class="fas fa-sun" style="color: #ffd220; text-shadow: 0 0 8px #ffd22088;"></i>';
}
// Set initial icon on load
document.addEventListener("DOMContentLoaded", function () {
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");
    const current = html.getAttribute("data-theme") || "light";
    btn.innerHTML =
        current === "dark"
            ? '<i class="fas fa-moon" style="color: #fff; text-shadow: 0 0 8px #8b5cf688;"></i>'
            : '<i class="fas fa-sun" style="color: #ffd220; text-shadow: 0 0 8px #ffd22088;"></i>';
});

// Modal Handler with smooth animation
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("hidden");
    // Animate in
    requestAnimationFrame(() => {
        modal.classList.remove("opacity-0");
        modal.classList.add("opacity-100");
    });
}
function closeModal(id) {
    const modal = document.getElementById(id);
    // Animate out
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300); // Match transition duration
}

// Add base transition to all modals
document
    .querySelectorAll('[id^="sertifModal"],[id^="portfolioModal"]')
    .forEach((modal) => {
        modal.classList.add(
            "transition-opacity",
            "duration-300",
            "opacity-0"
        );
    });

fetch("components/navbar.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("navbar-container").innerHTML = data;
    });

fetch("components/hero.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("hero-container").innerHTML = data;
    });

fetch("components/profile.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("profile-container").innerHTML = data;
    });

fetch("components/skills.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("skills-container").innerHTML = data;
    });

fetch("components/certificates.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("certificates-container").innerHTML = data;
    });

fetch("components/projects.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("projects-container").innerHTML = data;
    });

fetch("components/contact.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("contact-container").innerHTML = data;
    });

fetch("components/modal-certificates.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("modal-certificates-container").innerHTML = data;
    });

fetch("components/modal-projects.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("modal-projects-container").innerHTML = data;
    });

fetch("components/footer.html")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("footer-container").innerHTML = data;
    });