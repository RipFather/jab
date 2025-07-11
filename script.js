document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, запущено ли в Telegram Web App
    if (window.Telegram && window.Telegram.WebApp) {
        const tgWebApp = window.Telegram.WebApp;
        
        // Развернуть на весь экран в Telegram
        tgWebApp.expand();
        
        // Можно настроить кнопку назад
        tgWebApp.BackButton.show();
        tgWebApp.BackButton.onClick(() => {
            tgWebApp.close();
        });
        
        // Изменение цвета заголовка Telegram
        tgWebApp.setHeaderColor('#4CAF50');
        tgWebApp.setBackgroundColor('#f5f5f5');
    }
});