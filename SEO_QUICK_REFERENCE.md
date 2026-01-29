# SEO Quick Reference Guide

## 🔗 Important URLs to Update

Before deploying, update these placeholder URLs to your actual domain:

### In `index.html`:
- Line 13: `<link rel="canonical" href="https://saadnaveed.dev/" />`
- Line 17: `<meta property="og:url" content="https://saadnaveed.dev/" />`
- Line 20: `<meta property="og:image" content="https://saadnaveed.dev/og-image.jpg" />`
- Line 26: `<meta name="twitter:url" content="https://saadnaveed.dev/" />`
- Line 28: `<meta name="twitter:image" content="https://saadnaveed.dev/og-image.jpg" />`
- Line 30: `<meta name="twitter:creator" content="@SaadNaveedDev" />`
- Line 52: `"url": "https://saadnaveed.dev/"`

### In `public/robots.txt`:
- Line 6: `Sitemap: https://saadnaveed.dev/sitemap.xml`

### In `public/sitemap.xml`:
- Update all `<loc>` tags with your actual domain

---

## 🖼️ Missing Assets to Create

You need to create these image files in the `public/` folder:

### 1. **Favicons**
- `favicon-16x16.png` (16x16 pixels)
- `favicon-32x32.png` (32x32 pixels)
- `apple-touch-icon.png` (180x180 pixels)

**Tool:** Use https://realfavicongenerator.net/ with your logo

### 2. **Open Graph Image**
- `og-image.jpg` (1200x630 pixels)
- Should include your name and "Full-Stack Developer" text
- Use your brand colors

**Tool:** Use Canva or Figma to create this

---

## 🔍 How to Test Your SEO

### 1. **Test Structured Data**
- Go to: https://search.google.com/test/rich-results
- Enter your URL
- Check for Person schema and Review schema

### 2. **Test Open Graph**
- Go to: https://www.opengraph.xyz/
- Enter your URL
- See how it looks on Facebook/LinkedIn

### 3. **Test Twitter Cards**
- Go to: https://cards-dev.twitter.com/validator
- Enter your URL
- See preview

### 4. **Test Performance**
- Go to: https://pagespeed.web.dev/
- Enter your URL
- Aim for 90+ scores

### 5. **Test Accessibility**
- Go to: https://wave.webaim.org/
- Enter your URL
- Fix any errors

---

## 📊 Monitoring & Analytics

### **Google Search Console**
1. Go to https://search.google.com/search-console
2. Add your property
3. Submit `sitemap.xml`
4. Monitor indexing status

### **Google Analytics**
Add this to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ⚡ Performance Tips

### **Images**
- Compress all images before deploying
- Use WebP format when possible
- Keep under 200KB per image

### **Code Splitting**
- Already handled by Vite
- No action needed

### **Caching**
Add to your hosting provider:
```
Cache-Control: public, max-age=31536000, immutable
```
For static assets (JS, CSS, images)

---

## 🚀 Deployment Checklist

Before going live:

- [ ] Update all URLs to production domain
- [ ] Create favicon files (16x16, 32x32, 180x180)
- [ ] Create og-image.jpg (1200x630)
- [ ] Update Twitter handle if you have one
- [ ] Update GitHub/LinkedIn URLs in Person schema
- [ ] Test all meta tags with tools above
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+)
- [ ] Test on different browsers

---

## 🎯 Target Keywords

Optimize content for these keywords:
- Full-stack developer
- MERN stack developer
- React developer
- Node.js developer
- MongoDB developer
- JavaScript developer
- AI web development
- [Your Name] developer
- [Your City] web developer (if targeting local)

---

## 📝 Content Update Best Practices

When updating content:

1. **Keep H1 unique** - Only one per page
2. **Update meta description** - If content changes significantly
3. **Add alt text** - For every new image
4. **Update sitemap** - Change `<lastmod>` date
5. **Maintain heading hierarchy** - H1 → H2 → H3
6. **Use semantic HTML** - `<article>`, `<section>`, etc.

---

## 🔧 Maintenance

### **Monthly:**
- Check Google Search Console for errors
- Review Core Web Vitals
- Update project portfolio with new work

### **Quarterly:**
- Update testimonials
- Refresh meta descriptions if needed
- Review and optimize slow pages

### **Yearly:**
- Full SEO audit
- Update structured data if schema changes
- Refresh content for relevance

---

## 📚 Useful Resources

- **Schema.org:** https://schema.org/
- **Google SEO Guide:** https://developers.google.com/search/docs
- **Web.dev:** https://web.dev/ (Performance)
- **MDN Web Docs:** https://developer.mozilla.org/
- **Can I Use:** https://caniuse.com/ (Browser support)

---

**Last Updated:** January 29, 2026
