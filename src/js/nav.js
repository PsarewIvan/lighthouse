(() => {
    let hasTableInit = false;
    let hasMobileInit = false;
    let hasMenuOpen = false;

    const burger = document.querySelector('.js-header-burger');
    const nav = document.querySelector('.js-nav');
    const user = document.querySelector('.js-nav-user');
    const mobileActions = document.querySelector('.js-header-actions-mobile');

    const header = document.querySelector('.js-header');
    const content = document.getElementById('js-main-content');

    burger?.addEventListener('click', onBurgerClick);

    window.addEventListener('resize', initMobileTable);
    initMobileTable();

    function initMobileTable() {
        if (window.innerWidth < 1200) {
            const headerRect = header?.getBoundingClientRect();

            if (!hasTableInit) {
                nav?.classList.add('hidden');
            }

            if (content?.stye && headerRect) {
                content.stye.marginTop = `${headerRect.height}px`;
            }

            hasTableInit = true;
        } else if (hasTableInit) {
            nav?.classList.remove('hidden');
            hasTableInit = false;
        }

        if (window.innerWidth < 768) {
            if (!hasMobileInit) {
                user?.classList.add('hidden');
                mobileActions?.classList.remove('hidden');
            }

            hasMobileInit = true;
        } else if (hasMobileInit) {
            user?.classList.remove('hidden');
            mobileActions?.classList.add('hidden');
            hasMobileInit = false;
        }
    }

    function onBurgerClick() {
        if (hasMenuOpen) {
            hasMenuOpen = false;
            nav?.classList.add('hidden');
            user?.classList.add('hidden');
            burger?.classList.remove('open');
            document.body.classList.remove('body-lock');
        } else {
            hasMenuOpen = true;
            nav?.classList.remove('hidden');
            user?.classList.remove('hidden');
            burger?.classList.add('open');
            document.body.classList.add('body-lock');
        }
    }
})();
