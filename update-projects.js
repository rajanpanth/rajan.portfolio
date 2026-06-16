// Replace Projects section with only Truva, Fornex, InstinctFi
(function() {
    'use strict';

    const projects = [
        {
            title: 'Truva',
            github: 'https://github.com/rajanpanth/Truva',
            live: null,
            demo: null,
            description: 'Trust & reputation infrastructure for AI agents on Solana',
            techStack: ['Solana', 'Rust', 'TypeScript', 'Anchor']
        },
        {
            title: 'Fornex',
            github: 'https://github.com/rajanpanth/Fornex',
            live: null,
            demo: null,
            description: 'Non-custodial AI trading vault on Solana',
            techStack: ['Solana', 'Anchor', 'TypeScript', 'AI Agents']
        },
        {
            title: 'InstinctFi',
            github: 'https://github.com/rajanpanth/InstinctFi',
            live: 'https://instinct-fi.vercel.app',
            demo: 'https://instinct-fi.vercel.app',
            description: 'Solana prediction polling platform',
            techStack: ['Next.js', 'Solana', 'Anchor', 'Rust', 'TypeScript', 'TailwindCSS']
        }
    ];

    function replaceProjects() {
        setTimeout(function() {
            try {
                // Find Projects section
                const allText = document.body.innerText;
                if (!allText.includes('Projects #')) return;

                // Find all buttons that might be project headers
                const allButtons = document.querySelectorAll('button');
                const projectButtons = [];

                allButtons.forEach(btn => {
                    const text = btn.textContent.trim();
                    if (text === 'InstinctFi' || text === 'Civic-Echo' || text === 'Snip-Shell') {
                        projectButtons.push(btn);
                    }
                });

                if (projectButtons.length === 0) return;

                // Find the container of projects
                const firstProject = projectButtons[0].closest('div[class*="border"]');
                if (!firstProject) return;

                const container = firstProject.parentElement;
                if (!container) return;

                // Clear all existing projects
                container.innerHTML = '';

                // Add new projects
                projects.forEach((project, index) => {
                    const projectId = project.title.toLowerCase();

                    const liveIcon = project.live ? `
                        <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="p-1 hover:opacity-70 transition-opacity" style="color:var(--foreground)" onclick="event.stopPropagation()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                        </a>
                    ` : '';

                    const demoIcon = project.demo ? `
                        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="p-1 hover:opacity-70 transition-opacity" style="color:var(--foreground)" onclick="event.stopPropagation()">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"></path>
                                <path d="M12 17v4"></path>
                                <path d="M8 21h8"></path>
                                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                            </svg>
                        </a>
                    ` : '';

                    const techStack = project.techStack.map(tech =>
                        `<span class="px-2.5 py-1 text-xs rounded-md border border-dashed" style="border-color:rgba(255,255,255,0.1); background:rgba(255,255,255,0.03); color:var(--muted); font-family:'JetBrains Mono', monospace; font-size:13px">${tech}</span>`
                    ).join('');

                    const projectHTML = `
                        <div class="border-b" style="border-color:var(--border); opacity:0; transform:translateY(10px)">
                            <button class="w-full flex items-center justify-between py-4 cursor-pointer group" onclick="window.toggleProject('${projectId}')">
                                <div class="flex items-center gap-2">
                                    <svg id="icon-${projectId}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--muted); transition: transform 0.3s;">
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
                                    ${liveIcon}
                                    ${demoIcon}
                                </div>
                            </button>
                            <div id="content-${projectId}" class="hidden pb-4">
                                <p class="text-sm leading-relaxed mb-3" style="color:var(--muted); font-size:13px; padding-left: 24px;">
                                    ${project.description}
                                </p>
                                <div class="flex flex-wrap gap-2 pl-6">
                                    ${techStack}
                                </div>
                            </div>
                        </div>
                    `;

                    container.insertAdjacentHTML('beforeend', projectHTML);

                    // Animate in
                    setTimeout(() => {
                        const div = container.children[index];
                        if (div) {
                            div.style.transition = 'opacity 0.3s, transform 0.3s';
                            div.style.opacity = '1';
                            div.style.transform = 'translateY(0)';
                        }
                    }, 100 * (index + 1));
                });

                console.log('✅ Projects updated: Truva, Fornex, InstinctFi');

            } catch (error) {
                console.error('Error updating projects:', error);
            }
        }, 1500);
    }

    // Toggle function
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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', replaceProjects);
    } else {
        replaceProjects();
    }

})();
