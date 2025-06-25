# EmailJS Template Setup - Step by Step

## You need to create a template first!

### 1. Login to EmailJS
Go to: https://dashboard.emailjs.com/

### 2. Go to Email Templates
Click on "Email Templates" in the left sidebar

### 3. Create New Template
Click the "Create New Template" button

### 4. Configure the Template

**IMPORTANT: Use these EXACT variable names in the template:**

#### To (Recipients):
```
jritu961@gmail.com
```

#### Subject:
```
New Contact Form Message from {{name}}
```

#### Content (use the visual editor):
```
You have a new message from your portfolio website:

Name: {{name}}
Email: {{email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

### 5. Save the Template
Click "Save" button

### 6. Get Template ID
After saving, you'll see the template ID at the top of the page. It looks like: `template_xxxxxxx`

### 7. Update Your Code

Option A: Update the .env file
```
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

Option B: Or directly in ContactSimple.jsx line 21:
```javascript
const TEMPLATE_ID = 'template_xxxxxxx'; // Replace with your actual template ID
```

### 8. Test It
1. Restart your dev server: `npm run dev`
2. Open browser console (F12)
3. Fill the form and submit
4. Check console for errors
5. Check your email

## Common Issues:

1. **"The template ID 'template_xxx' does not exist"**
   - You haven't created the template yet
   - The template ID is wrong

2. **"The service ID 'service_xxx' does not exist"**
   - Your service might be inactive
   - Check EmailJS dashboard → Email Services

3. **"The Public Key is invalid"**
   - Double-check your public key in EmailJS → Account → API Keys

## Alternative: Test with Default Template

EmailJS might have created a default template. Try these common template IDs:
- `template_default`
- `contact_form`
- `template_contact`