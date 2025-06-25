# EmailJS Setup Guide

To enable email functionality in your portfolio, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (jritu961@gmail.com)
5. Name your service (e.g., "portfolio_service")
6. Click "Create Service"
7. Copy the Service ID (looks like: service_xxxxxxx)

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up your template:

**Subject:** New Portfolio Contact from {{from_name}}

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Portfolio Contact Form
```

4. Click "Save"
5. Copy the Template ID (looks like: template_xxxxxxx)

## 4. Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your Public Key

## 5. Update Your Code
Open `/client/src/components/Contact.jsx` and replace these values:

```javascript
const serviceId = 'YOUR_SERVICE_ID';  // Replace with your actual service ID
const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
const publicKey = 'YOUR_PUBLIC_KEY';   // Replace with your actual public key
```

## 6. Test Your Contact Form
1. Start your application
2. Fill out the contact form
3. Submit and check if you receive the email at jritu961@gmail.com

## Notes:
- EmailJS free tier allows 200 emails per month
- Make sure to keep your Public Key secure (though it's safe to use in frontend)
- You can customize the email template further in EmailJS dashboard