# 🚀 Setup Instructions - Foodie Website

## Welcome, Disha! 👋

This is your complete setup guide to get your Foodie website ready for GitHub and production.

---

## 📋 Step-by-Step Setup

### STEP 1: Update Your GitHub Username

1. Open `README.md`
2. Find all instances of `your-username` and replace with your actual GitHub username
3. Find `your-email@example.com` and replace with your email
4. Find `your-portfolio-url.com` and replace with your portfolio (if you have one)

**Files to check:**
- `README.md` (multiple places)
- `package.json` (repository URL)

---

### STEP 2: MongoDB Database Setup

#### Option A: MongoDB Atlas (Cloud - Recommended)

1. **Create Account:**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account

2. **Create Cluster:**
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Choose a cloud provider and region (closest to you)
   - Click "Create"

3. **Create Database User:**
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (SAVE THESE!)
   - Set privileges to "Atlas Admin" or "Read and write to any database"
   - Click "Add User"

4. **Configure Network Access:**
   - Go to "Network Access" in left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (or add your IP)
   - Click "Confirm"

5. **Get Connection String:**
   - Go back to "Database" → Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

6. **Update Configuration:**
   - Open `backend-config.js`
   - Replace `YOUR_USERNAME` with your MongoDB username
   - Replace `YOUR_PASSWORD` with your MongoDB password
   - Replace `foodie_db` with your desired database name
   - Example:
     ```javascript
     MONGODB_URI: 'mongodb+srv://disha:mySecurePassword123@cluster0.abc123.mongodb.net/foodie_db?retryWrites=true&w=majority'
     ```

#### Option B: Local MongoDB (If you have MongoDB installed)

1. Make sure MongoDB is running locally
2. Update `backend-config.js`:
   ```javascript
   MONGODB_URI: 'mongodb://localhost:27017/foodie_db'
   ```

---

### STEP 3: Backend API Setup

#### If You Don't Have a Backend Yet:

You have two options:

**Option 1: Use the API utilities (Frontend only)**
- The frontend will use localStorage as fallback
- Menu will use TheMealDB API
- No backend setup needed!

**Option 2: Create a Backend (Recommended for full functionality)**

Create a Node.js/Express backend:

1. Create a new folder: `backend/`
2. Initialize Node.js:
   ```bash
   cd backend
   npm init -y
   npm install express mongoose cors dotenv jsonwebtoken bcryptjs
   ```

3. Create these files:
   - `server.js` - Main server file
   - `.env` - Environment variables (add to .gitignore!)
   - Models for User, Menu, Order, Cart
   - Routes for API endpoints

4. Use `backend-config.js` values in your `.env` file

5. Update `config.js` in root:
   ```javascript
   BASE_URL: 'http://localhost:3000/api'
   ```

---

### STEP 4: Customize Theme & Colors

1. **Open `theme-config.js`**

2. **Change Primary Color:**
   - Find `PRIMARY_COLOR: '#e37f0f'`
   - Change to your favorite color (hex code)
   - Examples:
     - Red: `#ef4444`
     - Blue: `#3b82f6`
     - Green: `#10b981`
     - Purple: `#8b5cf6`
     - Pink: `#ec4899`

3. **Update Related Colors:**
   - `PRIMARY_DARK` - Slightly darker version (for hover)
   - `PRIMARY_LIGHT` - Slightly lighter version

4. **Customize Other Colors:**
   - Background colors
   - Text colors
   - Button colors
   - Card colors
   - Navbar/Footer colors

5. **Use Online Color Tools:**
   - https://coolors.co/ - Generate color palettes
   - https://htmlcolorcodes.com/ - Find hex codes
   - https://colors.dopely.top/ - Color inspiration

**The theme will automatically apply when you refresh the page!**

---

### STEP 5: GitHub Repository Setup

1. **Initialize Git (if not already):**
   ```bash
   git init
   ```

2. **Create .gitignore file** (if not exists):
   ```
   node_modules/
   .env
   *.log
   .DS_Store
   backend/node_modules/
   backend/.env
   ```

3. **Add all files:**
   ```bash
   git add .
   ```

4. **Make first commit:**
   ```bash
   git commit -m "Initial commit - Foodie website by Disha Jyala"
   ```

5. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Repository name: `foodie-food-ordering-website` (or your choice)
   - Description: "Modern food ordering website with MongoDB integration"
   - Choose Public or Private
   - DO NOT initialize with README (you already have one)
   - Click "Create repository"

6. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/foodie-food-ordering-website.git
   git branch -M main
   git push -u origin main
   ```

---

### STEP 6: Final Checks

✅ **Before uploading to GitHub, make sure:**

1. **Updated personal info:**
   - [ ] Your name in LICENSE
   - [ ] Your GitHub username in README.md
   - [ ] Your email in README.md
   - [ ] Your repository URL in package.json

2. **Configuration files:**
   - [ ] MongoDB credentials in `backend-config.js` (or use environment variables)
   - [ ] Backend API URL in `config.js`
   - [ ] Theme colors customized in `theme-config.js`

3. **Security:**
   - [ ] `.env` file is in `.gitignore`
   - [ ] No passwords/keys in committed files
   - [ ] Use environment variables for sensitive data

4. **Test the website:**
   - [ ] Open `index.html` in browser
   - [ ] Check all pages load correctly
   - [ ] Test menu, cart, contact form
   - [ ] Verify theme colors applied

---

## 🎨 Quick Theme Color Ideas

### Professional Blue Theme:
```javascript
PRIMARY_COLOR: '#2563eb',
PRIMARY_DARK: '#1d4ed8',
PRIMARY_LIGHT: '#3b82f6',
```

### Modern Green Theme:
```javascript
PRIMARY_COLOR: '#10b981',
PRIMARY_DARK: '#059669',
PRIMARY_LIGHT: '#34d399',
```

### Elegant Purple Theme:
```javascript
PRIMARY_COLOR: '#8b5cf6',
PRIMARY_DARK: '#7c3aed',
PRIMARY_LIGHT: '#a78bfa',
```

### Vibrant Pink Theme:
```javascript
PRIMARY_COLOR: '#ec4899',
PRIMARY_DARK: '#db2777',
PRIMARY_LIGHT: '#f472b6',
```

---

## 📝 Files You Created/Modified

Your name is now on:
- ✅ LICENSE file
- ✅ README.md
- ✅ package.json
- ✅ All configuration files

---

## 🆘 Need Help?

If you get stuck:

1. **MongoDB Issues:**
   - Check connection string format
   - Verify username/password
   - Check network access settings

2. **Theme Not Applying:**
   - Make sure `theme-config.js` is loaded in HTML
   - Check browser console for errors
   - Clear browser cache

3. **GitHub Issues:**
   - Make sure you're logged into GitHub
   - Check repository URL is correct
   - Verify files are committed before pushing

---

## 🎉 You're All Set!

Once you've completed these steps:
1. Your website is personalized with your name
2. MongoDB is configured (or ready to configure)
3. Theme is customizable
4. Ready to push to GitHub

**Good luck, Disha! You've got this! 💪✨**

---

## 📧 Next Steps After Setup

1. **Deploy Frontend:**
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)

2. **Deploy Backend:**
   - Heroku (free tier)
   - Railway (free tier)
   - Render (free tier)

3. **Domain (Optional):**
   - Buy a custom domain
   - Connect to your hosting

---

**Made with ❤️ for Disha Jyala**

