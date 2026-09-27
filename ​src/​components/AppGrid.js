import { AppCard } from './AppCard.js';

export function AppGrid(appList) {
    if (!appList || appList.length === 0) {
        return `<p style="color: var(--text-secondary); text-align: center;">No apps available.</p>`;
    }

    const cardsHTML = appList.map(app => AppCard(app)).join('');

    return `
        <div class="app-list">
            ${cardsHTML}
        </div>
    `;
}

