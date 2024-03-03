document.addEventListener('DOMContentLoaded', function () {
    const textToType = 'Web Developer';
    const typingSpeed = 100; // Adjust the speed in milliseconds
    const fadeOutDelay = 1500; // Adjust the delay before fading out in milliseconds
    const fadeInDelay = 500; // Adjust the delay before starting the next typing animation in milliseconds

    const typingEffectElement = document.getElementById('typingEffect');

    function typeText(index) {
        if (index < textToType.length) {
            typingEffectElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(function () {
                typeText(index);
            }, typingSpeed);
        } else {
            setTimeout(function () {
                fadeOutText();
            }, fadeOutDelay);
        }
    }

    function fadeOutText() {
        const fadeOutDuration = 1000; // Adjust the duration of the fade-out animation in milliseconds
        typingEffectElement.style.transition = `opacity ${fadeOutDuration}ms ease-in-out`;
        typingEffectElement.style.opacity = 0;

        setTimeout(function () {
            // Reset the content and opacity after fade-out
            typingEffectElement.textContent = '';
            typingEffectElement.style.opacity = 1;

            // Start typing again after a delay
            setTimeout(function () {
                typeText(0);
            }, fadeInDelay);
        }, fadeOutDuration);
    }

    typeText(0);
});
