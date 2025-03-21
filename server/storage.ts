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
        title: "Senior Data Privacy Engineer",
        description: "Design and implement advanced privacy solutions using cutting-edge technologies.",
        requirements: "5+ years of experience in data privacy engineering, strong knowledge of encryption technologies.",
        type: "Full-time",
        location: "Remote",
        experience: "Senior Level",
        isActive: true
      },
      {
        title: "AI/ML Engineer",
        description: "Develop machine learning models for privacy risk assessment and automated compliance.",
        requirements: "3+ years of ML experience, familiarity with privacy regulations, strong Python skills.",
        type: "Full-time",
        location: "Coimbatore",
        experience: "Mid-Senior Level",
        isActive: true
      }
    ];
    
    listings.forEach(listing => {
      this.createJobListing(listing);
    });
  }
}

export const storage = new MemStorage();
