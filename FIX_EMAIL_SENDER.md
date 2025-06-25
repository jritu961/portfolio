# Fix Email Sender Display

## The Issue:
Gmail (when used with EmailJS) will always show YOUR email as the sender for security reasons. This is a Gmail limitation, not an EmailJS issue.

## The Solution:
Make it clear in the email content who the message is from.

### Update Your EmailJS Template:

1. Go to: https://dashboard.emailjs.com/admin/templates
2. Edit your template (template_4yeniyk)
3. Update these fields:

**Subject:**
```
Portfolio Message from {{name}} - {{email}}
```

**Content:**
```html
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #10b981; margin-bottom: 20px;">New Portfolio Contact</h2>
    
    <div style="background-color: #e6fffa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
      <p style="margin: 5px 0;"><strong>From:</strong> {{name}}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{{email}}">{{email}}</a></p>
    </div>
    
    <div style="margin-top: 20px;">
      <h3 style="color: #374151;">Message:</h3>
      <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
    </div>
    
    <hr style="margin: 30px 0; border: 1px solid #e5e7eb;">
    
    <p style="color: #6b7280; font-size: 14px;">
      To reply to {{name}}, click here: <a href="mailto:{{email}}" style="color: #10b981;">{{email}}</a>
    </p>
  </div>
</div>
```

4. Save the template

## Result:
- The email will still come from your Gmail (security requirement)
- BUT the subject line will clearly show who sent it
- The email content will prominently display the sender's name and email
- You can easily click their email to reply

## Alternative: Use Reply-To
In your EmailJS email service settings:
1. Go to Email Services
2. Click on your Gmail service
3. Look for "Default Reply-To" setting
4. Set it to: `{{email}}`
5. Save

This way, when you hit "Reply" in Gmail, it will automatically reply to the sender's email, not your own.