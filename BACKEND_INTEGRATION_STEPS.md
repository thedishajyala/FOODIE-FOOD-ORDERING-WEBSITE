# 🔗 Backend Integration Step-by-Step Guide

## **STEP 1: Set Up Configuration File**
Create a configuration file to store your backend API URL so you can easily change it later.

### Action:
- Create `config.js` in the root directory
- Add your backend API base URL
- This will be used throughout the application

---

## **STEP 2: Replace Firebase Authentication (Optional)**
Currently using Firebase. Decide if you want to:
- **Option A**: Keep Firebase and sync user data to your backend
- **Option B**: Replace Firebase entirely with your backend authentication

### Action:
- If keeping Firebase: Add API calls to sync user data after login
- If replacing: Remove Firebase code and implement your backend auth endpoints

---

## **STEP 3: Replace External Menu API**
Currently using TheMealDB API for menu items.

### Files to Modify:
- `Html-files/MenuAPI.js` (lines 51-56, 342-357)
- Replace `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}` with your backend endpoint

### Actions:
- Create backend endpoint: `GET /api/menu?category={category}`
- Update frontend to call your API instead
- Ensure response format matches expected structure

---

## **STEP 4: Convert Cart from localStorage to Backend**
Currently cart is stored in browser localStorage.

### Files to Modify:
- `Html-files/cart.js`
- `cartitems.js`
- Any files that use `localStorage.getItem('cartItems')`

### Actions:
- Create backend endpoints:
  - `GET /api/cart` - Get user's cart
  - `POST /api/cart/add` - Add item to cart
  - `PUT /api/cart/update` - Update item quantity
  - `DELETE /api/cart/remove` - Remove item from cart
- Replace all localStorage cart operations with API calls
- Handle user authentication (attach user ID to cart operations)

---

## **STEP 5: Implement User Authentication Endpoints**
If replacing Firebase, implement these endpoints.

### Backend Endpoints Needed:
- `POST /api/auth/register` - User signup
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Files to Modify:
- `Html-files/auth.js` (if replacing Firebase)
- `Html-files/login.html` (form submission)
- `Html-files/signup.html` (form submission)

---

## **STEP 6: Connect Contact Form to Backend**
Currently contact form only shows success message.

### Files to Modify:
- `contact-form.js` (lines 4-51)

### Actions:
- Create backend endpoint: `POST /api/contact`
- Send form data to your backend
- Handle success/error responses

---

## **STEP 7: Implement Order Management**
Currently order button just shows alert.

### Files to Modify:
- `Html-files/cart.js` (line 169 - orderNowButton)
- `cartitems.js` (line 67-74)

### Actions:
- Create backend endpoint: `POST /api/orders`
- Send cart items, user info, delivery address
- Handle order confirmation response
- Clear cart after successful order

---

## **STEP 8: Connect Other Forms**
Connect remaining forms to backend:
- Book Table form
- Feedback form
- Donation form
- Address form

### Actions:
- Identify all forms in the codebase
- Create corresponding backend endpoints
- Update form submissions to use API calls

---

## **STEP 9: Add Environment Variables (Optional but Recommended)**
Separate development and production API URLs.

### Action:
- Create `.env` file (if using build tools)
- Or use `config.js` with environment detection
- Store API base URL, API keys, etc.

---

## **STEP 10: Add Error Handling**
Add proper error handling for all API calls.

### Actions:
- Create a centralized error handling function
- Handle network errors, 401 (unauthorized), 500 (server errors)
- Show user-friendly error messages
- Implement retry logic if needed

---

## **STEP 11: Add Loading States**
Show loading indicators during API calls.

### Actions:
- Add loading spinners/indicators
- Disable buttons during API calls
- Show "Processing..." messages

---

## **STEP 12: Update CORS Settings**
If frontend and backend are on different domains.

### Backend Action:
- Configure CORS to allow requests from your frontend domain
- Set proper headers for credentials if using cookies

---

## **STEP 13: Testing**
Test all integrated features.

### Checklist:
- ✅ User can register/login
- ✅ Menu loads from your backend
- ✅ Cart operations work (add, update, remove)
- ✅ Orders can be placed
- ✅ Forms submit successfully
- ✅ Error handling works
- ✅ Loading states display correctly

---

## **STEP 14: Remove Unused Code**
Clean up code that's no longer needed.

### Actions:
- Remove Firebase config (if not using)
- Remove TheMealDB API calls
- Remove localStorage cart code
- Remove any unused dependencies

---

## **STEP 15: Documentation**
Document your API endpoints and integration.

### Actions:
- Document all API endpoints
- Add comments in code explaining backend calls
- Update README with setup instructions

---

## 📝 Quick Reference: Files That Need Changes

### High Priority:
1. `Html-files/MenuAPI.js` - Menu data source
2. `Html-files/cart.js` - Cart operations
3. `cartitems.js` - Cart item management
4. `Html-files/auth.js` - Authentication (if replacing Firebase)
5. `contact-form.js` - Contact form submission

### Medium Priority:
6. `Html-files/login.html` - Login form
7. `Html-files/signup.html` - Signup form
8. Forms in `Html-files/book-table.html`
9. Forms in `Html-files/feedback.html`
10. Forms in `Html-files/donation-form.html`

### Configuration:
11. Create `config.js` - API configuration
12. Update `package.json` if adding new dependencies

---

## 🚀 Recommended Order of Implementation

1. **Start with:** Configuration file (STEP 1)
2. **Then:** Menu API integration (STEP 3) - easiest to test
3. **Next:** Cart backend integration (STEP 4) - core functionality
4. **Then:** Authentication (STEP 2 or STEP 5) - needed for user-specific data
5. **Finally:** Forms and other features (STEP 6, 7, 8)
6. **Polish:** Error handling, loading states, testing (STEP 9-15)

---

**Good luck with your integration! 🎉**

