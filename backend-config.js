// MongoDB Database Configuration
// Replace these values with your MongoDB connection details

const DATABASE_CONFIG = {
    // MongoDB Connection String
    // Format: mongodb+srv://username:password@cluster.mongodb.net/database-name?retryWrites=true&w=majority
    // OR for local: mongodb://localhost:27017/database-name

    MONGODB_URI: 'mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/foodie_db?retryWrites=true&w=majority',

    // Database Name
    DB_NAME: 'foodie_db',

    // Collection Names (optional - can customize)
    COLLECTIONS: {
        USERS: 'users',
        MENU_ITEMS: 'menu_items',
        ORDERS: 'orders',
        CART: 'cart',
        CONTACTS: 'contacts',
        BOOKINGS: 'bookings'
    },

    // Connection Options
    OPTIONS: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
    }
};

// Backend Server Configuration
const SERVER_CONFIG = {
    // Backend API Port
    PORT: 3000,

    // Backend API Base URL
    BASE_URL: 'http://localhost:3000',

    // JWT Secret (CHANGE THIS TO A RANDOM STRING IN PRODUCTION!)
    JWT_SECRET: 'your-super-secret-jwt-key-change-this-in-production',

    // JWT Token Expiration
    JWT_EXPIRES_IN: '7d', // 7 days

    // CORS Configuration
    CORS_ORIGIN: ['http://localhost:5500', 'http://127.0.0.1:5500'],

    // Environment
    NODE_ENV: 'development' // 'development' or 'production'
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        DATABASE_CONFIG,
        SERVER_CONFIG
    };
}

// For browser use (if needed)
if (typeof window !== 'undefined') {
    window.DATABASE_CONFIG = DATABASE_CONFIG;
    window.SERVER_CONFIG = SERVER_CONFIG;
}

/*
 * SETUP INSTRUCTIONS:
 * 
 * 1. Get MongoDB Connection String:
 *    - Go to https://www.mongodb.com/cloud/atlas
 *    - Sign up for free account
 *    - Create a new cluster (free tier M0)
 *    - Click "Connect" → "Connect your application"
 *    - Copy the connection string
 * 
 * 2. Replace in connection string:
 *    - <username> with your MongoDB username
 *    - <password> with your MongoDB password
 *    - <dbname> with your database name (e.g., foodie_db)
 * 
 * 3. Example:
 *    mongodb+srv://disha:myPassword123@cluster0.abc123.mongodb.net/foodie_db?retryWrites=true&w=majority
 * 
 * 4. For your backend server (Node.js/Express):
 *    - Install: npm install mongoose dotenv
 *    - Create .env file (add to .gitignore!)
 *    - Use these variables in your backend code
 */

