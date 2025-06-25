# EmailJS Template Configuration

## Your Template Should Have:

### Email Settings:
- **To Email:** `{{to_email}}` or just `jritu961@gmail.com`
- **Subject:** `New Contact from {{from_name}}`
- **From Name:** `{{from_name}}` (This will show the sender's name)
- **Reply To:** `{{from_email}}` (When you reply, it goes to the sender)

### Template Content:
```
Hello {{to_name}},

You have a new message from your portfolio website:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Click reply to respond to {{from_name}} at {{from_email}}
```

## What This Means:
- **You (jritu961@gmail.com)** will receive the email
- The email will show it's **from the person who filled the form**
- When you hit reply, it will **go to their email address**
- Gmail might still show "via emailjs.com" for security

## Important:
The email is sent FROM your Gmail account TO your Gmail account, but it contains the sender's information and allows you to reply directly to them.