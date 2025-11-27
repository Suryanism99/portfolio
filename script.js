// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
});

// Auto Typing
const roles = ["Developer", "Designer", "Programmer"];
let i = 0, j = 0;
let isDeleting = false;

function typingEffect() {
    const text = roles[i];
    const element = document.getElementById("typing");

    if (!isDeleting) {
        element.textContent = text.substring(0, j++);
    } else {
        element.textContent = text.substring(0, j--);
    }

    if (!isDeleting && j === text.length) {
        isDeleting = true;
        setTimeout(typingEffect, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(typingEffect, isDeleting ? 60 : 120);
}

typingEffect();
