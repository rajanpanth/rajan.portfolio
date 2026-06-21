// Animated role text replacer
(function() {
    'use strict';

    const roles = ['Full-Stack Developer', 'Web3 Developer', 'Security Enthusiast', 'Cloud Developer'];
    let currentIndex = 0;

    function replaceShitPoster() {
        try {
            console.log('[ROLE] Looking for ShitPoster text...');

            // Find all elements
            const allElements = document.querySelectorAll('p, span, div');

            for (let element of allElements) {
                // Check if this element contains "ShitPoster"
                if (element.textContent.includes('ShitPoster')) {
                    console.log('[ROLE] Found ShitPoster!');

                    // Create animated span
                    const animatedSpan = document.createElement('span');
                    animatedSpan.id = 'animated-role';
                    animatedSpan.textContent = roles[0];
                    animatedSpan.style.cssText = `
                        color: var(--muted);
                        font-family: 'JetBrains Mono', monospace;
                        font-size: 13px;
                        display: inline-block;
                        transition: opacity 0.5s ease-in-out;
                    `;

                    // Replace ShitPoster text
                    const textNode = Array.from(element.childNodes).find(node =>
                        node.nodeType === Node.TEXT_NODE && node.textContent.includes('ShitPoster')
                    );

                    if (textNode) {
                        textNode.textContent = textNode.textContent.replace('ShitPoster', '');
                        textNode.parentNode.insertBefore(animatedSpan, textNode.nextSibling);
                        console.log('[ROLE] ✅ Replaced ShitPoster with animated text');

                        // Start animation
                        startAnimation(animatedSpan);
                        return;
                    } else {
                        // Direct text content
                        element.textContent = element.textContent.replace('ShitPoster', '');
                        element.appendChild(animatedSpan);
                        console.log('[ROLE] ✅ Replaced ShitPoster with animated text (direct)');

                        // Start animation
                        startAnimation(animatedSpan);
                        return;
                    }
                }
            }

            console.log('[ROLE] ShitPoster not found yet, will retry...');

        } catch (error) {
            console.error('[ROLE] Error:', error);
        }
    }

    function startAnimation(element) {
        setInterval(() => {
            // Fade out
            element.style.opacity = '0';

            setTimeout(() => {
                // Change text
                currentIndex = (currentIndex + 1) % roles.length;
                element.textContent = roles[currentIndex];

                // Fade in
                element.style.opacity = '1';
            }, 500);

        }, 3000); // Change every 3 seconds

        console.log('[ROLE] ✅ Animation started');
    }

    // Run multiple times to catch dynamic content
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceShitPoster);
    } else {
        replaceShitPoster();
    }

    setTimeout(replaceShitPoster, 500);
    setTimeout(replaceShitPoster, 1000);
    setTimeout(replaceShitPoster, 2000);

})();
