# Fix Reply-To Configuration

## Step 1: Update Your EmailJS Service
1. Go to: https://dashboard.emailjs.com/admin/services
2. Click on your Gmail service (service_hnlwgwx)
3. Scroll to "Default Headers" section
4. Add this:
   - **Reply-To:** `{{reply_to}}`
5. Save the service

## Step 2: Update Your Email Template
1. Go to: https://dashboard.emailjs.com/admin/templates
2. Edit your template
3. Make sure the content clearly shows who sent it:

**Subject:**
```
New Contact: {{from_name}} ({{from_email}})
```

**Content:**
```
You have a new message from your portfolio:

=================================
FROM: {{from_name}}
EMAIL: {{from_email}}
=================================

MESSAGE:
{{message}}

=================================
To reply, just hit the reply button and it will go to {{from_email}}
```

## What Will Happen:
- **From:** jritu961@gmail.com (Gmail requirement)
- **To:** jritu961@gmail.com (correct)
- **Reply-To:** jritujhvhg961@gmail.com (the form filler's email)
- **Subject:** Will show who actually sent it
- **When you hit Reply:** It will go to jritujhvhg961@gmail.com

## Test It:
1. Send a test email
2. When you receive it, hit "Reply"
3. Check that the "To" field in your reply is the sender's email, not yours