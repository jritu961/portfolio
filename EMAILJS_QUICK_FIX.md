# EmailJS Quick Fix

## Current Issue
You're getting the "engine.checkVersion is not a function" error because the template ID needs to be created in EmailJS.

## Quick Solution

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/admin/templates
   - Log in with your account

2. **Create New Template**
   - Click "Create New Template"
   - Use the Default Template (it's pre-configured)
   - Just modify these fields:
     - To Email: `jritu961@gmail.com`
   - Save the template

3. **Get Template ID**
   - After saving, you'll see the template ID (looks like: `template_xxxxxxx`)
   - Copy this ID

4. **Update .env file**
   ```
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   ```
   Replace `template_xxxxxxx` with your actual template ID

5. **Restart your dev server**
   ```bash
   npm run dev
   ```

## Alternative: Use Default Template
If you're having issues, EmailJS often creates a default template called `template_default`. Try updating your .env:
```
REACT_APP_EMAILJS_TEMPLATE_ID=template_default
```

## Test Your Setup
1. Open browser console (F12)
2. Fill the contact form
3. Click Send
4. Check console for any errors
5. Check your email at jritu961@gmail.com