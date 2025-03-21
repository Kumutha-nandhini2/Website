import { users, type User, type InsertUser, inquiries, type Inquiry, type InsertInquiry, jobApplications, type JobApplication, type InsertJobApplication, jobListings, type JobListing, type InsertJobListing } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Inquiry operations
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
  
  // Job application operations
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplications(): Promise<JobApplication[]>;
  getJobApplication(id: number): Promise<JobApplication | undefined>;
  
  // Job listings operations
  createJobListing(listing: InsertJobListing): Promise<JobListing>;
  getJobListings(): Promise<JobListing[]>;
  getActiveJobListings(): Promise<JobListing[]>;
  getJobListing(id: number): Promise<JobListing | undefined>;
  
  // Session store
  sessionStore: any;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private jobApplications: Map<number, JobApplication>;
  private jobListings: Map<number, JobListing>;
  private userIdCounter: number;
  private inquiryIdCounter: number;
  private jobApplicationIdCounter: number;
  private jobListingIdCounter: number;
  sessionStore: any;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.jobApplications = new Map();
    this.jobListings = new Map();
    
    this.userIdCounter = 1;
    this.inquiryIdCounter = 1;
    this.jobApplicationIdCounter = 1;
    this.jobListingIdCounter = 1;
    
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // Prune expired entries every 24h
    });
    
    // Seed with sample job listings
    this.seedJobListings();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id, role: "user" };
    this.users.set(id, user);
    return user;
  }
  
  // Inquiry operations
  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.inquiryIdCounter++;
    const inquiry: Inquiry = { 
      ...insertInquiry, 
      id, 
      createdAt: new Date() 
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
  
  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  
  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }
  
  // Job application operations
  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = this.jobApplicationIdCounter++;
    const application: JobApplication = { 
      ...insertApplication, 
      id, 
      resumePath: null, // This would be updated after file upload
      message: insertApplication.message || null,
      createdAt: new Date() 
    };
    this.jobApplications.set(id, application);
    return application;
  }
  
  async getJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  
  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    return this.jobApplications.get(id);
  }
  
  // Job listings operations
  async createJobListing(insertListing: InsertJobListing): Promise<JobListing> {
    const id = this.jobListingIdCounter++;
    const listing: JobListing = { 
      ...insertListing, 
      id,
      isActive: insertListing.isActive ?? true,
      createdAt: new Date() 
    };
    this.jobListings.set(id, listing);
    return listing;
  }
  
  async getJobListings(): Promise<JobListing[]> {
    return Array.from(this.jobListings.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  
  async getActiveJobListings(): Promise<JobListing[]> {
    return Array.from(this.jobListings.values())
      .filter(listing => listing.isActive)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }
  
  async getJobListing(id: number): Promise<JobListing | undefined> {
    return this.jobListings.get(id);
  }
  
  // Seed job listings
  private seedJobListings() {
    const listings: InsertJobListing[] = [
      {
        title: "AI/ML Engineer (0-1 Year Experience)",
        description: "Join our innovative team to develop and implement AI/ML solutions for data privacy and compliance automation. You'll work on cutting-edge privacy-preserving AI models and contribute to our machine learning pipeline for data classification and policy automation.",
        requirements: "Bachelor's degree in Computer Science, AI, or related field. Basic knowledge of Python and machine learning libraries (TensorFlow, PyTorch, or scikit-learn). Understanding of fundamental ML concepts and algorithms. Eagerness to learn privacy-enhancing technologies. Strong analytical and problem-solving skills. Collaborative mindset and ability to work in cross-functional teams.",
        type: "Full-time",
        location: "Coimbatore",
        experience: "Entry Level (0-1 Year)",
        isActive: true
      },
      {
        title: "Full Stack Developer (0-1 Year Experience)",
        description: "Develop responsive web applications and APIs for our privacy automation platform. You'll help build intuitive interfaces for privacy management tools and contribute to developing scalable backend services that power our data governance solutions.",
        requirements: "Bachelor's degree in Computer Science or related technical field. Knowledge of JavaScript/TypeScript, HTML, and CSS. Familiarity with React or similar frontend frameworks. Basic understanding of Node.js and RESTful API concepts. Willingness to learn and adapt to new technologies. Passion for creating user-friendly interfaces. Basic understanding of database concepts.",
        type: "Full-time",
        location: "Coimbatore",
        experience: "Entry Level (0-1 Year)",
        isActive: true
      },
      {
        title: "Cybersecurity & Encryption Specialist (0-1 Year Experience)",
        description: "Help implement end-to-end encryption and security protocols for our privacy-focused applications. You'll work on data protection mechanisms, assist in security assessment of our systems, and help implement encryption standards that ensure our clients' data remains secure.",
        requirements: "Bachelor's degree in Computer Science, Cybersecurity, or related field. Knowledge of fundamental encryption algorithms and techniques. Basic understanding of network security principles. Interest in privacy regulations (GDPR, CCPA, etc.). Familiarity with security tools and practices. Strong attention to detail. Excellent analytical and problem-solving skills. Eagerness to learn modern security frameworks.",
        type: "Full-time",
        location: "Coimbatore",
        experience: "Entry Level (0-1 Year)",
        isActive: true
      }
    ];
    
    listings.forEach(listing => {
      this.createJobListing(listing);
    });
  }
}

export const storage = new MemStorage();
