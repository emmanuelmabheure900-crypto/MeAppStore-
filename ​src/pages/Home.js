import { AppGrid } from '../components/AppGrid.js';

export function renderHome() {
    // Sample featured store items
    const featuredApps = [
        { id: '1', title: 'MobileMe Connect', category: 'Productivity & Sync', icon: '' },
        { id: '2', title: 'iMessage Style Chat', category: 'Messaging & UI', icon: '' }
    ];

    return `
        <section class="home-page">
            <h1 class="page-title">Today</h1>
            
            <div class="section-header">
                <h2 class="section-title">App Essentials</h2>
            </div>
            
            ${AppGrid(featuredApps)}
        </section>
    `;
}

