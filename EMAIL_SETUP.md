# Email Setup Guide for PrivacyWeave

This guide explains how to set up email notifications for form submissions on the PrivacyWeave website.

## Prerequisites

You will need:
- Email account credentials (Gmail, Outlook, Yahoo, etc.)
- For Gmail: An App Password (requires 2-Step Verification to be enabled)

## Setting Up Email Credentials

### Gmail Setup (Recommended)

1. **Enable 2-Step Verification:**
   - Go to your Google Account security settings: https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "App" → "Other (Custom name)" → Enter "PrivacyWeave Website"
   - Click "Generate"
   - Copy the 16-character password (spaces will be removed automatically)

3. **Update Environment Variables:**
   - Create a `.env` file in the root of the project with:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASSWORD=your-16-character-app-password
   EMAIL_RECIPIENTS=sadhanaa2326@gmail.com,mittal21jiya@gmail.com
   ```

### Outlook/Hotmail Setup

1. **Update Environment Variables:**
   - Create a `.env` file in the root of the project with:
   ```
   EMAIL_SERVICE=outlook
   EMAIL_USER=your.email@outlook.com
   EMAIL_PASSWORD=your-regular-password
   EMAIL_RECIPIENTS=sadhanaa2326@gmail.com,mittal21jiya@gmail.com
   ```

### Yahoo Setup

1. **Generate App Password:**
   - Go to Yahoo Account Security settings
   - Create an app password for "PrivacyWeave Website"

2. **Update Environment Variables:**
   - Create a `.env` file in the root of the project with:
   ```
   EMAIL_SERVICE=yahoo
   EMAIL_USER=your.email@yahoo.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_RECIPIENTS=sadhanaa2326@gmail.com,mittal21jiya@gmail.com
   ```

## Testing Email Configuration

After setting up your credentials:

1. Restart the application
2. Submit a test form (contact or job application)
3. Check console logs for email status
4. Verify that recipients received the notification email

## Troubleshooting

If emails are not being sent:

1. Check console logs for detailed error messages
2. Verify your credentials are correct
3. For Gmail: Ensure you're using an App Password, not your regular password
4. Try a different email service
5. Check if your email provider has any sending limits

## Additional Configuration

To add or change email recipients:

1. Edit the `EMAIL_RECIPIENTS` variable in your `.env` file
2. Use commas to separate multiple recipients: `email1@example.com,email2@example.com`