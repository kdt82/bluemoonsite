const fs = require('fs');
const path = require('path');

console.log('=== Blue Moon IT Website Diagnostic ===\n');

// Check if .next directory exists
const nextDir = path.join(__dirname, '.next');
if (fs.existsSync(nextDir)) {
    console.log('✅ .next directory exists');
    
    // Check build ID
    const buildIdPath = path.join(nextDir, 'BUILD_ID');
    if (fs.existsSync(buildIdPath)) {
        const buildId = fs.readFileSync(buildIdPath, 'utf8').trim();
        console.log(`✅ Build ID: ${buildId}`);
    }
    
    // Check static files
    const staticDir = path.join(nextDir, 'static');
    if (fs.existsSync(staticDir)) {
        console.log('✅ Static files directory exists');
    }
    
    // Check server files
    const serverDir = path.join(nextDir, 'server');
    if (fs.existsSync(serverDir)) {
        console.log('✅ Server files directory exists');
    }
} else {
    console.log('❌ .next directory missing - run npm run build');
}

// Check public assets
const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
    console.log('✅ Public directory exists');
    
    const assetsDir = path.join(publicDir, 'assets');
    if (fs.existsSync(assetsDir)) {
        console.log('✅ Assets directory exists');
        
        // Check key assets
        const keyAssets = ['logo.png', 'hero.jpg', 'og-image.png'];
        keyAssets.forEach(asset => {
            const assetPath = path.join(assetsDir, asset);
            if (fs.existsSync(assetPath)) {
                console.log(`✅ Asset found: ${asset}`);
            } else {
                console.log(`❌ Asset missing: ${asset}`);
            }
        });
    }
}

// Check package.json
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
    const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(`✅ Package.json exists - Version: ${packageData.version}`);
    console.log(`✅ Next.js version: ${packageData.dependencies.next}`);
}

// Check environment
console.log('\n=== Environment Info ===');
console.log(`Node.js version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);

console.log('\n=== Suggested Server Commands ===');
console.log('1. Clear any existing processes:');
console.log('   pkill -f "next"');
console.log('2. Clean build:');
console.log('   rm -rf .next');
console.log('   npm run build');
console.log('3. Start production server:');
console.log('   npm start');
console.log('4. Or use PM2:');
console.log('   pm2 start npm --name "bluemoon-it" -- start'); 