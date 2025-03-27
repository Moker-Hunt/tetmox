// Меню-бургер
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Управление куками
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Проверяем, были ли куки приняты ранее
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.style.display = 'none';
    }

    // Обработчик принятия куков
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.opacity = '0';
        setTimeout(() => {
            cookieBanner.style.display = 'none';
        }, 300);
    });
});