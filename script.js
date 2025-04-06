function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");

    const menuIcon = document.getElementById("menu-icon");
    if (navLinks.classList.contains("active")) {
        menuIcon.src = "./multimedia/menu_close.png"; // Show close icon
    } else {
        menuIcon.src = "./multimedia/menu_icon.png"; // Show menu icon
    }
}

// Close menu when clicking on a menu item
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        const navLinks = document.querySelector(".nav-links");
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            document.getElementById("menu-icon").src = "./multimedia/menu_icon.png"; // Reset icon
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

//FORMS
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxIyvYtvbaL0n04OkG3uALgTbo7YLwV0TS0yPAGXTz0ogFoG_iSWXpWY21vTWgMoDX2tg/exec';
  const form = document.forms['contact-form'];

  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        alert("Thank you! Your form has been submitted successfully.");
        window.location.reload();
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert("Oops! There was a problem submitting your form.");
      });
  });