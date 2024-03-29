console.log('JavaScript file loaded!');
document.addEventListener('DOMContentLoaded', function() {
    // Get all the menu links
    const menuLinks = document.querySelectorAll('.menu ul li a');

    // Loop through each menu link
    menuLinks.forEach(link => {
        // Get the width of the menu link text
        const linkWidth = link.offsetWidth;
        // Set the width of the hover effect to the width of the menu link text plus some padding
        link.style.setProperty('--link-width', `${linkWidth}px`);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
        menuToggle.classList.toggle('active');
    });
});