function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("navLinks");
    const toggle = document.querySelector(".menu-toggle");

    document.addEventListener("click", function (e) {
        if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
            menu.classList.remove("active");
        }
    });
});


function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const text = `Hello, I'm ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/918200571458?text=${text}`, '_blank');
}

function sendToEmail(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    const subject = `PixelUp Service Inquiry from ${name}`;
    window.location.href = `mailto:harminv251@gmail.com?subject=${subject}&body=${body}`;
}

