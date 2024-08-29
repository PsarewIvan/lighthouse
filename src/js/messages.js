(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const MESSAGES_CLASS = ['first', 'second', 'third', 'four'];

        const image = document.querySelector('.js-messages-image');
        const buttons = document.querySelectorAll('.js-messages-item');

        buttons?.forEach((button, index) => {
            button.addEventListener('click', () => {
                if (image) {
                    removeSelected();
                    removeImages();

                    button.classList.add('selected');
                    image.classList.add(MESSAGES_CLASS[index]);
                }
            });
        });

        function removeSelected() {
            buttons?.forEach((button, index) => {
                button.classList.remove('selected');
            });
        }

        function removeImages() {
            if (image) {
                MESSAGES_CLASS.forEach((imgClass) => {
                    image.classList.remove(imgClass);
                });
            }
        }
    });
})();
