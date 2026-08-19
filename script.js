const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const reveals = document.querySelectorAll('.reveal');
const header = document.querySelector('header');

let lastScrollTop = 0;

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active'); // animate icon
    document.querySelector('header').classList.toggle('menu-open');
}

// Reveal elements on scroll
window.addEventListener('scroll', () => {
    
    let currentScroll = window.pageYOffset || 
    document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

    reveals.forEach(reveal => {
        const revealPosition = reveal.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (revealPosition < screenPosition) {
            reveal.classList.add('active');
        }
    });
});