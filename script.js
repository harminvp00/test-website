function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}

function sendToWhatsApp() {
    window.open(`https://wa.me/918200571458?text=${"Hello! I'm "}`, '_blank');
}
