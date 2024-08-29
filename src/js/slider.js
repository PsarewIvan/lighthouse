(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const sliderElement = document.querySelector('.itc-slider');
        const avatarsList = document.querySelector('.js-slider-avatars');
        const buttonsList = document.querySelector('.js-slider-buttons');
        const avatarsButtons =
            avatarsList?.querySelectorAll('.js-slider-avatar');
        const buttons = buttonsList?.querySelectorAll('.js-slider-button');

        function onSlideChange(index) {
            const currentAvatar = avatarsButtons?.[index];
            const currentButton = buttons?.[index];

            removeSelected(avatarsButtons);
            removeSelected(buttons);

            addSelected(currentAvatar);
            addSelected(currentButton);
        }

        const slider = ItcSlider.getOrCreateInstance(sliderElement, {
            onChange: onSlideChange,
        });

        avatarsButtons?.forEach(addSetHandler);
        buttons?.forEach(addSetHandler);

        function addSelected(element) {
            if (element) {
                element.classList.add('selected');
            }
        }

        function removeSelected(elements) {
            elements?.forEach((element) => {
                element.classList.remove('selected');
            });
        }

        function addSetHandler(element) {
            element.addEventListener('click', () => {
                const index = element.dataset.slideTo;

                if (slider && index) {
                    slider.slideTo(index);
                }
            });
        }
    });
})();
