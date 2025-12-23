# Security Website

A modern, secure, and scalable website template built with React, Vite, and Tailwind CSS.

## Features

- ⚡ **Vite** - Next generation frontend tooling with lightning-fast HMR
- ⚛️ **React 19** - Latest React with concurrent features
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📝 **TypeScript** - Static type checking for safer code
- 🎯 **React Query** - Powerful data synchronization and caching
- 🔧 **PostCSS & Autoprefixer** - Modern CSS processing

## Project Structure

```
website/
├── src/
│   ├── components/          # React components
│   │   └── ui/             # Reusable UI components
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components
│   ├── styles/             # Global styles
│   ├── lib/                # Utility functions and helpers
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # Vite type definitions
├── public/                 # Static assets
│   └── assets/            # Images and media files
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm, npm, or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

The application will open automatically at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

### Preview

Preview the production build locally:

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

### Type Checking

Check for TypeScript errors:

```bash
npm run type-check
# or
pnpm type-check
# or
yarn type-check
```

## Technologies

- **Frontend Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript 5
- **State Management:** React Query
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Routing:** React Router DOM

## Configuration Files

### vite.config.ts
Vite configuration with React plugin and path alias support for cleaner imports.

### tailwind.config.js
Customized Tailwind configuration with theme extensions and color variables.

### tsconfig.json
TypeScript configuration with strict mode enabled and path mapping for `@/*` imports.

### postcss.config.js
PostCSS configuration for CSS processing with Tailwind and Autoprefixer.

## Styling

This project uses Tailwind CSS with custom color variables defined in `src/styles/globals.css`. The design system supports:

- Dark mode (configurable)
- Custom color palette
- Responsive design
- Utility-first approach

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the repository.
