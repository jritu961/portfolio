# Update Your EmailJS Template

## Go to your EmailJS template and update these settings:

### 1. Go to: https://dashboard.emailjs.com/admin/templates
### 2. Click on your template (template_4yeniyk)
### 3. Update these fields:

**From Email:** 
```
{{user_email}}
```

**From Name:**
```
{{user_name}}
```

**Reply To:**
```
{{user_email}}
```

**To Email:**
```
jritu961@gmail.com
```

**Subject:**
```
New Portfolio Message from {{user_name}}
```

**Content:**
```
You have received a new message from your portfolio website:

Name: {{user_name}}
Email: {{user_email}}

Message:
{{user_message}}

---
You can reply directly to this email to respond to {{user_name}}.
```

### 4. Save the template

## Important Notes:
- The "From Email" will show as the sender's email
- The "Reply To" ensures when you hit reply, it goes to the sender
- Some email providers may still show "via emailjs.com" for security
- The email will arrive in your inbox (jritu961@gmail.com) but appear to be FROM the person who filled out the form