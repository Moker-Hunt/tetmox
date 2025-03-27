document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    const scrollThreshold = 50; // минимальное расстояние скролла для срабатывания

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Проверяем направление скролла
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            // Скролл вниз
            header.classList.add('hide');
        } else {
            // Скролл вверх
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });
});