// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

import { initSmoothScroll } from './src/js/smoothScroll.js';
import { initPortfolio } from './src/js/portfolio.js';

// Initialize all modules when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initPortfolio();
});
