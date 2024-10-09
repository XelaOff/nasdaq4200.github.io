/**
 * Initialize a marquee effect for an HTML element.
 *
 * @param {HTMLElement} element - The element to apply the marquee effect to.
 * @param {number} [repeatCount=7] - The number of times to repeat the element's content.
 * @param {number} [step=1] - The step size for the marquee animation.
 */
const startMarquee = (element, repeatCount = 7, step = 1) => {
    /**
     * Function that animates the marquee effect.
     */
    const animateMarquee = () => {
        position = position < width ? position + step : 1;
        element.style.marginLeft = `${-position}px`;
        element.style.overflow = 'hidden';
        element.style.whiteSpace = 'nowrap';
        requestAnimationFrame(animateMarquee);
    };

    let position = 0;
    const space = '';
    const content = element.innerHTML;
    element.innerHTML = Array(repeatCount).fill(content + space).join('');
    element.style.position = 'absolute';
    const width = element.clientWidth + 1;
    element.style.position = '';

    // Start the marquee animation
    animateMarquee();
};

// Example usages:
startMarquee(document.getElementById('marquee'), 16, 0.5); // Customize repeatCount and step