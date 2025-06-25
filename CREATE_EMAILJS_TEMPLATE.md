# Create EmailJS Template - Step by Step

You already have:
- Service ID: service_hnlwgwx
- Public Key: y7vOA6dJ5VGMMe0oe

## Now you need to create a template:

1. Go to https://dashboard.emailjs.com/admin/templates
2. Click "Create New Template"
3. Use these exact settings:

### Template Settings:

**To Email:**
```
jritu961@gmail.com
```

**From Name:**
```
{{from_name}}
```

**From Email:**
```
{{from_email}}
```

**Reply To:**
```
{{from_email}}
```

**Subject:**
```
New Portfolio Message from {{from_name}}
```

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #10b981;">New Portfolio Contact</h2>
  
  <p><strong>From:</strong> {{from_name}}</p>
  <p><strong>Email:</strong> {{from_email}}</p>
  
  <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Message:</h3>
    <p style="color: #4b5563; white-space: pre-wrap;">{{message}}</p>
  </div>
  
  <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
  
  <p style="color: #6b7280; font-size: 14px;">
    This email was sent from your portfolio contact form.
  </p>
</div>
```

4. Click "Save"
5. After saving, you'll see your Template ID at the top (looks like: template_xxxxxxx)
6. Copy that Template ID

## Update your .env file:

Replace the template ID in your .env file with the actual one you just created.