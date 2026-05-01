# 🚀 Quick Reference Card

## Running Locally (Same Output as Before)

### Step 1: Start Backend
```bash
cd backend
python app.py
```
✅ Backend running at: **http://localhost:5000**

### Step 2: Start Frontend (New Terminal)
```bash
cd frontend
python -m http.server 8080
```
✅ Frontend running at: **http://localhost:8080**

### Step 3: Test
- Open browser: `http://localhost:8080`
- Login: **TechCorp** / **techcorp123**
- Run a scan - works exactly the same!

---

## File Locations

| What | Where |
|------|-------|
| Frontend (HTML/JS/CSS) | `frontend/` folder |
| Backend (Python/Flask API) | `backend/` folder |
| API Configuration | `frontend/config.js` |
| Environment Variables | `backend/.env` |
| Main App | `backend/app.py` |
| Login Page | `frontend/index.html` |
| Dashboard | `frontend/dashboard.html` |

---

## Key Configuration Files

### `frontend/config.js` - API Endpoint
```javascript
const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000'                    // ← Local backend
  : 'https://your-backend-api.run.app';       // ← Production backend
```

### `backend/.env` - Backend Config
```env
MONGODB_URI=mongodb+srv://...     # Your MongoDB Atlas URI
GEMINI_API_KEY=AIzaSy...          # Your Gemini API key
SECRET_KEY=your-secret-key         # Session secret
```

---

## Deployment Commands

### Frontend to Vercel
```bash
cd frontend
npm install -g vercel    # One-time installation
vercel login             # One-time login
vercel                   # Deploy
```

### Backend to Google Cloud
```bash
cd backend
gcloud run deploy vulnerability-scanner-api --source .
```

---

## After Deployment

1. **Get your backend URL** from Google Cloud output
2. **Update** `frontend/config.js` with that URL
3. **Redeploy** frontend: `vercel --prod`
4. **Update CORS** in `backend/app.py` with your Vercel URL
5. **Redeploy** backend

---

## Documentation

- **RESTRUCTURING_SUMMARY.md** - What changed & quick start
- **DEPLOYMENT_GUIDE.md** - Detailed step-by-step deployment
- **README.md** - Project overview
- **frontend/README.md** - Frontend deployment guide
- **backend/README.md** - Backend deployment guide

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| CORS errors | Add your Vercel URL to `backend/app.py` CORS settings |
| 404 on API calls | Check `frontend/config.js` has correct backend URL |
| Database errors | Check MongoDB URI in `backend/.env` |
| Login fails | Ensure backend is running and `.env` is configured |

---

## Important URLs

- **Local Frontend**: http://localhost:8080
- **Local Backend**: http://localhost:5000
- **Production Frontend**: https://your-app.vercel.app (after deployment)
- **Production Backend**: https://your-app-xxx.run.app (after deployment)

---

## Test Credentials

- **Company**: TechCorp
- **Password**: techcorp123

---

**✅ Status**: Project successfully separated! Ready to run and deploy.
