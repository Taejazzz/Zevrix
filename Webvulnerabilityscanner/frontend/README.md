# Frontend - Web Vulnerability Scanner

This is the frontend for the Web Vulnerability Scanner, built with vanilla HTML, CSS, and JavaScript.

## Setup

The frontend is a static website that communicates with the backend API.

### Local Development

1. Update the API endpoint in `config.js`:
```javascript
const API_BASE_URL = 'http://localhost:5000';
```

2. Serve the files using a local server:

**Option 1: Using Python**
```bash
python -m http.server 8080
```

**Option 2: Using Node.js http-server**
```bash
npx http-server -p 8080
```

**Option 3: Using VS Code Live Server extension**
- Install "Live Server" extension
- Right-click on index.html and select "Open with Live Server"

3. Open your browser to `http://localhost:8080`

## Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Follow the prompts. For the first deployment:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **vulnerability-scanner-frontend**
- In which directory is your code located? **.**
- Want to override the settings? **N**

4. Update `config.js` with your deployed backend URL:
```javascript
const API_BASE_URL = 'https://your-backend-api.run.app';
```

5. Deploy again to apply changes:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - Framework Preset: **Other**
   - Root Directory: **frontend**
   - Build Command: Leave empty (static site)
   - Output Directory: **.**
5. Add Environment Variable (optional):
   - Name: `API_BASE_URL`
   - Value: Your backend API URL
6. Click "Deploy"

After deployment, update `config.js` with your backend URL and redeploy.

## Configuration

Before deploying to production, make sure to:

1. **Update API URL** in `config.js`:
   Replace `'https://your-backend-api.run.app'` with your actual Google Cloud Run backend URL

2. **Test locally** with the backend running to ensure everything works

3. **Update CORS settings** in the backend to allow requests from your Vercel domain

## File Structure

```
frontend/
├── index.html          # Login page (entry point)
├── dashboard.html      # Main dashboard
├── crawlers.html       # Crawlers/endpoint discovery page
├── config.js          # API configuration
├── static/            # Static assets (if any)
└── README.md          # This file
```

## Important Notes

- The frontend is completely static - no build process required
- All API calls are made to the backend via fetch/axios
- Make sure your backend CORS settings allow requests from your Vercel domain
- For production, always use HTTPS for both frontend and backend
