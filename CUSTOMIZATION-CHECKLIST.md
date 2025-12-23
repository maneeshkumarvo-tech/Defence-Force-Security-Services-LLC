# Customization Checklist

Use this checklist to ensure you've customized everything for your company.

---

## 📝 Company Information

### Basic Info
- [ ] Company name (in `src/App.tsx`)
- [ ] Tagline/slogan (in `src/App.tsx`)
- [ ] Company description (in `src/App.tsx` and `src/pages/about.tsx`)
- [ ] Domain name (for social media links)

### Contact Details
- [ ] Email address (in `src/pages/contact.tsx` and footer)
- [ ] Phone number (in `src/pages/contact.tsx` and footer)
- [ ] Physical address (in `src/pages/contact.tsx` and footer)
- [ ] Business hours (in `src/pages/contact.tsx`)

---

## 🎨 Branding

### Logo
- [ ] Replace logo file in `public/assets/logo.png`
- [ ] Update logo path in `src/App.tsx` (if different filename)
- [ ] Update logo alt text in `src/App.tsx`
- [ ] Test logo displays correctly on all pages

### Colors
- [ ] Update primary color in `src/styles/globals.css`
- [ ] Update secondary color in `src/styles/globals.css`
- [ ] Update accent color in `src/styles/globals.css`
- [ ] Test color scheme looks good on all pages

### Favicon
- [ ] Replace `public/favicon.ico` with your favicon
- [ ] Test favicon shows in browser tab

---

## 🔗 Social Media Links

### Header Social Icons (src/layouts/parts/Header.tsx)
- [ ] Facebook URL (line ~15)
- [ ] Twitter URL (line ~16)
- [ ] Instagram URL (line ~17)
- [ ] LinkedIn URL (line ~18)
- [ ] YouTube URL (line ~19)
- [ ] TikTok URL (line ~20)

### Footer Social Links (src/App.tsx)
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] LinkedIn URL

### Verify All Links
- [ ] Test all social media links open correctly
- [ ] Verify social media accounts exist
- [ ] Update social media profiles with website link

---

## 📄 Page Content

### Homepage (src/pages/index.tsx)
- [ ] Hero section headline
- [ ] Hero section subheadline
- [ ] Hero section CTA button text
- [ ] Hero background image
- [ ] Services section content
- [ ] Why Choose Us section
- [ ] Statistics/numbers
- [ ] Testimonials (if applicable)
- [ ] CTA section at bottom

### About Page (src/pages/about.tsx)
- [ ] Company story/history
- [ ] Mission statement
- [ ] Vision statement
- [ ] Values
- [ ] Team section (if applicable)
- [ ] Certifications/accreditations
- [ ] Company images

### Services Pages
- [ ] Services overview page (src/pages/services.tsx)
- [ ] Individual service pages (src/pages/services/*.tsx)
- [ ] Service descriptions
- [ ] Service images
- [ ] Pricing information (if applicable)

### Sectors Page (src/pages/sectors.tsx)
- [ ] Industry sectors you serve
- [ ] Sector descriptions
- [ ] Sector images

### Blog Page (src/pages/blog.tsx)
- [ ] Blog posts (or remove if not using)
- [ ] Blog categories
- [ ] Author information

### Career Page (src/pages/career.tsx)
- [ ] Job openings
- [ ] Company culture description
- [ ] Benefits information
- [ ] Application process
- [ ] Application form/link

### Contact Page (src/pages/contact.tsx)
- [ ] Contact form fields
- [ ] Contact information
- [ ] Map/location (if applicable)
- [ ] Business hours

---

## 🖼️ Images

### Replace Stock Images
- [ ] Homepage hero image
- [ ] About page images
- [ ] Service page images
- [ ] Sector page images
- [ ] Team photos (if applicable)
- [ ] Office/facility photos
- [ ] Logo/branding images

### Image Optimization
- [ ] Compress images (use tinypng.com or similar)
- [ ] Use appropriate image sizes
- [ ] Add descriptive alt text to all images
- [ ] Test images load quickly

---

## 🔍 SEO & Meta Tags

### Every Page Should Have:
- [ ] Unique page title (60 characters max)
- [ ] Meta description (160 characters max)
- [ ] Relevant keywords in content
- [ ] Proper heading hierarchy (H1, H2, H3)
- [ ] Alt text on all images

### Pages to Update:
- [ ] Homepage meta tags
- [ ] About page meta tags
- [ ] Services page meta tags
- [ ] Individual service pages meta tags
- [ ] Sectors page meta tags
- [ ] Blog page meta tags
- [ ] Career page meta tags
- [ ] Contact page meta tags

---

## 🎯 Functionality

### Navigation
- [ ] Test all menu links work
- [ ] Test dropdown menus work
- [ ] Test mobile menu works
- [ ] Test logo links to homepage

### Forms
- [ ] Test contact form (if connected to backend)
- [ ] Update form submission endpoint
- [ ] Test form validation
- [ ] Add success/error messages

### Links
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Test social media links
- [ ] Test email links (mailto:)
- [ ] Test phone links (tel:)

### Animations
- [ ] Test scrolling banner works
- [ ] Test hover effects work
- [ ] Test page transitions work

---

## 📱 Responsive Design

### Test on Different Devices
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Mobile landscape

### Test on Different Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## 🚀 Pre-Deployment

### Technical Checks
- [ ] Run `npm run type-check` (no errors)
- [ ] Run `npm run build` (builds successfully)
- [ ] Test built site locally
- [ ] No console errors in browser
- [ ] All images load correctly
- [ ] All links work

### Performance
- [ ] Images optimized
- [ ] Page load time acceptable
- [ ] No unnecessary dependencies

### Security
- [ ] Update any default passwords
- [ ] Remove any test/dummy data
- [ ] Secure API endpoints (if applicable)

---

## 🌐 Post-Deployment

### Domain & Hosting
- [ ] Domain connected
- [ ] SSL certificate active (HTTPS)
- [ ] WWW redirect configured
- [ ] Test site on live domain

### Analytics & Tracking
- [ ] Google Analytics installed (optional)
- [ ] Google Search Console setup (optional)
- [ ] Facebook Pixel installed (optional)

### Business Listings
- [ ] Google My Business updated
- [ ] Bing Places updated
- [ ] Social media profiles updated with website

### Marketing
- [ ] Announce website launch on social media
- [ ] Update email signatures with website
- [ ] Update business cards with website
- [ ] Submit to relevant directories

---

## ✅ Final Verification

### User Testing
- [ ] Ask someone else to test the website
- [ ] Get feedback on usability
- [ ] Fix any issues found

### Content Review
- [ ] Proofread all text for typos
- [ ] Check grammar and spelling
- [ ] Verify all information is accurate
- [ ] Check dates are current

### Legal
- [ ] Privacy policy page (if collecting data)
- [ ] Terms of service page (if applicable)
- [ ] Cookie consent (if applicable)
- [ ] Copyright notice in footer

---

## 🎉 Launch!

Once everything is checked off, you're ready to launch!

**Remember to:**
- Monitor website for first few days
- Check analytics regularly
- Update content regularly
- Respond to contact form submissions
- Keep software dependencies updated

---

**Congratulations on your new website! 🚀**