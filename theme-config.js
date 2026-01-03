// Theme and Color Customization
// Change these values to customize your website's appearance

const THEME_CONFIG = {
    // Primary Colors (Main brand color)
    PRIMARY_COLOR: '#ef4444', // Orange (current)
    PRIMARY_DARK: '#cf6a0a',
    PRIMARY_LIGHT: '#f5951e',

    // Secondary Colors
    SECONDARY_COLOR: '#137cbd', // Blue
    SECONDARY_DARK: '#0f5f8f',
    SECONDARY_LIGHT: '#58a9ff',

    // Accent Colors
    ACCENT_COLOR: '#2563eb', // Bright blue
    SUCCESS_COLOR: '#10b981', // Green
    ERROR_COLOR: '#ef4444', // Red
    WARNING_COLOR: '#f59e0b', // Amber

    // Background Colors
    BG_PRIMARY: '#ffffff', // White
    BG_SECONDARY: '#f9fafb', // Light gray
    BG_DARK: '#212123', // Dark background
    BG_DARKER: '#1a1a1c',

    // Text Colors
    TEXT_PRIMARY: '#1f2937', // Dark gray/black
    TEXT_SECONDARY: '#6b7280', // Medium gray
    TEXT_LIGHT: '#ffffff', // White text
    TEXT_MUTED: '#9ca3af', // Muted gray

    // Button Colors
    BUTTON_PRIMARY: '#e37f0f',
    BUTTON_PRIMARY_HOVER: '#cf6a0a',
    BUTTON_SECONDARY: '#137cbd',
    BUTTON_SECONDARY_HOVER: '#0f5f8f',

    // Card/Container Colors
    CARD_BG: '#ffffff',
    CARD_BORDER: '#e5e7eb',
    CARD_SHADOW: 'rgba(0, 0, 0, 0.1)',

    // Navbar Colors
    NAVBAR_BG: '#212123',
    NAVBAR_TEXT: '#ffffff',
    NAVBAR_HOVER: '#e37f0f',

    // Footer Colors
    FOOTER_BG: '#212123',
    FOOTER_TEXT: '#ffffff',
    FOOTER_LINK_HOVER: '#e37f0f',

    // Font Settings
    FONT_PRIMARY: "'Roboto', sans-serif",
    FONT_HEADING: "'Oswald', sans-serif",
    FONT_DECORATIVE: "'Baloo Bhai', cursive",

    // Font Sizes (in px)
    FONT_SMALL: '14px',
    FONT_MEDIUM: '16px',
    FONT_LARGE: '18px',
    FONT_XLARGE: '24px',
    FONT_XXLARGE: '32px',

    // Border Radius
    BORDER_RADIUS_SMALL: '4px',
    BORDER_RADIUS_MEDIUM: '8px',
    BORDER_RADIUS_LARGE: '12px',
    BORDER_RADIUS_ROUND: '50%',

    // Spacing (for margins/padding)
    SPACING_XS: '4px',
    SPACING_SM: '8px',
    SPACING_MD: '16px',
    SPACING_LG: '24px',
    SPACING_XL: '32px',

    // Shadows
    SHADOW_SMALL: '0 1px 2px rgba(0,0,0,0.05)',
    SHADOW_MEDIUM: '0 4px 6px rgba(0,0,0,0.1)',
    SHADOW_LARGE: '0 10px 15px rgba(0,0,0,0.1)',

    // Transitions
    TRANSITION_FAST: '0.2s ease',
    TRANSITION_MEDIUM: '0.3s ease',
    TRANSITION_SLOW: '0.5s ease',
};

// Apply theme to CSS variables
function applyTheme() {
    const root = document.documentElement;

    // Primary colors
    root.style.setProperty('--primary-color', THEME_CONFIG.PRIMARY_COLOR);
    root.style.setProperty('--primary-dark', THEME_CONFIG.PRIMARY_DARK);
    root.style.setProperty('--primary-light', THEME_CONFIG.PRIMARY_LIGHT);

    // Secondary colors
    root.style.setProperty('--secondary-color', THEME_CONFIG.SECONDARY_COLOR);
    root.style.setProperty('--secondary-dark', THEME_CONFIG.SECONDARY_DARK);
    root.style.setProperty('--secondary-light', THEME_CONFIG.SECONDARY_LIGHT);

    // Accent colors
    root.style.setProperty('--accent-color', THEME_CONFIG.ACCENT_COLOR);
    root.style.setProperty('--success-color', THEME_CONFIG.SUCCESS_COLOR);
    root.style.setProperty('--error-color', THEME_CONFIG.ERROR_COLOR);
    root.style.setProperty('--warning-color', THEME_CONFIG.WARNING_COLOR);

    // Background colors
    root.style.setProperty('--bg-primary', THEME_CONFIG.BG_PRIMARY);
    root.style.setProperty('--bg-secondary', THEME_CONFIG.BG_SECONDARY);
    root.style.setProperty('--bg-dark', THEME_CONFIG.BG_DARK);
    root.style.setProperty('--bg-darker', THEME_CONFIG.BG_DARKER);

    // Text colors
    root.style.setProperty('--text-primary', THEME_CONFIG.TEXT_PRIMARY);
    root.style.setProperty('--text-secondary', THEME_CONFIG.TEXT_SECONDARY);
    root.style.setProperty('--text-light', THEME_CONFIG.TEXT_LIGHT);
    root.style.setProperty('--text-muted', THEME_CONFIG.TEXT_MUTED);

    // Button colors
    root.style.setProperty('--button-primary', THEME_CONFIG.BUTTON_PRIMARY);
    root.style.setProperty('--button-primary-hover', THEME_CONFIG.BUTTON_PRIMARY_HOVER);
    root.style.setProperty('--button-secondary', THEME_CONFIG.BUTTON_SECONDARY);
    root.style.setProperty('--button-secondary-hover', THEME_CONFIG.BUTTON_SECONDARY_HOVER);

    // Card colors
    root.style.setProperty('--card-bg', THEME_CONFIG.CARD_BG);
    root.style.setProperty('--card-border', THEME_CONFIG.CARD_BORDER);
    root.style.setProperty('--card-shadow', THEME_CONFIG.CARD_SHADOW);

    // Navbar colors
    root.style.setProperty('--navbar-bg', THEME_CONFIG.NAVBAR_BG);
    root.style.setProperty('--navbar-text', THEME_CONFIG.NAVBAR_TEXT);
    root.style.setProperty('--navbar-hover', THEME_CONFIG.NAVBAR_HOVER);

    // Footer colors
    root.style.setProperty('--footer-bg', THEME_CONFIG.FOOTER_BG);
    root.style.setProperty('--footer-text', THEME_CONFIG.FOOTER_TEXT);
    root.style.setProperty('--footer-link-hover', THEME_CONFIG.FOOTER_LINK_HOVER);

    // Fonts
    root.style.setProperty('--font-primary', THEME_CONFIG.FONT_PRIMARY);
    root.style.setProperty('--font-heading', THEME_CONFIG.FONT_HEADING);
    root.style.setProperty('--font-decorative', THEME_CONFIG.FONT_DECORATIVE);

    console.log('Theme applied successfully!');
}

// Apply theme when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = THEME_CONFIG;
}

// Make available globally
if (typeof window !== 'undefined') {
    window.THEME_CONFIG = THEME_CONFIG;
    window.applyTheme = applyTheme;
}

/*
 * HOW TO CUSTOMIZE COLORS:
 * 
 * 1. Change the color values above (use hex codes like #ff5733)
 * 2. Colors will automatically apply when page loads
 * 
 * COLOR SUGGESTIONS:
 * 
 * - Red Theme: PRIMARY_COLOR: '#ef4444'
 * - Blue Theme: PRIMARY_COLOR: '#3b82f6'
 * - Green Theme: PRIMARY_COLOR: '#10b981'
 * - Purple Theme: PRIMARY_COLOR: '#8b5cf6'
 * - Pink Theme: PRIMARY_COLOR: '#ec4899'
 * 
 * You can use online color pickers:
 * - https://coolors.co/
 * - https://htmlcolorcodes.com/
 * 
 * TIP: Keep PRIMARY_DARK slightly darker and PRIMARY_LIGHT slightly lighter
 *      than PRIMARY_COLOR for hover effects
 */

