#!/bin/bash

echo "=== Blue Moon IT Server Fix Script ==="
echo "Fixing permissions and deployment issues..."

# Stop any running processes
echo "1. Stopping any running Next.js processes..."
pkill -f "next" || true

# Clean up previous build
echo "2. Cleaning previous build..."
rm -rf .next
rm -rf node_modules/.cache

# Fix ownership and permissions
echo "3. Fixing file permissions..."
sudo chown -R $USER:$USER .
chmod -R 755 .
chmod -R 644 *.json *.js *.ts *.tsx *.md *.txt *.css
chmod +x build.sh

# Fix favicon.ico specifically
echo "4. Fixing favicon.ico permissions..."
if [ -f "app/favicon.ico" ]; then
    chmod 644 app/favicon.ico
    echo "   Fixed app/favicon.ico"
fi

if [ -f "public/favicon.ico" ]; then
    chmod 644 public/favicon.ico
    echo "   Fixed public/favicon.ico"
fi

if [ -f "public/assets/favicon.ico" ]; then
    chmod 644 public/assets/favicon.ico
    echo "   Fixed public/assets/favicon.ico"
fi

# Reinstall dependencies
echo "5. Reinstalling dependencies..."
npm ci

# Build with proper environment
echo "6. Building application..."
export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "7. Starting production server..."
    
    # Option 1: Direct start
    echo "You can now run: npm start"
    
    # Option 2: PM2 (if installed)
    if command -v pm2 &> /dev/null; then
        echo "Or with PM2: pm2 start npm --name 'bluemoon-it' -- start"
    fi
    
else
    echo "❌ Build failed. Check the error messages above."
    exit 1
fi

echo "=== Fix completed ===" 