# Eureka Investments

**Your Gateway to Spanish Real Estate**

Eureka Investments is a professional website designed to help Americans navigate the Spanish real estate market, particularly in Northern Spain. We provide comprehensive services from property search to legal assistance.

## 🌟 Features

- **Modern, Responsive Design**: Beautiful UI that works seamlessly on desktop, tablet, and mobile devices
- **Contact Form Integration**: Direct communication through EmailJS integration
- **Google Calendar Booking**: Easy appointment scheduling for consultations
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Secure**: Implemented security headers and best practices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- EmailJS account (for contact form functionality)
- Google Calendar appointment scheduling setup

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/eureka.git
   cd eureka
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your credentials:
   ```bash
   # EmailJS Configuration
   REACT_APP_EMAILJS_USER_ID=your_emailjs_public_key_here
   REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id_here

   # Google Calendar Scheduling Link
   REACT_APP_GOOGLE_CALENDAR_LINK=your_google_calendar_scheduling_link_here

   # Google reCAPTCHA v3 (optional - recommended for production)
   REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
   ```

   See `.env.example` for a template with all required variables.

4. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel's project settings:
   - `REACT_APP_EMAILJS_USER_ID`
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_GOOGLE_CALENDAR_LINK`
   - `REACT_APP_RECAPTCHA_SITE_KEY` (if using reCAPTCHA)
4. Deploy!

### Important Deployment Notes

- The `vercel.json` file includes security headers and proper routing configuration
- Make sure all environment variables are set in Vercel's dashboard
- Never commit your `.env` file to version control

## 🔧 Configuration

### EmailJS Setup

See `EMAILJS_SETUP.md` for detailed instructions on setting up EmailJS for the contact form.

### Security Headers

The `vercel.json` file includes security headers:
- `X-Content-Type-Options`: Prevents MIME type sniffing
- `X-Frame-Options`: Prevents clickjacking
- `X-XSS-Protection`: Enables XSS filter
- `Referrer-Policy`: Controls referrer information
- `Permissions-Policy`: Restricts browser features

## 📁 Project Structure

```
Eureka/
├── public/              # Static files
│   ├── Eureka.png      # Logo and favicon
│   └── index.html      # HTML template
├── src/
│   ├── assets/         # Images and media
│   ├── components/     # React components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Services.js
│   │   ├── Team.js
│   │   └── Why.js
│   ├── context/        # React context providers
│   ├── fonts/          # Custom fonts
│   ├── pages/          # Page components
│   │   └── Home.js
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
├── .env                # Environment variables (not in repo)
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore rules
├── package.json        # Dependencies
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## 🛠 Technologies Used

- **React** - Frontend library
- **React Router** - Navigation
- **Material-UI** - Component library
- **Framer Motion** - Animations
- **EmailJS** - Email service for contact form
- **Bootstrap** - CSS framework
- **Lucide React** - Icon library

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite

## 🔒 Security Best Practices

- All sensitive credentials are stored in environment variables
- Security headers are configured in `vercel.json`
- The `.env` file is in `.gitignore` to prevent accidental commits
- Consider adding reCAPTCHA to the contact form for production use

## 📞 Support

For questions or issues with this project, please contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved by Eureka Investments.

---

Built with ❤️ for Eureka Investments
