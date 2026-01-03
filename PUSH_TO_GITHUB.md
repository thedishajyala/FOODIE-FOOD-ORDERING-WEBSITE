# 🚀 Push to GitHub - Quick Commands

After you create the repository on GitHub, run these commands:

## If repository name is "food-ordering-website":

```bash
cd /Users/dishajyala/Downloads/FOODIE/Food-ordering-website
git remote set-url origin https://github.com/thedishajyala/food-ordering-website.git
git push -u origin main
```

## If you chose a different repository name:

```bash
cd /Users/dishajyala/Downloads/FOODIE/Food-ordering-website
git remote set-url origin https://github.com/thedishajyala/YOUR-REPO-NAME.git
git push -u origin main
```

## If you get authentication error:

GitHub now requires a Personal Access Token instead of password:

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Foodie Website"
4. Select scopes: Check "repo" (full control)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. When pushing, use the token as password when prompted

---

**Your files are already committed and ready to push! ✅**

