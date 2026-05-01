// API Configuration
// Update this URL to point to your deployed backend API
const API_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'  // Local development - Backend runs on port 3000
    : 'https://zevrix-backend.onrender.com';  // Production - Render Backend URL

// Export for use in other files
window.API_CONFIG = {
    BASE_URL: API_BASE_URL
};
