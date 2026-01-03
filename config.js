// Backend API Configuration
// Update this with your backend server URL

const API_CONFIG = {
    // Your backend base URL
    // Examples:
    // Development: 'http://localhost:3000/api'
    // Production: 'https://your-backend-domain.com/api'

    BASE_URL: 'http://localhost:3000/api', // 👈 CHANGE THIS TO YOUR BACKEND URL

    // API Endpoints (these will be appended to BASE_URL)
    ENDPOINTS: {
        // Authentication
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        GET_USER: '/auth/me',

        // Menu
        GET_MENU: '/menu',
        GET_MENU_BY_CATEGORY: '/menu/category', // ?category={category}
        GET_MENU_ITEM: '/menu/item', // ?id={id}

        // Cart
        GET_CART: '/cart',
        ADD_TO_CART: '/cart/add',
        UPDATE_CART: '/cart/update',
        REMOVE_FROM_CART: '/cart/remove',
        CLEAR_CART: '/cart/clear',

        // Orders
        CREATE_ORDER: '/orders',
        GET_ORDERS: '/orders',
        GET_ORDER: '/orders', // /{orderId}
        TRACK_ORDER: '/orders/track', // ?id={orderId}

        // Contact & Forms
        CONTACT: '/contact',
        BOOK_TABLE: '/bookings',
        FEEDBACK: '/feedback',
        DONATION: '/donations',

        // Address
        GET_ADDRESSES: '/addresses',
        ADD_ADDRESS: '/addresses',
        UPDATE_ADDRESS: '/addresses', // /{addressId}
        DELETE_ADDRESS: '/addresses', // /{addressId}
    },

    // Helper function to get full URL
    getUrl(endpoint, params = {}) {
        let url = this.BASE_URL + endpoint;

        // Add query parameters if provided
        if (Object.keys(params).length > 0) {
            const queryString = new URLSearchParams(params).toString();
            url += '?' + queryString;
        }

        return url;
    },

    // Helper function to get endpoint path
    getEndpoint(key) {
        return this.ENDPOINTS[key] || '';
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}

