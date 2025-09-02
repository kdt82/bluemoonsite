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
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=admin@bluemoonit.com.au
SMTP_PASSWORD=a8BHn7s57QgG6Z!
```

## Configuration Files

- `nixpacks.toml` - Nixpacks build configuration
- `railway.toml` - Railway-specific configuration
- `next.config.ts` - Next.js configuration with standalone output
- `package.json` - Updated with Railway-compatible scripts

## Deployment Process

1. Push changes to the `main` branch
2. Railway automatically detects changes
3. Railway builds and deploys the application using Nixpacks
4. Your site is available at your Railway-provided URL

## Troubleshooting

### Common Build Errors

1. **"Cannot create code snapshot"** error:
   - This usually indicates a configuration issue
   - Check Railway logs for specific error details
   - Verify environment variables are set correctly

2. **Build failures**:
   - Ensure `NODE_ENV=production` is set
   - Check that all dependencies are in `package.json`
   - Review Railway build logs

3. **Start command issues**:
   - Railway uses `npm start` by default
   - Make sure the start script is properly defined

### Manual Deployment Steps

If automatic deployment fails, you can try:

1. In Railway dashboard, go to your project
2. Click "Deploy" to trigger manual deployment
3. Check deployment logs for errors
4. Verify environment variables are configured

## Key Features

- **Standalone Output**: Optimized for containerized deployment
- **Automatic Deployments**: Connected to GitHub for CI/CD
- **Node.js 18+**: Optimized for latest features
- **Production Ready**: Configured for production environment
- **Port Binding**: Automatically binds to Railway's assigned port

## Monitoring

- View deployments in Railway dashboard
- Check logs for any deployment issues
- Monitor performance and resource usage
- Health check available at `/api/health`

## Custom Domain

To use a custom domain:
1. Go to your Railway project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Configure DNS settings as instructed

## Support

If you encounter deployment issues:
1. Check Railway deployment logs in dashboard
2. Verify environment variables are set correctly
3. Ensure `nixpacks.toml` configuration is valid
4. Contact Railway support if errors persist
