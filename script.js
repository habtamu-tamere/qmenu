// You can add interactivity here if needed
// For example, you could add a feature to filter menu items by category

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You selected: ${item.querySelector('h3').innerText}`);
        });
    });
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}