// Replace Projects section with all pinned GitHub repos
(function() {
    'use strict';

    const pinnedProjects = [
        {
            title: 'Truva',
            github: 'https://github.com/rajanpanth/Truva',
            live: null,
            description: 'Truva is a trust and reputation infrastructure layer for AI agents on Solana. It is the missing piece between AI agent identity and AI agent commerce.',
            techStack: ['Solana', 'Rust', 'TypeScript', 'Anchor']
        },
        {
            title: 'Fornex',
            github: 'https://github.com/rajanpanth/Fornex',
            live: null,
            description: 'Fornex is a non-custodial AI trading vault on Solana. Agents debate every 15 minutes, the Anchor program enforces every cap, and a separate treasury pays the agent on-chain on every executed trade.',
            techStack: ['Solana', 'Anchor', 'TypeScript', 'AI Agents']
        },
        {
            title: 'InstinctFi',
            github: 'https://github.com/rajanpanth/InstinctFi',
            live: 'https://instinct-fi.vercel.app',
            description: 'A Solana-based prediction polling platform where users vote by buying option coins, win rewards from the losing pool, and interact through a fast, gamified, wallet-powered experience.',
            techStack: ['Next.js', 'Solana', 'Anchor', 'Rust', 'TypeScript', 'TailwindCSS']
        },
        {
            title: 'NeuroAdapt',
            github: 'https://github.com/rajanpanth/NeuroAdapt',
            live: null,
            description: 'AI-powered Microsoft app tracker that analyzes your usage and cuts the noise — so you focus on what actually matters.',
            techStack: ['TypeScript', 'React', 'AI/ML', 'Node.js']
        },
        {
            title: 'Design-2-Code',
            github: 'https://github.com/rajanpanth/Design-2-Code',
            live: null,
            description: 'Web Design, HTML Generation, Visual Editor, Canvas, No-Code Tool',
            techStack: ['JavaScript', 'React', 'Canvas API', 'HTML Generator']
        },
        {
            title: 'NexCard',
            github: 'https://github.com/rajanpanth/NexCard',
            live: null,
            description: 'A full-stack web app for creating and sharing virtual business cards. Users pick a template, customize it with their contact and social details, then share via a unique URL, QR code, or vCard. Built with React, TailwindCSS, and Supabase.',
            techStack: ['React', 'TypeScript', 'Supabase', 'TailwindCSS']
        }
    ];

    function createProjectHTML(project) {
        const liveLink = project.live ? `
            <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="p-1 hover:opacity-70 transition-opacity" style="color:var(--foreground)" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
            </a>
        ` : '';

        const techStackHTML = project.techStack.map(tech =>
            `<span class="px-2.5 py-1 text-xs rounded-md border border-dashed" style="border-color:rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:var(--muted); font-family:'JetBrains Mono', monospace; font-size:13px">${tech}</span>`
        ).join('');

        return `
            <div class="border-b" style="border-color:var(--border); opacity:0; transform:translateY(10px)">
                <button class="w-full flex items-center justify-between py-4 cursor-pointer group" onclick="toggleProject('${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}')">
                    <div class="flex items-center gap-2">
                        <svg id="icon-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted); transition: transform 0.3s;">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                        <span class="text-base font-medium" style="font-family:'JetBrains Mono', monospace; font-size:14px; color:var(--foreground)">${project.title}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="p-1 hover:opacity-70 transition-opacity" style="color:var(--foreground)" onclick="event.stopPropagation()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </a>
                        ${liveLink}
                    </div>
                </button>
                <div id="content-${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}" class="hidden pb-4">
                    <p class="text-sm leading-relaxed mb-3" style="color:var(--muted); font-size:13px; padding-left: 24px;">
                        ${project.description}
                    </p>
                    <div class="flex flex-wrap gap-2 pl-6">
                        ${techStackHTML}
                    </div>
                </div>
            </div>
        `;
    }

    function replaceProjects() {
        try {
            console.log('[REPLACE] Starting project replacement...');

            // Method 1: Find by h2 text
            const h2Elements = document.querySelectorAll('h2, h3, h4');
            let projectsSection = null;

            for (let h of h2Elements) {
                const text = h.textContent.trim();
                console.log('[REPLACE] Found heading:', text);
                if (text.includes('Project')) {
                    projectsSection = h;
                    console.log('[REPLACE] Found Projects section!');
                    break;
                }
            }

            if (!projectsSection) {
                console.warn('[REPLACE] Projects section not found by heading');
                return;
            }

            // Find all divs with border-b (project items)
            const allBorderDivs = document.querySelectorAll('div[style*="border-color"]');
            console.log('[REPLACE] Found', allBorderDivs.length, 'border divs');

            // Find the section element or container
            let section = projectsSection.closest('section') || projectsSection.parentElement;

            // Look for the div container with projects
            const projectDivs = section.querySelectorAll('div.border-b, div[class*="border"]');
            console.log('[REPLACE] Found', projectDivs.length, 'project divs in section');

            // Find parent container
            let projectsContainer = null;
            projectDivs.forEach(div => {
                if (div.textContent.includes('InstinctFi') || div.textContent.includes('Snip-Shell')) {
                    projectsContainer = div.parentElement;
                    console.log('[REPLACE] Found projects container!');
                }
            });

            if (!projectsContainer) {
                console.warn('[REPLACE] Projects container not found');
                // Try alternative method
                const containers = section.querySelectorAll('div > div');
                for (let container of containers) {
                    if (container.children.length >= 3) {
                        projectsContainer = container;
                        console.log('[REPLACE] Using alternative container with', container.children.length, 'children');
                        break;
                    }
                }
            }

            if (!projectsContainer) {
                console.error('[REPLACE] Could not find projects container!');
                return;
            }

            console.log('[REPLACE] Clearing existing projects...');
            // Clear existing projects
            projectsContainer.innerHTML = '';

            console.log('[REPLACE] Adding new projects...');
            // Add all pinned projects
            pinnedProjects.forEach((project, index) => {
                const projectHTML = createProjectHTML(project);
                projectsContainer.insertAdjacentHTML('beforeend', projectHTML);

                // Animate in
                setTimeout(() => {
                    const projectDiv = projectsContainer.children[index];
                    if (projectDiv) {
                        projectDiv.style.transition = 'opacity 0.3s, transform 0.3s';
                        projectDiv.style.opacity = '1';
                        projectDiv.style.transform = 'translateY(0)';
                    }
                }, 100 * (index + 1));
            });

            console.log('✅ Successfully replaced with', pinnedProjects.length, 'pinned projects');
            console.log('✅ Snip-Shell has been removed');

        } catch (error) {
            console.error('[REPLACE] Error replacing projects:', error);
        }
    }

    // Toggle function for collapsible projects
    window.toggleProject = function(id) {
        const content = document.getElementById('content-' + id);
        const icon = document.getElementById('icon-' + id);

        if (content && icon) {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    };

    // Run when DOM is ready
    console.log('[REPLACE] Script loaded, readyState:', document.readyState);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceProjects);
    } else {
        replaceProjects();
    }

    // Also try after delays to catch dynamic content
    setTimeout(function() {
        console.log('[REPLACE] Running after 500ms...');
        replaceProjects();
    }, 500);

    setTimeout(function() {
        console.log('[REPLACE] Running after 1500ms...');
        replaceProjects();
    }, 1500);

    setTimeout(function() {
        console.log('[REPLACE] Running after 3000ms...');
        replaceProjects();
    }, 3000);
})();
