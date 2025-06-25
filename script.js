function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

document.addEventListener("click", function (e) {
    const menu = document.getElementById("navLinks");
    const toggle = document.querySelector(".menu-toggle");
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});

function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const text = `Hello, I'm ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/91xxxxxxxxxx?text=${text}`, '_blank');
}

function sendToEmail() {
    const email = document.getElementById("email").value;
    const subject = "PixelUp Inquiry";
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const body = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
}

function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted! You can now integrate with backend.");
}