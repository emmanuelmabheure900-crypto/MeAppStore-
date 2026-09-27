import { navigate } from '../main.js';

export function renderSidebar() {
    return `
        <aside class="sidebar" id="sidebar">
            <nav>
                <div class="sidebar-section-label">Menu</div>
                <ul class="sidebar-nav">
                    <li><a href="#" class="nav-link" data-route="home">Today</a></li>
                    <li><a href="#" class="nav-link" data-route="about">About</a></li>
                </ul>

                <div class="sidebar-section-label">Categories</div>
                <ul class="sidebar-nav">
                    <li><a href="#" class="nav-link" data-route="ios-clones">iOS Clones</a></li>
                </ul>
            </nav>
        </aside>
    `;
}

export function initSidebarEvents() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const route = link.getAttribute('data-route');
            navigate(route);
            if (sidebar) sidebar.classList.remove('active');
        }
    });
}

