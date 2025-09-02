#!/bin/bash

# Railway deployment script
echo "Starting Railway deployment..."

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building application..."
npm run build

# Start the application
echo "Starting application..."
npm start
