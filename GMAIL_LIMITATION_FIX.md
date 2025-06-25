# Gmail Limitation - How to Fix

## The Problem:
Gmail doesn't allow changing the "From" email address for security reasons. This is why both sender and receiver show as jritu961@gmail.com.

## The Solution - Update Your EmailJS Service Settings:

### 1. Go to EmailJS Email Services
- Visit: https://dashboard.emailjs.com/admin/services
- Click on your Gmail service (service_hnlwgwx)

### 2. In the Service Settings, configure:
- **Name:** Keep as is
- **Service ID:** service_hnlwgwx
- **Reply To:** `{{from_email}}`  ← This is crucial!
- **From Name:** `{{from_name}}`
- **From Email:** (leave as your Gmail)

### 3. Update Your Email Template:
Go to your template and ensure:

**To:** `jritu961@gmail.com`
**Subject:** `Portfolio Contact from {{from_name}} ({{from_email}})`

**Content:**
```
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
Hit reply to respond to {{from_name}}
```

### 4. Save Everything

## Result:
- Email will still show FROM: jritu961@gmail.com (Gmail requirement)
- BUT when you hit "Reply", it will go to the recruiter's email
- The subject and content will clearly show who sent it

## Alternative Services (if you need true custom FROM):
- SendGrid
- Mailgun  
- Elastic Email
- Postmark

These services allow custom FROM addresses but require more setup.