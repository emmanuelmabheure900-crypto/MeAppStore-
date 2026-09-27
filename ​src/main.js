import { renderHeader } from './components/Header.js';
import { renderSidebar, initSidebarEvents } from './components/Sidebar.js';
import { renderFooter } from './components/Footer.js';
import { renderHome } from './pages/Home.js';
import { renderIosClones } from './pages/IosClones.js';
import { renderAbout } from './pages/About.js';

const app = document.getElementById('app');

function initApp() {
    app.innerHTML = `
        ${renderHeader()}
        ${renderSidebar()}
        <main class="main-content" id="router-view"></main>
        ${renderFooter()}
    `;

    initSidebarEvents();

    // Brand logo routing listener
    document.querySelector('.header-brand').addEventListener('click', (e) => {
        e.preventDefault();
        navigate('home');
    });

    // Default route
    navigate('home');
}

export function navigate(route) {
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

document.addEventListener('DOMContentLoaded', initApp);

