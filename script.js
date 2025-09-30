function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Floating Action Button logic
const fab = document.getElementById('back-to-hero');
function checkIfAtBottom() {
    // Consider near-bottom within 100px to account for small screens/footers
    const nearBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100);
    if (nearBottom) {
        fab.classList.add('visible');
    } else {
        fab.classList.remove('visible');
    }
}

window.addEventListener('scroll', checkIfAtBottom);
window.addEventListener('resize', checkIfAtBottom);

fab.addEventListener('click', function() {
    // Smoothly scroll to the very top (zero position)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Show the navbar if it's hidden
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.classList.remove('hidden');
    }
});
