# Blue Moon IT - Professional IT Support

This is a [Next.js](https://nextjs.org) project for Blue Moon IT, providing professional IT support services in Illawarra, Shoalhaven, Eurobodalla, and Southern Highlands.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Configure your environment variables in `.env.local`:
   - SMTP settings for email functionality
   - Other configuration as needed

## Project Structure

- `/app` - Next.js App Router pages and components
- `/public` - Static assets and images
- `/app/components` - Reusable React components
- `/app/api` - API routes for contact form and health checks

## Key Features

- Professional IT support service pages
- Contact form with email integration
- SEO optimized with proper meta tags
- Responsive design with Tailwind CSS
- Article/blog system for IT security content

## Deployment

This project is configured for deployment on Railway with automatic GitHub integration.

### Railway Deployment
- Automatic deployments on push to `main` branch
- Environment variables configured in Railway dashboard
- Health check endpoint at `/api/health`

See `RAILWAY-DEPLOYMENT.md` for detailed deployment instructions.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Railway Documentation](https://docs.railway.app/) - deployment platform
