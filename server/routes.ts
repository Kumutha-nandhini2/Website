import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { insertInquirySchema, insertJobApplicationSchema } from "@shared/schema";
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { sendInquiryEmail, sendJobApplicationEmail } from './services/email';

// Use dynamic import for multer
const multerModule = await import('multer');
const multer = multerModule.default;

// Get the directory path in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const ext = path.extname(file.originalname);
      cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed'));
    }
  }
});

// Middleware to check if user is authenticated and is an admin
const isAdmin = (req: Request, res: Response, next: any) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ message: 'Forbidden' });
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);

  // Client Inquiry Endpoints
  app.post('/api/inquiries', async (req, res, next) => {
    try {
      // Validate request body
      const validatedData = insertInquirySchema.parse(req.body);
      
      // Create inquiry
      const inquiry = await storage.createInquiry(validatedData);
      
      // Send email notification
      try {
        await sendInquiryEmail(inquiry);
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue with the response even if email fails
      }
      
      res.status(201).json(inquiry);
    } catch (error) {
      next(error);
    }
  });

  // Job Application Endpoints
  app.post('/api/job-applications', upload.single('resumeFile'), async (req, res, next) => {
    try {
      // Add the resume path if a file was uploaded
      const applicationData = {
        ...req.body,
      };
      
      // Validate request body
      const validatedData = insertJobApplicationSchema.parse(applicationData);
      
      // Create job application
      const jobApplication = await storage.createJobApplication(validatedData);
      
      // Update resume path if a file was uploaded
      if (req.file) {
        jobApplication.resumePath = req.file.path;
      }
      
      res.status(201).json(jobApplication);
    } catch (error) {
      // If there's an error, remove the uploaded file if it exists
      if (req.file) {
        fs.unlink(req.file.path, () => {});
      }
      next(error);
    }
  });

  // Job Listings Endpoints
  app.get('/api/job-listings', async (req, res, next) => {
    try {
      const jobListings = await storage.getActiveJobListings();
      res.json(jobListings);
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/job-listings/:id', async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const jobListing = await storage.getJobListing(id);
      
      if (!jobListing) {
        return res.status(404).json({ message: 'Job listing not found' });
      }
      
      res.json(jobListing);
    } catch (error) {
      next(error);
    }
  });

  // Admin Endpoints - protected by isAdmin middleware
  app.get('/api/admin/inquiries', isAdmin, async (req, res, next) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/admin/job-applications', isAdmin, async (req, res, next) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      next(error);
    }
  });

  // Download resume file
  app.get('/api/admin/job-applications/:id/resume', isAdmin, async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      const application = await storage.getJobApplication(id);
      
      if (!application || !application.resumePath) {
        return res.status(404).json({ message: 'Resume not found' });
      }
      
      res.download(application.resumePath);
    } catch (error) {
      next(error);
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
