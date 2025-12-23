# Security Services Website Template - Setup Guide

## 🚀 Quick Start (5 Minutes)

This is a professional security services website template built with React, TypeScript, and Tailwind CSS.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)
- Your company logo and images
- Your domain name (if you have one)

---

## 🛠️ Installation Steps

### Step 1: Extract/Clone the Project

**If you received a ZIP file:**
```bash
# Extract the ZIP file to a folder
# Open terminal/command prompt in that folder
```

**If you're cloning from GitHub:**
```bash
git clone [repository-url]
cd [project-folder]
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages (React, TypeScript, Tailwind CSS, etc.)

### Step 3: Run Locally

```bash
npm run dev
```

Open your browser and go to: `http://localhost:5173`

You should see the website running!

---

## ✏️ Customization Guide

### 1. Update Company Information

Edit `src/App.tsx` and find the configuration section:

```tsx
// Around line 10-50, update these values:
const config = {
  logo: {
    src: '/assets/logo.png',  // Your logo path
    alt: 'Your Company Name',
    href: '/'
  },
  companyName: 'Your Company Name',
  tagline: 'Your Tagline',
  // ... update all fields
}
```

### 2. Replace Logo

- Add your logo to: `public/assets/logo.png`
- Recommended size: 200x60 pixels (PNG with transparent background)
- Update the path in `src/App.tsx` if using a different filename

### 3. Update Social Media Links

In `src/App.tsx`, find the social links section:

```tsx
socialLinks: [
  { href: 'https://facebook.com/yourcompany', label: 'Facebook' },
  { href: 'https://instagram.com/yourcompany', label: 'Instagram' },
  { href: 'https://linkedin.com/company/yourcompany', label: 'LinkedIn' }
]
```

Also update in `src/layouts/parts/Header.tsx`:

```tsx
const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/yourcompany', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/yourcompany', label: 'Twitter' },
  // ... update all platforms
];
```

### 4. Update Contact Information

Edit `src/pages/contact.tsx`:

```tsx
// Update email, phone, address
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'your-email@yourcompany.com',
    link: 'mailto:your-email@yourcompany.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 XXX XXX XXXX',
    link: 'tel:+1XXXXXXXXXX'
  },
  // ... update address
];
```

### 5. Customize Colors (Optional)

Edit `src/styles/globals.css`:

```css
:root {
  --primary: 220 90% 56%;  /* Your primary color (HSL format) */
  --secondary: 220 14% 96%; /* Your secondary color */
  /* ... update other colors */
}
```

**How to convert your brand color to HSL:**
1. Go to: https://www.w3schools.com/colors/colors_converter.asp
2. Enter your hex color (e.g., #3B82F6)
3. Get HSL values (e.g., 220, 90%, 56%)
4. Enter as: `220 90% 56%` (space-separated, no hsl())

### 6. Replace Images

Replace stock images in `public/assets/` with your own:

- Hero images
- Service images
- Team photos
- Company photos

Make sure to update image paths in the page files if you change filenames.

### 7. Update Page Content

Edit these files to customize content:

- `src/pages/index.tsx` - Homepage
- `src/pages/about.tsx` - About page
- `src/pages/services.tsx` - Services overview
- `src/pages/services/*.tsx` - Individual service pages
- `src/pages/sectors.tsx` - Sectors page
- `src/pages/blog.tsx` - Blog page
- `src/pages/career.tsx` - Career page
- `src/pages/contact.tsx` - Contact page

### 8. Update SEO Meta Tags

In each page file, update the `<Helmet>` section:

```tsx
<Helmet>
  <title>Your Page Title | Your Company Name</title>
  <meta name="description" content="Your page description (160 characters max)" />
</Helmet>
```

---

## 🏗️ Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

1. Sign up at [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository (or upload folder)
4. Vercel auto-detects settings
5. Click "Deploy"
6. Connect your custom domain in settings

**Cost:** Free for personal/small business

### Option 2: Netlify (Free & Easy)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag & drop your `dist/` folder (after running `npm run build`)
3. Or connect GitHub repository for auto-deploy
4. Connect your custom domain in settings

**Cost:** Free for personal/small business

### Option 3: Traditional Hosting (cPanel)

1. Run `npm run build`
2. Upload contents of `dist/` folder via FTP
3. Point your domain to the hosting
4. Enable SSL certificate

**Cost:** $5-20/month (varies by host)

---

## 🌐 Connect Your Domain

### For Vercel/Netlify:

1. Go to project settings
2. Click "Domains"
3. Add your domain (e.g., yourcompany.com)
4. Follow DNS instructions:
   - Add A record or CNAME record
   - Wait for DNS propagation (15 min - 48 hours)
5. SSL certificate is automatically provisioned

### DNS Records (Typical):

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

---

## ✅ Pre-Launch Checklist

### Content:
- [ ] Company name updated everywhere
- [ ] Logo replaced
- [ ] All social media links updated
- [ ] Contact information updated (email, phone, address)
- [ ] All page content customized
- [ ] Images replaced with your own
- [ ] SEO meta tags updated on all pages

### Technical:
- [ ] Test all pages locally (`npm run dev`)
- [ ] Test all links work
- [ ] Test contact form (if applicable)
- [ ] Test on mobile devices
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors

### Deployment:
- [ ] Domain connected
- [ ] SSL/HTTPS enabled
- [ ] Test website on live domain
- [ ] Test all pages on live site
- [ ] Test on different browsers
- [ ] Test on mobile devices

### SEO & Marketing:
- [ ] Google Analytics added (optional)
- [ ] Google Search Console setup (optional)
- [ ] Favicon added
- [ ] Social media profiles created
- [ ] Business listings updated (Google My Business, etc.)

---

## 🆘 Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### "Port 5173 already in use"
- Close other applications using that port
- Or change port in `vite.config.ts`

### Build errors
- Delete `node_modules/` folder
- Delete `package-lock.json`
- Run `npm install` again
- Run `npm run build` again

### Images not showing
- Check image paths are correct
- Images in `public/` folder are accessed as `/filename.jpg` (not `/public/filename.jpg`)
- Check image file extensions match (jpg vs jpeg, png vs PNG)

### Styles not applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check `src/styles/globals.css` is imported in `src/main.tsx`

---

## 📚 Project Structure

```
project-root/
├── public/              # Static assets (images, favicon, etc.)
│   └── assets/         # Your images go here
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/        # shadcn UI components
│   ├── layouts/       # Layout components (Header, Footer, etc.)
│   │   └── parts/     # Header and Footer components
│   ├── pages/         # Page components
│   │   └── services/  # Service detail pages
│   ├── styles/        # Global CSS
│   │   └── globals.css # Main stylesheet (colors, animations)
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main app component (EDIT THIS FOR CONFIG)
│   ├── main.tsx       # App entry point
│   └── routes.tsx     # Route definitions
├── package.json       # Dependencies and scripts
├── vite.config.ts     # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

---

## 🎨 Key Features

- ✅ **Responsive Design** - Works on desktop, tablet, mobile
- ✅ **Modern Stack** - React 19, TypeScript, Tailwind CSS
- ✅ **SEO Optimized** - Meta tags, semantic HTML
- ✅ **Fast Loading** - Optimized images and code splitting
- ✅ **Accessible** - WCAG 2.1 AA compliant
- ✅ **Professional UI** - shadcn UI components
- ✅ **Smooth Animations** - CSS animations and transitions
- ✅ **Contact Form Ready** - Easy to integrate with backend
- ✅ **Blog Ready** - Blog page template included
- ✅ **Multi-page** - Home, About, Services, Sectors, Blog, Career, Contact

---

## 📞 Need Help?

If you run into issues:

1. Check this guide carefully
2. Search for error messages online
3. Check the [React documentation](https://react.dev/)
4. Check the [Tailwind CSS documentation](https://tailwindcss.com/)
5. Ask in developer communities (Stack Overflow, Reddit, etc.)

---

## 📄 License

This template is provided as-is for your use. Feel free to customize and deploy for your business.

---

## 🎉 You're Ready!

Follow the steps above, customize the content, and launch your professional security services website!

Good luck! 🚀