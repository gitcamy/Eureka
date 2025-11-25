# reCAPTCHA v3 Setup Guide

## Why Add reCAPTCHA?

Adding reCAPTCHA to your contact form is **highly recommended** for a production website because it:
- Prevents spam bot submissions
- Protects your EmailJS free tier (200 emails/month limit)
- Improves security and credibility
- Works invisibly in the background (v3)

## Setup Instructions

### Step 1: Get reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Click **+** to create a new site
3. Fill in the form:
   - **Label**: "Eureka Investments Contact Form"
   - **reCAPTCHA type**: Choose **reCAPTCHA v3**
   - **Domains**: Add your domain(s):
     - `localhost` (for testing)
     - `yourdomain.com`
     - `yourdomain.vercel.app`
   - Accept the terms
4. Click **Submit**
5. Copy your **Site Key** (you'll add this to your `.env` file)
6. Keep the **Secret Key** safe (you'll configure this in EmailJS)

### Step 2: Add to Environment Variables

Add to your `.env` file:
```bash
REACT_APP_RECAPTCHA_SITE_KEY=your_site_key_here
```

Add to Vercel environment variables:
- Go to your Vercel project
- Settings → Environment Variables
- Add `REACT_APP_RECAPTCHA_SITE_KEY` with your site key

### Step 3: Install react-google-recaptcha-v3

```bash
npm install react-google-recaptcha-v3
```

### Step 4: Wrap Your App with reCAPTCHA Provider

Update `src/App.js`:

```javascript
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { MobileProvider } from "./context/MobileContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <MobileProvider>
        <Router>
          <div className="App">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </div>
        </Router>
      </MobileProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
```

### Step 5: Update Contact Component

Update `src/components/Contact.js` to use reCAPTCHA:

```javascript
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contact = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  // ... existing state ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Execute reCAPTCHA
        if (!executeRecaptcha) {
          console.log('Execute recaptcha not yet available');
          setShowError(true);
          setIsSubmitting(false);
          return;
        }

        const token = await executeRecaptcha('contact_form');
        
        const response = await send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            message: formData.message,
            'g-recaptcha-response': token, // Send token to EmailJS
          }
        );

        // ... rest of your code ...
      } catch (error) {
        console.error("Error sending email:", error);
        setShowError(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  // ... rest of component ...
};
```

### Step 6: Configure EmailJS to Verify reCAPTCHA

1. Go to your EmailJS dashboard
2. Navigate to your email template
3. In the template settings, find **reCAPTCHA** section
4. Add your **Secret Key** (from Step 1)
5. Enable reCAPTCHA verification
6. Save your template

## Testing

1. Test on `localhost` first
2. Check browser console for any reCAPTCHA errors
3. Verify that the reCAPTCHA badge appears in the bottom-right corner
4. Submit the form and verify it works
5. Check EmailJS dashboard to confirm the email was sent

## Important Notes

- reCAPTCHA v3 runs in the background and doesn't interrupt users
- The reCAPTCHA badge will appear in the bottom-right corner
- You can hide the badge with CSS, but must include the reCAPTCHA terms in your privacy policy
- Free tier allows 1 million assessments/month

## Optional: Hide reCAPTCHA Badge

Add to your CSS if you mention reCAPTCHA in your privacy policy:

```css
.grecaptcha-badge {
  visibility: hidden;
}
```

Then add to your footer:
```
This site is protected by reCAPTCHA and the Google
<a href="https://policies.google.com/privacy">Privacy Policy</a> and
<a href="https://policies.google.com/terms">Terms of Service</a> apply.
```

---

**Your contact form will now be protected from spam and bots!** 🛡️
