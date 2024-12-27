export function initPortfolio() {
    // Portfolio is now static, so we only need minimal initialization
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Add your project link handling logic here
            console.log('Project clicked:', link.closest('.portfolio-item').querySelector('.portfolio-title').textContent);
        });
    });
}