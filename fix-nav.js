// Force proper navigation for toggle buttons
(function() {
    'use strict';
    
    function fixNavigation() {
        console.log('Fixing navigation...');
        
        // Find all links
        const links = document.querySelectorAll('a');
        let fixed = 0;
        
        links.forEach(link => {
            const text = link.textContent.trim();
            const href = link.getAttribute('href');
            
            // Fix Developer/Designer toggle buttons
            if (text === 'Developer' || text === 'Designer') {
                // Remove any click event listeners by cloning
                const newLink = link.cloneNode(true);
                
                // Set correct href
                if (text === 'Developer') {
                    newLink.href = 'developer.html';
                } else if (text === 'Designer') {
                    newLink.href = 'designer.html';
                }
                
                // Force standard link behavior
                newLink.onclick = function(e) {
                    e.stopPropagation();
                    window.location.href = this.href;
                    return false;
                };
                
                link.parentNode.replaceChild(newLink, link);
                fixed++;
                console.log('Fixed:', text, 'to', newLink.href);
            }
        });
        
        console.log('Fixed', fixed, 'navigation links');
    }
    
    // Run multiple times to catch dynamically loaded content
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fixNavigation);
    } else {
        fixNavigation();
    }
    
    setTimeout(fixNavigation, 500);
    setTimeout(fixNavigation, 1000);
})();
