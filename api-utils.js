// API Utility Functions
// Use these helper functions to make API calls to your backend

/**
 * Generic API call function
 * @param {string} endpoint - The API endpoint key from config
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {object} data - Request body data (optional)
 * @param {object} params - Query parameters (optional)
 * @param {boolean} requireAuth - Whether authentication token is required
 */
async function apiCall(endpoint, method = 'GET', data = null, params = {}, requireAuth = false) {
    const url = API_CONFIG.getUrl(API_CONFIG.getEndpoint(endpoint), params);

    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    };

    // Add authentication token if required
    if (requireAuth) {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }
    }

    // Add request body for POST, PUT, PATCH
    if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        // Handle different response types
        const contentType = response.headers.get('content-type');
        let responseData;

        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else {
            responseData = await response.text();
        }

        // Check if response is ok
        if (!response.ok) {
            throw new Error(responseData.message || responseData.error || `HTTP error! status: ${response.status}`);
        }

        return responseData;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

/**
 * GET request helper
 */
async function apiGet(endpoint, params = {}, requireAuth = false) {
    return apiCall(endpoint, 'GET', null, params, requireAuth);
}

/**
 * POST request helper
 */
async function apiPost(endpoint, data = {}, params = {}, requireAuth = false) {
    return apiCall(endpoint, 'POST', data, params, requireAuth);
}

/**
 * PUT request helper
 */
async function apiPut(endpoint, data = {}, params = {}, requireAuth = false) {
    return apiCall(endpoint, 'PUT', data, params, requireAuth);
}

/**
 * DELETE request helper
 */
async function apiDelete(endpoint, params = {}, requireAuth = false) {
    return apiCall(endpoint, 'DELETE', null, params, requireAuth);
}

// Authentication Functions

/**
 * Register a new user
 */
async function registerUser(userData) {
    try {
        const response = await apiPost('REGISTER', userData);
        if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

/**
 * Login user
 */
async function loginUser(credentials) {
    try {
        const response = await apiPost('LOGIN', credentials);
        if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

/**
 * Logout user
 */
async function logoutUser() {
    try {
        await apiPost('LOGOUT', {}, {}, true);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        return true;
    } catch (error) {
        // Even if API call fails, clear local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        console.error('Logout error:', error);
        return true;
    }
}

/**
 * Get current user info
 */
async function getCurrentUser() {
    try {
        const user = await apiGet('GET_USER', {}, true);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    } catch (error) {
        console.error('Get user error:', error);
        throw error;
    }
}

// Menu Functions

/**
 * Get menu items by category
 */
async function getMenuByCategory(category) {
    try {
        return await apiGet('GET_MENU_BY_CATEGORY', { category }, false);
    } catch (error) {
        console.error('Get menu error:', error);
        throw error;
    }
}

/**
 * Get all menu items
 */
async function getAllMenuItems() {
    try {
        return await apiGet('GET_MENU', {}, false);
    } catch (error) {
        console.error('Get all menu error:', error);
        throw error;
    }
}

// Cart Functions

/**
 * Get user's cart
 */
async function getCart() {
    try {
        return await apiGet('GET_CART', {}, true);
    } catch (error) {
        console.error('Get cart error:', error);
        throw error;
    }
}

/**
 * Add item to cart
 */
async function addToCart(item) {
    try {
        return await apiPost('ADD_TO_CART', item, {}, true);
    } catch (error) {
        console.error('Add to cart error:', error);
        throw error;
    }
}

/**
 * Update cart item
 */
async function updateCartItem(itemId, quantity) {
    try {
        return await apiPut('UPDATE_CART', { itemId, quantity }, {}, true);
    } catch (error) {
        console.error('Update cart error:', error);
        throw error;
    }
}

/**
 * Remove item from cart
 */
async function removeFromCart(itemId) {
    try {
        return await apiDelete('REMOVE_FROM_CART', { itemId }, true);
    } catch (error) {
        console.error('Remove from cart error:', error);
        throw error;
    }
}

/**
 * Clear entire cart
 */
async function clearCart() {
    try {
        return await apiDelete('CLEAR_CART', {}, true);
    } catch (error) {
        console.error('Clear cart error:', error);
        throw error;
    }
}

// Order Functions

/**
 * Create a new order
 */
async function createOrder(orderData) {
    try {
        return await apiPost('CREATE_ORDER', orderData, {}, true);
    } catch (error) {
        console.error('Create order error:', error);
        throw error;
    }
}

/**
 * Get user's orders
 */
async function getUserOrders() {
    try {
        return await apiGet('GET_ORDERS', {}, true);
    } catch (error) {
        console.error('Get orders error:', error);
        throw error;
    }
}

// Contact & Form Functions

/**
 * Submit contact form
 */
async function submitContactForm(formData) {
    try {
        return await apiPost('CONTACT', formData, {}, false);
    } catch (error) {
        console.error('Contact form error:', error);
        throw error;
    }
}

/**
 * Book a table
 */
async function bookTable(bookingData) {
    try {
        return await apiPost('BOOK_TABLE', bookingData, {}, true);
    } catch (error) {
        console.error('Book table error:', error);
        throw error;
    }
}

// Export functions if using modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        apiCall,
        apiGet,
        apiPost,
        apiPut,
        apiDelete,
        registerUser,
        loginUser,
        logoutUser,
        getCurrentUser,
        getMenuByCategory,
        getAllMenuItems,
        getCart,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        createOrder,
        getUserOrders,
        submitContactForm,
        bookTable
    };
}

