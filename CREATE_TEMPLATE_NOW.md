# 🚨 CREATE YOUR EMAIL TEMPLATE NOW!

## Step 1: Go to EmailJS Templates
Click this link: https://dashboard.emailjs.com/admin/templates

## Step 2: Click "Create New Template"

## Step 3: Fill in these fields EXACTLY:

### To (email addresses):
```
jritu961@gmail.com
```

### Subject:
```
New Message from {{name}}
```

### Content:
Click on the "Code" view and paste this:
```html
<p>Hi Ritu,</p>
<p>You have a new message from your portfolio:</p>
<p><strong>Name:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

## Step 4: Click "Save"

## Step 5: Copy the Template ID
After saving, you'll see something like:
```
Template ID: template_abc123xyz
```

## Step 6: Update your .env file
Open `/client/.env` and change this line:
```
VITE_EMAILJS_TEMPLATE_ID=template_abc123xyz
```
(Replace `template_abc123xyz` with YOUR actual template ID)

## Step 7: Restart your server
```bash
npm run dev
```

## That's it! Your contact form will now work! 🎉