function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    const menuIcon = document.getElementById("menu-icon");
    if (navLinks.classList.contains("active")) {
        menuIcon.src = "./cross-button.png"; // Show close icon
    } else {
        menuIcon.src = "./list.png"; // Show menu icon
    }
}

// Close menu when clicking on a menu item
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            document.getElementById("menu-icon").src = "./list.png"; // Reset icon
        }
    });
});

//HOME PAGE TEXT CHANGES IN LOOP
document.addEventListener("DOMContentLoaded", function () {
    const changingText = document.getElementById("changing-text");
    const texts = ["Web Development", "Cyber Security Analysis", "App Development"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[index];
        if (!isDeleting) {
            changingText.innerHTML = `<b>${currentText.substring(0, charIndex)}</b>`;
            charIndex++;

            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // Pause before deleting
                return;
            }
        } else {
            changingText.innerHTML = `<b>${currentText.substring(0, charIndex)}</b>`;
            charIndex--;

            if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed control
    }

    typeEffect();
});
