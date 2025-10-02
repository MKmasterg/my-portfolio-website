const hamburgerBtn = document.querySelector('.hamburger-icon-new');
const menuLinksNew = document.querySelector('.menu-links-new');

function closeMenuNew() {
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    menuLinksNew.classList.remove('open');
}
function openMenuNew() {
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    menuLinksNew.classList.add('open');
}
function toggleMenuNew() {
    if (menuLinksNew.classList.contains('open')) {
        closeMenuNew();
    } else {
        openMenuNew();
    }
}
hamburgerBtn.addEventListener('click', toggleMenuNew);
menuLinksNew.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenuNew);
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuLinksNew.classList.contains('open')) {
        closeMenuNew();
    }
});

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
