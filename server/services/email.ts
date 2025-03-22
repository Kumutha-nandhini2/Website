import nodemailer from 'nodemailer';
import { Inquiry, JobApplication } from '@shared/schema';

// Email configuration
const getTransporter = () => {
  // Create a transporter using environment variables
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    },
    // Add debug options for troubleshooting
    debug: process.env.NODE_ENV !== 'production',
    logger: process.env.NODE_ENV !== 'production'
  });
  
  // Verify connection configuration
  if (process.env.NODE_ENV !== 'production') {
    console.log('Email configuration:');
    console.log(`- Service: ${process.env.EMAIL_SERVICE}`);
    console.log(`- User: ${process.env.EMAIL_USER}`);
    console.log(`- Password: ${process.env.EMAIL_PASSWORD ? '[PROVIDED]' : '[MISSING]'}`);
  }
  
  return transporter;
};

// Recipients list
const recipients = ['sadhanaa2326@gmail.com', 'mittal21jiya@gmail.com'];

/**
 * Send email for a new inquiry/demo request
 */
export const sendInquiryEmail = async (inquiry: Inquiry): Promise<boolean> => {
  try {
    // Verify we have email credentials before attempting to send
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn('Email credentials not configured, skipping notification');
      return false;
    }
    
    const transporter = getTransporter();
    
    console.log(`Attempting to send inquiry email notification for ${inquiry.company}`);
    
    // Create email content
    const subject = `New Demo Request: ${inquiry.company}`;
    const text = `
      New Demo Request Received:
      
      First Name: ${inquiry.firstName}
      Last Name: ${inquiry.lastName}
      Email: ${inquiry.email}
      Company: ${inquiry.company}
      Industry: ${inquiry.industry}
      
      Message:
      ${inquiry.message}
      
      Submitted on: ${new Date(inquiry.createdAt || new Date()).toLocaleString()}
    `;
    
    const html = `
      <h2>New Demo Request Received</h2>
      
      <p><strong>First Name:</strong> ${inquiry.firstName}</p>
      <p><strong>Last Name:</strong> ${inquiry.lastName}</p>
      <p><strong>Email:</strong> ${inquiry.email}</p>
      <p><strong>Company:</strong> ${inquiry.company}</p>
      <p><strong>Industry:</strong> ${inquiry.industry}</p>
      
      <h3>Message:</h3>
      <p>${inquiry.message.replace(/\n/g, '<br>')}</p>
      
      <p><em>Submitted on: ${new Date(inquiry.createdAt || new Date()).toLocaleString()}</em></p>
    `;
    
    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients.join(', '),
      subject,
      text,
      html
    });
    
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending inquiry email:', error);
    
    // More detailed error information for debugging
    if (error instanceof Error) {
      console.error(`Error type: ${error.name}`);
      console.error(`Error message: ${error.message}`);
      console.error(`Error stack: ${error.stack}`);
    }
    
    return false;
  }
};

/**
 * Send email for a new job application
 */
export const sendJobApplicationEmail = async (application: JobApplication): Promise<boolean> => {
  try {
    const transporter = getTransporter();
    
    // Create email content
    const subject = `New Career Application: ${application.position}`;
    const text = `
      New Job Application Received:
      
      Full Name: ${application.fullName}
      Email: ${application.email}
      Phone: ${application.phone}
      Position: ${application.position}
      Experience: ${application.experience} years
      
      Message:
      ${application.message || 'No cover letter provided'}
      
      Resume: ${application.resumePath ? 'Attached' : 'Not provided'}
      
      Submitted on: ${new Date(application.createdAt || new Date()).toLocaleString()}
    `;
    
    const html = `
      <h2>New Job Application Received</h2>
      
      <p><strong>Full Name:</strong> ${application.fullName}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Phone:</strong> ${application.phone}</p>
      <p><strong>Position:</strong> ${application.position}</p>
      <p><strong>Experience:</strong> ${application.experience} years</p>
      
      <h3>Cover Letter:</h3>
      <p>${application.message ? application.message.replace(/\n/g, '<br>') : 'No cover letter provided'}</p>
      
      <p><strong>Resume:</strong> ${application.resumePath ? 'Attached' : 'Not provided'}</p>
      
      <p><em>Submitted on: ${new Date(application.createdAt || new Date()).toLocaleString()}</em></p>
    `;
    
    // Prepare email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_USER,
      to: recipients.join(', '),
      subject,
      text,
      html
    };
    
    // Add attachment if resume exists
    if (application.resumePath) {
      mailOptions.attachments = [
        {
          filename: `${application.fullName.replace(/\s+/g, '_')}_Resume.pdf`,
          path: application.resumePath
        }
      ];
    }
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending job application email:', error);
    return false;
  }
};