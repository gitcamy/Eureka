# EmailJS Configuration Guide

## Setup Instructions to Forward Emails to ipico002@gmail.com

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (supports up to 200 emails/month)

### Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account that will send the emails
5. Note down the **Service ID** (e.g., `service_xyz123`)

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with these variables:

```
Subject: New Contact Form Message from {{name}}

From: {{firstName}} {{lastName}}
Email: {{email}}

Message:
{{message}}

---
This message was sent via your website contact form.
```

4. **Important**: Set the **To Email** field to: `ipico002@gmail.com`
5. Note down the **Template ID** (e.g., `template_abc456`)

### Step 4: Get Your Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (also called User ID)
3. Note it down (e.g., `user_def789`)

### Step 5: Add to Your .env File
Create or update your `.env` file in the project root:

```bash
# EmailJS Configuration
REACT_APP_EMAILJS_USER_ID=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here

# Google Calendar
REACT_APP_GOOGLE_CALENDAR_LINK=https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0eCYie1EwLsCN7zk5p80J-Q9Vh8Obuh8rYQH9Ti528Mc-A6YypUETbpftI3q0psjdIGfXfKAyY
```

### Step 6: Restart Your Development Server
```bash
npm start
```

## Template Variables Reference

The contact form sends these variables to your EmailJS template:
- `{{firstName}}` - Customer's first name
- `{{lastName}}` - Customer's last name  
- `{{name}}` - Full name (firstName + lastName)
- `{{email}}` - Customer's email address
- `{{message}}` - Customer's message
- `{{to_email}}` - Hardcoded to ipico002@gmail.com

## Testing
1. Fill out the contact form on your website
2. Submit the form
3. Check **ipico002@gmail.com** inbox for the message
4. Also check your EmailJS dashboard for email statistics

## Troubleshooting
- If emails aren't arriving, check the EmailJS dashboard for error logs
- Verify that ipico002@gmail.com is set as the recipient in your template
- Make sure your .env file is not in .gitignore and values are correct
- Check browser console for any error messages

## Free Tier Limits
- 200 emails per month
- If you need more, consider upgrading to a paid plan

---

All messages sent through the "Connect with us" form will now be forwarded to **ipico002@gmail.com**!

