# Deploying Your Next.js Application

This guide explains how to deploy your Next.js application using GitHub for version control and various deployment options.

## Prerequisites

- [Git](https://git-scm.com/) installed on your local machine
- [Node.js](https://nodejs.org/) (version 18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- GitHub account

## 1. Setting Up GitHub Repository

1. Create a new repository on GitHub:
   - Go to [GitHub](https://github.com/)
   - Click "New repository"
   - Name your repository (e.g., "bluemoon-it-website")
   - Choose visibility (public or private)
   - Click "Create repository"

2. Initialize your local repository and push to GitHub:
   ```bash
   # In your project directory
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## 2. Environment Variables

This application requires the following environment variables for email functionality:

```
SMTP_HOST=smtp.zoho.com.au
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_password
```

Create a `.env.local` file locally for development. For production, you'll configure these in your deployment platform.

## 3. Deployment Options

### Option A: Vercel (Recommended)

Vercel is the easiest deployment platform for Next.js applications.

1. Sign up for [Vercel](https://vercel.com/) using your GitHub account
2. Import your GitHub repository
3. Configure environment variables in Vercel dashboard
4. Vercel will automatically deploy your application

**Advantages:**
- Optimized for Next.js
- Automatic deployments on git push
- Free tier available
- Built-in CDN and edge functions

### Option B: Netlify

1. Sign up for [Netlify](https://www.netlify.com/) using your GitHub account
2. Import your GitHub repository
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Configure environment variables in Netlify dashboard

### Option C: Custom Server Deployment

For more control, you can deploy to your own server:

1. Push your code to GitHub
2. Set up a GitHub Actions workflow for CI/CD:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Application

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to server
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        script: |
          cd /path/to/deployment
          git pull
          npm ci
          npm run build
          pm2 restart nextjs-app
```

3. Configure GitHub repository secrets for SSH access

## 4. Setting Up Continuous Deployment

For automatic deployments on code changes:

1. Set up branch protection rules on GitHub
2. Configure webhooks or use GitHub Actions
3. Set up automated testing if needed

## 5. Managing Environment Variables Securely

1. Never commit `.env` files to GitHub
2. Use GitHub Actions secrets or deployment platform settings
3. Rotate passwords and keys regularly

## 6. Monitoring and Maintenance

1. Set up monitoring for your application
2. Implement logging
3. Create a schedule for updates and maintenance

## Troubleshooting

- If deployment fails, check logs in your deployment platform
- Verify environment variables are correctly configured
- Ensure Node.js version compatibility
- Check for any build errors in the console output

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs) 