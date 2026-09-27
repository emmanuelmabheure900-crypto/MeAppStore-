// Function to render layout and manage pages without imports
function renderHeader() {
    return `
        <header class="glass-header">
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle Navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="#" class="header-brand" id="brandBtn">MeAppStore</a>
            <div style="width: 24px;"></div>
        </header>
    `;
}

function renderSidebar() {
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

function renderFooter() {
    return `
        <footer style="padding: 32px 16px; font-size: 12px; color: #86868b; text-align: center; border-top: 1px solid #e5e5e5; margin-top: 40px;">
            <div>&copy; 2026 MeAppStore. All rights reserved.</div>
            <div style="margin-top: 4px;">Created by Emmanuel Mabheure</div>
        </footer>
    `;
}

function renderHome() {
    return `
        <section class="home-page">
            <h1 class="page-title">Today</h1>
            
            <div class="section-header">
                <h2 class="section-title">App Essentials</h2>
            </div>
            
            <div class="app-list">
                <div class="app-item">
                    <div class="app-details">
                        <img src="https://via.placeholder.com/52" alt="MobileMe" class="app-icon" />
                        <div class="app-meta">
                            <h3 class="app-title">MobileMe Connect</h3>
                            <p class="app-sub">Productivity & Sync</p>
                        </div>
                    </div>
                    <button class="btn-view">GET</button>
                </div>
            </div>
        </section>
    `;
}

function renderIosClones() {
    return `
        <section class="category-page">
            <h1 class="page-title">iOS Clones</h1>
            
            <div class="coming-soon-card">
                <div class="coming-soon-icon">🚀</div>
                <h2>Coming Soon</h2>
                <p>iOS-style APK clones are currently in development by Emmanuel Mabheure. Check back later for official releases!</p>
            </div>
        </section>
    `;
}

function renderAbout() {
    return `
        <section class="about-page">
            <h1 class="page-title">About MeAppStore</h1>
            
            <div class="coming-soon-card" style="text-align: left;">
                <h2>Designed for Speed & Style</h2>
                <p style="margin-top: 12px;">
                    MeAppStore is a dynamic software platform and web application built by Emmanuel Mabheure. It brings clean, iOS-inspired designs and custom utility applications directly to users.
                </p>
            </div>
        </section>
    `;
}

function navigate(route) {
    const view = document.getElementById('router-view');
    if (!view) return;

    switch (route) {
        case 'ios-clones':
            view.innerHTML = renderIosClones();
            break;
        case 'about':
            view.innerHTML = renderAbout();
            break;
        case 'home':
        default:
            view.innerHTML = renderHome();
            break;
    }

    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        ${renderHeader()}
        ${renderSidebar()}
        <main class="main-content" id="router-view"></main>
        ${renderFooter()}
    `;

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

    const brandBtn = document.getElementById('brandBtn');
    if (brandBtn) {
        brandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigate('home');
        });
    }

    navigate('home');
});
