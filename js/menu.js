document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    const header = document.querySelector('.header');

    function toggleMenu() {
        burgerMenu.classList.toggle('menu-open');
        navList.classList.toggle('menu-open');
        header.classList.toggle('menu-open');
    }

    burgerMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Закрываем меню при клике на ссылку
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Закрываем меню при клике вне его
    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') && 
            !navList.contains(e.target) && 
            !burgerMenu.contains(e.target)) {
            toggleMenu();
        }
    });
});