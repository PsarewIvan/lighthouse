(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const mobileText = 'Подключи бесплатно';
        const desktopText = 'Подключи и протестируй бесплатно';
        const mobileAcceptText = 'Отправить заявку';
        const desktopAcceptText = 'Отправить заявку на подключение';

        const logButtons = document.querySelectorAll('.js-login-button-rename');
        const acceptButtons = document.querySelectorAll(
            '.js-accept-button-rename'
        );

        window.addEventListener('resize', initMobileTable);
        initMobileTable();

        function initMobileTable() {
            if (window.innerWidth < 768) {
                logButtons?.forEach((button) => {
                    button.innerHTML = mobileText;
                });

                acceptButtons?.forEach((button) => {
                    button.innerHTML = mobileAcceptText;
                });
            } else {
                logButtons?.forEach((button) => {
                    button.innerHTML = desktopText;
                });

                acceptButtons?.forEach((button) => {
                    button.innerHTML = desktopAcceptText;
                });
            }
        }
    });
})();
