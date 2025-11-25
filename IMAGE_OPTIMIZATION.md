# Image Optimization Guide

## Why Optimize Images?

Your current images in `/src/assets/` may be slowing down your website. Optimized images:
- Load faster (better user experience)
- Improve SEO rankings
- Reduce bandwidth costs
- Improve mobile performance
- Better Core Web Vitals scores

## Current Images to Optimize

```
src/assets/
├── beach1.jpg
├── beachHome.jpg
├── cow.jpg
├── cudillero.jpg
├── gazte.jpg
├── greenHouse.jpg
├── hiking.jpg
├── homeDesktop.jpg
├── homeMobile.jpg
├── hondarribia.jpg
├── ibai1.png
├── ibai2.png
├── leftHome.jpg
├── merienda.jpg
├── michael.png
├── rightHome.jpg
├── sanfermin.jpg
└── walkability.jpg
```

## Quick Optimization Steps

### Option 1: Online Tools (Easiest - Recommended for Beginners)

1. **TinyPNG/TinyJPG** (https://tinypng.com/)
   - Drag and drop your images
   - Download compressed versions
   - Usually reduces size by 50-70% with no visible quality loss
   - Free for up to 20 images at a time

2. **Squoosh** (https://squoosh.app/)
   - Google's image compression tool
   - Compare before/after
   - Convert to WebP format
   - More control over quality

### Option 2: Command Line (Faster for Bulk)

Install `imagemagick` and optimize all images:

```bash
# Install (macOS)
brew install imagemagick

# Optimize JPGs (80% quality)
for file in src/assets/*.jpg; do
  convert "$file" -quality 80 -strip "$file"
done

# Optimize PNGs
for file in src/assets/*.png; do
  convert "$file" -strip "$file"
done
```

### Option 3: Automated with npm package

Install a build-time optimizer:

```bash
npm install --save-dev image-webpack-loader
```

Then create `config-overrides.js` (requires `react-app-rewired`):

```javascript
module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true, quality: 80 },
            optipng: { enabled: true },
            pngquant: { quality: [0.65, 0.90], speed: 4 },
            gifsicle: { interlaced: false }
          }
        }
      ]
    });
    return config;
  }
};
```

## Best Practices for Your Project

### 1. **Convert to WebP Format**

WebP images are 25-35% smaller than JPG/PNG with same quality.

```bash
# Install cwebp
brew install webp

# Convert a single image
cwebp -q 80 src/assets/homeDesktop.jpg -o src/assets/homeDesktop.webp

# Convert all JPGs
for file in src/assets/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

Then update your React components to use WebP with JPG fallback:

```javascript
<picture>
  <source srcSet={homeDesktopWebP} type="image/webp" />
  <img src={homeDesktopJPG} alt="Home Desktop" />
</picture>
```

### 2. **Lazy Load Images**

Update your image components to lazy load:

```javascript
<img 
  src={yourImage} 
  alt="Description"
  loading="lazy"
  decoding="async"
/>
```

### 3. **Responsive Images**

Serve different image sizes for different devices:

```javascript
<img
  src={homeDesktop}
  srcSet={`
    ${homeMobile} 480w,
    ${homeTablet} 768w,
    ${homeDesktop} 1200w
  `}
  sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px"
  alt="Home"
  loading="lazy"
/>
```

### 4. **Use CSS for Simple Images**

For backgrounds, use CSS background-image with optimization:

```css
.hero {
  background-image: image-set(
    url("homeDesktop.webp") type("image/webp"),
    url("homeDesktop.jpg") type("image/jpeg")
  );
}
```

## Recommended Sizes for Your Project

Based on typical usage:

- **Hero images**: 1920x1080px (or your aspect ratio)
- **Thumbnails**: 400x300px
- **Team photos**: 300x300px
- **Background images**: 1920x1080px
- **Mobile hero**: 768x600px

## Target File Sizes

Aim for these file sizes:

- **Hero/Large images**: < 150KB
- **Medium images**: < 50KB
- **Thumbnails**: < 20KB
- **Icons/Small images**: < 10KB

## Quick Action Plan

**Do this now:**

1. Go to https://tinypng.com/
2. Upload all your JPG images (5-10 at a time)
3. Download the compressed versions
4. Replace the originals in `src/assets/`
5. Do the same for PNG images
6. Test your site to ensure images still look good

**Estimated time saving:** Your pages will load 2-5 seconds faster!

## React Component Example with Optimization

```javascript
import React from 'react';
import homeDesktop from '../assets/homeDesktop.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={homeDesktop}
        alt="Beautiful Northern Spain landscape"
        loading="lazy"
        decoding="async"
        width="1920"
        height="1080"
      />
    </div>
  );
};

export default Hero;
```

Always include:
- `alt` attribute (for SEO and accessibility)
- `loading="lazy"` (for performance)
- `decoding="async"` (for better rendering)
- `width` and `height` (to prevent layout shift)

## Testing Your Optimizations

1. **PageSpeed Insights**: https://pagespeed.web.dev/
   - Enter your URL
   - Check "Image elements do not have explicit width and height"
   - Check "Serve images in next-gen formats"

2. **Check file sizes**:
   ```bash
   ls -lh src/assets/*.jpg src/assets/*.png
   ```

3. **Before/After comparison**:
   - Use Chrome DevTools → Network tab
   - Check total size transferred

## CDN Option (Advanced)

For even better performance, consider using a CDN:

1. **Cloudinary** (free tier: 25GB/month)
2. **Imgix** (free tier: 1000 images)
3. **ImageKit** (free tier: 20GB/month)

These automatically optimize and resize images on-the-fly.

---

**Start with TinyPNG today - it takes 10 minutes and makes a huge difference!** 🚀
