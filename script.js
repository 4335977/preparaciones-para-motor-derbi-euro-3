// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded successfully');
    // Create a theme toggle button
    const button = document.createElement('button');
    button.textContent = 'Toggle Dark Mode';
    button.id = 'theme-toggle';
    document.body.prepend(button);

    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
