# Imaged Demo Website

A professional demo website for the Imaged image management application, featuring live VM access through Apache Guacamole.

## Features

- **Live Demo Access**: Connect to a Windows Server 2022 VM running Imaged via Guacamole RDP gateway
- **Video Demo**: Embedded video showcase of application features
- **User Manual**: Comprehensive documentation with interactive tabs
- **Installation Guide**: Step-by-step installation instructions for multiple platforms
- **Professional Design**: Modern, responsive UI built with React and CSS
- **Production Ready**: Optimized for performance and user experience

## Project Structure

```
imgwebint/
├── backend/                 # Express.js API server
│   ├── server.js           # Main server file with Guacamole integration
│   ├── package.json        # Backend dependencies
│   └── package-lock.json   # Lock file
├── frontend/               # React frontend application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   ├── App.css        # Global styles
│   │   ├── index.js       # Entry point
│   │   └── index.css      # Base styles
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Access to Guacamole server

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (optional):
   ```bash
   # Create .env file
   GUAC_BASE=http://your-guacamole-server:8443
   GUAC_USER=your-username
   GUAC_PASS=your-password
   GUAC_DEFAULT_CONN=your-connection-name
   PORT=4000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The backend will run on `http://localhost:4000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

## Configuration

### Guacamole Integration

The backend connects to your Guacamole server using the following configuration:

- **Base URL**: `http://20.24.65.164:8443` (default)
- **Authentication**: Username/password based
- **Connection**: Uses the default connection name "Imaged"

Update these values in `backend/server.js` or use environment variables.

### Video Demo

Replace the placeholder video URL in `frontend/src/components/VideoDemo.js`:

```javascript
// Replace this URL with your actual demo video
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
```

### Download Links

Update the download links in `frontend/src/components/Installation.js`:

```javascript
const downloadLinks = {
  windows: {
    primary: 'https://your-domain.com/imaged-windows-installer.exe',
    // ...
  },
  // ...
};
```

## Deployment

### Backend Deployment

1. Build for production:
   ```bash
   cd backend
   npm install --production
   ```

2. Deploy to your server (Heroku, AWS, DigitalOcean, etc.)

3. Set environment variables on your hosting platform

### Frontend Deployment

1. Build the React app:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to your static hosting service (Netlify, Vercel, AWS S3, etc.)

## API Endpoints

### POST /api/connect

Connects to the Guacamole server and returns a client URL.

**Response:**
```json
{
  "clientUrl": "http://guacamole-server:8443/guacamole/#/client/mysql/Imaged?token=abc123"
}
```

**Error Response:**
```json
{
  "error": "Failed to connect to Guacamole",
  "details": "Error message details"
}
```

## Customization

### Styling

The website uses custom CSS without any framework dependencies. Main style files:

- `frontend/src/index.css` - Global styles and utilities
- `frontend/src/App.css` - App-specific styles
- `frontend/src/components/*.css` - Component-specific styles

### Content

Update the following files to customize content:

- **Hero Section**: `frontend/src/components/Hero.js`
- **Video Demo**: `frontend/src/components/VideoDemo.js`
- **User Manual**: `frontend/src/components/UserManual.js`
- **Installation**: `frontend/src/components/Installation.js`
- **Footer**: `frontend/src/components/Footer.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Considerations

- The Guacamole server should be properly secured
- Consider implementing rate limiting for the connect endpoint
- Use HTTPS in production
- Validate and sanitize all user inputs

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the backend has CORS enabled
2. **Connection Failed**: Verify Guacamole server is accessible
3. **Video Not Playing**: Check video URL and browser permissions
4. **Styling Issues**: Clear browser cache and rebuild

### Support

For technical support or questions, please contact the development team.

## License

This project is proprietary software. All rights reserved.
