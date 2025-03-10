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

// Language Switcher
document.getElementById('englishBtn').addEventListener('click', () => switchLanguage('english'));
document.getElementById('amharicBtn').addEventListener('click', () => switchLanguage('amharic'));

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-english], [data-amharic]');
    elements.forEach(element => {
        if (lang === 'english') {
            element.textContent = element.getAttribute('data-english');
        } else if (lang === 'amharic') {
            element.textContent = element.getAttribute('data-amharic');
        }
    });
}