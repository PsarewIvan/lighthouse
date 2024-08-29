(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const price = document.querySelector('.js-prices-count');
        const buttons = document.querySelectorAll('.js-prices-button');

        buttons?.forEach((button) => {
            button.addEventListener('click', () => {
                if (price) {
                    removeSelected();

                    price.innerHTML = button.dataset.price;
                    button.classList.add('selected');
                }
            });
        });

        function removeSelected() {
            buttons?.forEach((button) => {
                button.classList.remove('selected');
            });
        }
    });
})();
