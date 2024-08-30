(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const sliderElement = document.querySelector('.itc-slider');
        const avatarsList = document.querySelector('.js-slider-avatars');
        const buttonsList = document.querySelector('.js-slider-buttons');
        const avatarsButtons =
            avatarsList?.querySelectorAll('.js-slider-avatar');
        const buttons = buttonsList?.querySelectorAll('.js-slider-button');
        const prevButtonText = sliderElement?.querySelector(
            '.js-slider-control-button-text-prev'
        );
        const nextButtonText = sliderElement?.querySelector(
            '.js-slider-control-button-text-next'
        );
        const names = Array.from(
            sliderElement?.querySelectorAll('.js-slider-title')
        )?.map((element) => element.innerHTML);

        function onSlideChange(index) {
            const currentAvatar = avatarsButtons?.[index];
            const currentButton = buttons?.[index];

            removeSelected(avatarsButtons);
            removeSelected(buttons);

            addSelected(currentAvatar);
            addSelected(currentButton);

            const nextIndex = index < buttons.length - 1 ? index + 1 : 0;
            const prevIndex = index < 1 ? buttons.length - 1 : index - 1;

            const nextText = names[nextIndex];
            const prevText = names[prevIndex];

            if (nextButtonText) {
                nextButtonText.innerHTML = nextText;
            }

            if (prevButtonText) {
                prevButtonText.innerHTML = prevText;
            }
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
