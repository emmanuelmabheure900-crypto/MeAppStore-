export function renderHeader() {
    return `
        <header class="glass-header">
            <button class="menu-toggle" id="menuToggle" aria-label="Toggle Navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <a href="#" class="header-brand" data-route="home">MeAppStore</a>
            <div style="width: 24px;"></div>
        </header>
    `;
}

