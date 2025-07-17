# Server Deployment Guide for Blue Moon IT

## Current Issue: Permission Denied Error

The build error you encountered is due to file permission issues on your Ubuntu server. Here's how to fix it:

## Quick Fix

1. **Run the fix script** (uploaded to your repository):
   ```bash
   chmod +x fix-server-permissions.sh
   ./fix-server-permissions.sh
   ```

## Manual Fix Steps

If you prefer to fix manually:

### 1. Stop any running processes
```bash
pkill -f "next" || true
```

### 2. Clean previous build
```bash
rm -rf .next
rm -rf node_modules/.cache
```

### 3. Fix file permissions
```bash
# Fix ownership
sudo chown -R $USER:$USER .

# Fix directory permissions
chmod -R 755 .

# Fix file permissions
chmod -R 644 *.json *.js *.ts *.tsx *.md *.txt *.css

# Make build script executable
chmod +x build.sh
```

### 4. Fix favicon.ico conflicts
The error was caused by duplicate favicon.ico files. This has been fixed by removing `public/assets/favicon.ico`.

### 5. Reinstall dependencies
```bash
npm ci
```

### 6. Build with proper environment
```bash
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
npm run build
```

### 7. Start the server
```bash
npm start
```

## Using PM2 (Recommended for Production)

If you have PM2 installed:

```bash
# Install PM2 globally (if not already installed)
sudo npm install -g pm2

# Start the application
pm2 start npm --name "bluemoon-it" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

## Nginx Configuration (if using reverse proxy)

If you're using Nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name bluemoonit.com.au www.bluemoonit.com.au;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Create a `.env.production` file on your server:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
SMTP_HOST=smtp.zoho.com.au
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@domain.com
SMTP_PASSWORD=your_password
```

## Monitoring

Check if the application is running:
```bash
# Check process
ps aux | grep next

# Check port
netstat -tlnp | grep :3000

# Check logs (if using PM2)
pm2 logs bluemoon-it
```

## Troubleshooting

1. **Permission errors**: Run the fix script again
2. **Port already in use**: `pkill -f "next"` then restart
3. **Build fails**: Check Node.js version (should be 18+)
4. **Assets not loading**: Check file permissions and nginx config

## After Deployment

1. Test the website at your domain
2. Check all pages load correctly
3. Test the contact form
4. Verify the temporary popup works with `?preview-popup=true`

## Updates

To update the site:
```bash
git pull
npm ci
npm run build
pm2 restart bluemoon-it
``` 