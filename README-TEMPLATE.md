# Security Services Website Template

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue.svg)

A professional, modern, and fully responsive website template for security services companies. Built with React 19, TypeScript, and Tailwind CSS.

## 🌟 Features

- ✅ **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ✅ **Modern Tech Stack** - React 19, TypeScript, Vite, Tailwind CSS
- ✅ **SEO Optimized** - Meta tags, semantic HTML, proper heading hierarchy
- ✅ **Fast Performance** - Optimized images, code splitting, lazy loading
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Professional UI** - shadcn UI components library
- ✅ **Smooth Animations** - CSS animations and transitions
- ✅ **Multi-page** - Home, About, Services, Sectors, Blog, Career, Contact
- ✅ **Contact Form Ready** - Easy to integrate with backend
- ✅ **Blog Ready** - Blog page template included
- ✅ **Easy Customization** - Well-documented and organized code

## 📸 Screenshots

### Homepage
![Homepage](docs/screenshots/homepage.png)

### Services Page
![Services](docs/screenshots/services.png)

### Mobile View
![Mobile](docs/screenshots/mobile.png)

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/security-website-template.git
   cd security-website-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📝 Customization

### 1. Update Company Information

Edit `src/App.tsx` to update:
- Company name
- Logo
- Contact information
- Social media links

### 2. Replace Logo

Add your logo to `public/assets/logo.png`

### 3. Update Colors

Edit `src/styles/globals.css` to change the color scheme:

```css
:root {
  --primary: 220 90% 56%;  /* Your primary color */
  --secondary: 220 14% 96%; /* Your secondary color */
  /* ... other colors */
}
```

### 4. Update Content

Edit page files in `src/pages/`:
- `index.tsx` - Homepage
- `about.tsx` - About page
- `services.tsx` - Services overview
- `contact.tsx` - Contact page
- etc.

### 5. Replace Images

Add your images to `public/assets/` and update references in page files.

## 📚 Documentation

- [Setup Guide](SETUP-GUIDE.md) - Detailed installation and customization instructions
- [Customization Checklist](CUSTOMIZATION-CHECKLIST.md) - Complete checklist for customization

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click
4. Connect your custom domain

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Deploy with one click
4. Connect your custom domain

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist/` folder contents via FTP
3. Point your domain to the hosting

## 📦 Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn UI
- **Icons:** Lucide React
- **Routing:** React Router
- **Forms:** React Hook Form

## 📁 Project Structure

```
project-root/
├── public/              # Static assets
│   └── assets/         # Images, logos, etc.
├── src/
│   ├── components/     # Reusable components
│   │   └── ui/        # shadcn UI components
│   ├── layouts/       # Layout components
│   │   └── parts/     # Header, Footer
│   ├── pages/         # Page components
│   │   └── services/  # Service pages
│   ├── styles/        # Global CSS
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── routes.tsx     # Route definitions
├── SETUP-GUIDE.md     # Setup instructions
├── CUSTOMIZATION-CHECKLIST.md  # Customization checklist
└── package.json       # Dependencies
```

## 🎨 Pages Included

1. **Homepage** - Hero section, services overview, why choose us, CTA
2. **About** - Company story, mission, vision, values
3. **Services** - Services overview with detailed service pages:
   - Security Guard Services
   - Event Security
   - Mobile Patrol
4. **Sectors** - Industries served
5. **Blog** - Blog listing and posts
6. **Career** - Job openings and application
7. **Contact** - Contact form and information

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

## 📞 Support

If you have any questions or need help, please:

1. Check the [Setup Guide](SETUP-GUIDE.md)
2. Check the [Customization Checklist](CUSTOMIZATION-CHECKLIST.md)
3. Open an issue on GitHub

## 🌟 Show Your Support

If you find this template helpful, please give it a ⭐️ on GitHub!

---

**Built with ❤️ for security services companies**