# Email Setup Guide for PrivacyWeave

This guide provides instructions on how to set up email notifications for the PrivacyWeave website. When properly configured, the system will automatically send email notifications when users submit contact forms or job applications.

## Required Environment Variables

To enable email functionality, you need to set the following environment variables:

1. `EMAIL_SERVICE` - The name of the email service provider
2. `EMAIL_USER` - The email address used to send notifications
3. `EMAIL_PASSWORD` - The password or app password for the email account
4. `EMAIL_RECIPIENTS` - (Optional) Comma-separated list of email addresses to receive notifications

If `EMAIL_RECIPIENTS` is not provided, notifications will be sent to the default recipients: `sadhanaa2326@gmail.com` and `mittal21jiya@gmail.com`.

## Setting Up Gmail

For Gmail accounts, follow these steps:

1. **Create an App Password** (recommended instead of your regular password):
   - Go to your Google Account settings at https://myaccount.google.com/
   - Navigate to Security > App passwords
   - You may need to enable 2-Step Verification first if you haven't already
   - Select "Mail" as the app and "Other" as the device (name it "PrivacyWeave")
   - Copy the 16-character app password that is generated

2. **Set the environment variables**:
   - `EMAIL_SERVICE` = `gmail`
   - `EMAIL_USER` = `your.email@gmail.com`
   - `EMAIL_PASSWORD` = `your-16-character-app-password`
   - `EMAIL_RECIPIENTS` = `recipient1@example.com,recipient2@example.com`

## Setting Up Outlook/Hotmail

For Outlook or Hotmail accounts:

1. **Set the environment variables**:
   - `EMAIL_SERVICE` = `outlook` (or `hotmail`)
   - `EMAIL_USER` = `your.email@outlook.com`
   - `EMAIL_PASSWORD` = `your-account-password`
   - `EMAIL_RECIPIENTS` = `recipient1@example.com,recipient2@example.com`

## Setting Up Yahoo Mail

For Yahoo Mail accounts:

1. **Generate an App Password**:
   - Go to your Yahoo Account security settings
   - Enable two-step verification if not already enabled
   - Generate an app password specifically for this application

2. **Set the environment variables**:
   - `EMAIL_SERVICE` = `yahoo`
   - `EMAIL_USER` = `your.email@yahoo.com`
   - `EMAIL_PASSWORD` = `your-app-password`
   - `EMAIL_RECIPIENTS` = `recipient1@example.com,recipient2@example.com`

## Other Email Providers

For other email providers, use the following environment variables:

- `EMAIL_SERVICE` = The service name (if supported by Nodemailer) or `SMTP`
- `EMAIL_USER` = Your email address
- `EMAIL_PASSWORD` = Your password
- `EMAIL_RECIPIENTS` = Comma-separated recipient list

If your provider is not directly supported, you may need to manually configure SMTP settings in the `email.ts` file.

## Testing Email Configuration

After setting up the environment variables:

1. Log in to the admin dashboard
2. Navigate to the "Email Settings" tab
3. Check if the status shows as "Configured"
4. Use the "Test Inquiry Email" or "Test Job Application Email" buttons to send test emails

If the test is successful, you'll see a confirmation message, and the recipients should receive the test email.

## Troubleshooting

If emails are not being sent:

1. Check the server logs for detailed error messages
2. Verify that all environment variables are set correctly
3. For Gmail users:
   - Ensure that "Less secure app access" is enabled in your Google Account settings (if not using an app password)
   - Try using an app password instead of your regular password
4. Check if your email provider is blocking the sending of emails
5. Try a different email service if the current one continues to have issues