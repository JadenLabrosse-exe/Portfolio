const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const reveals = document.querySelectorAll('.reveal');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // animate icon
}

// Reveal elements on scroll
window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        const revealPosition = reveal.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (revealPosition < screenPosition) {
            reveal.classList.add('active');
        }
    });
});