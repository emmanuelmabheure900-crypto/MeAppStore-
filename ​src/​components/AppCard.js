export function AppCard(app) {
    return `
        <div class="app-item" data-id="${app.id}">
            <div class="app-details">
                <img src="${app.icon || 'https://via.placeholder.com/52'}" alt="${app.title}" class="app-icon" />
                <div class="app-meta">
                    <h3 class="app-title">${app.title}</h3>
                    <p class="app-sub">${app.category || 'General App'}</p>
                </div>
            </div>
            <button class="btn-view">GET</button>
        </div>
    `;
}

