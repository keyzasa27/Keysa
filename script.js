// Mengaktifkan icon Lucide
lucide.createIcons();


// ===============================
// MOBILE NAVBAR
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("svg");

    if (navMenu.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x");
    } else {
        icon.setAttribute("data-lucide", "menu");
    }

    lucide.createIcons();
});


// Menutup menu setelah memilih navigasi
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        menuBtn.innerHTML = '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });
});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {

        alert(
            `Terima kasih, ${name}! Pesan kamu berhasil diterima.`
        );

        contactForm.reset();

    } else {

        alert("Silakan isi semua data terlebih dahulu.");

    }
});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// ACTIVE NAVBAR ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});
