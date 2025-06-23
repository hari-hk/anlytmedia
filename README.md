# AnlytMedia

A modern web application for managing and sharing business cards, built with Next.js, TypeScript, and Tailwind CSS.

## Features
- Digital business card creation and management
- Admin dashboard for managing cards and models
- Authentication and authorization
- Responsive design with Tailwind CSS
- Social media integration

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **State & Data:** Supabase, React
- **Package Manager:** pnpm

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation
```bash
pnpm install
```

### Running the Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure
```
public/           # Static assets (SVGs, images)
src/
  app/            # Next.js app directory (pages, layouts, API routes)
  components/     # Reusable React components
  interfaces/     # TypeScript interfaces
  lib/            # Utility libraries (fetchers, Supabase client)
  utils/          # Utility functions
  views/          # Page-level React components/views
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
