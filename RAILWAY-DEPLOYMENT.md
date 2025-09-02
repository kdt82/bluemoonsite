# Railway Deployment Guide

This project is configured for automatic deployment to Railway.

## Setup

1. **Railway Project**: Your GitHub repository is already connected to Railway
2. **Automatic Deployments**: Any push to the `main` branch will trigger a deployment
3. **Environment Variables**: Configure these in your Railway project dashboard

## Required Environment Variables

Set these in your Railway project dashboard:

```
NODE_ENV=production
SMTP_HOST=smtp.zoho.com.au
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_password
```

## Configuration Files

- `railway.toml` - Railway-specific configuration
- `Procfile` - Process definition for Railway
- `package.json` - Updated with Railway-compatible start command

## Deployment Process

1. Push changes to the `main` branch
2. Railway automatically detects changes
3. Railway builds and deploys the application
4. Your site is available at your Railway-provided URL

## Key Features

- **Automatic Deployments**: Connected to GitHub for CI/CD
- **Node.js 18+**: Optimized for latest features
- **Production Ready**: Configured for production environment
- **Port Binding**: Automatically binds to Railway's assigned port

## Monitoring

- View deployments in Railway dashboard
- Check logs for any deployment issues
- Monitor performance and resource usage

## Custom Domain

To use a custom domain:
1. Go to your Railway project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Configure DNS settings as instructed

## Support

If you encounter deployment issues:
1. Check Railway deployment logs
2. Verify environment variables are set
3. Ensure all dependencies are properly listed in package.json
