(() => {
    document.addEventListener('DOMContentLoaded', function () {
        const offset = 140;

        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(
                    this.getAttribute('href')
                );
                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            });
        });
    });
})();
