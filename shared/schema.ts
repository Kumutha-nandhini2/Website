import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { File } from 'formdata-node';

// User schema for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  name: true,
  password: true,
});

// Client Inquiry schema
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  industry: text("industry").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertInquirySchema = createInsertSchema(inquiries).pick({
  firstName: true,
  lastName: true,
  email: true,
  company: true,
  industry: true,
  message: true,
});

// Job Application schema
export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(), 
  position: text("position").notNull(),
  experience: text("experience").notNull(),
  message: text("message"),
  resumePath: text("resume_path"),
  applicationType: text("application_type").default("job"), // 'job' or 'internship'
  education: text("education"),
  university: text("university"),
  graduationYear: text("graduation_year"),
  availabilityDate: text("availability_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertJobApplicationSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  position: z.string().min(1, "Position is required"),
  experience: z.string().min(1, "Experience is required"),
  message: z.string().optional(),
  resumePath: z.string().url("Invalid URL").optional(), // Use resumeLink as resumePath
  applicationType: z.string().default("job"), // Default to 'job'
});

export const jobApplicationWithResumeSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  position: z.string().min(1, "Position is required"),
  experience: z.string().min(1, "Experience is required"),
  message: z.string().optional(),
  resumeLink: z.string().url("Invalid URL").min(1, "Resume link is required"), // Only keep resumeLink
});

// Internship Application schema extends job application
export const internshipApplicationWithResumeSchema = jobApplicationWithResumeSchema.extend({
  applicationType: z.literal("internship").default("internship"),
  education: z.string().min(1, "Education field is required"),
  university: z.string().min(1, "University/College is required"),
  graduationYear: z.string().min(1, "Expected graduation year is required"),
  availabilityDate: z.string().min(1, "Availability date is required"),
});

// Job Listings
export const jobListings = pgTable("job_listings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements").notNull(),
  type: text("type").notNull(), // Full-time, Part-time, Contract, Internship
  location: text("location").notNull(),
  experience: text("experience").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  listingCategory: text("listing_category").default("job"), // 'job' or 'internship'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertJobListingSchema = createInsertSchema(jobListings).pick({
  title: true,
  description: true,
  requirements: true,
  type: true,
  location: true,
  experience: true,
  isActive: true,
  listingCategory: true,
});

// Chat Conversation schema
export const chatConversations = pgTable("chat_conversations", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  userEmail: text("user_email"),
  userName: text("user_name"),
  startedAt: timestamp("started_at").notNull().defaultNow(),
  lastMessageAt: timestamp("last_message_at").notNull().defaultNow(),
  category: text("category"), // 'career', 'service', 'general'
  status: text("status").notNull().default('active'), // 'active', 'closed'
});

export const insertChatConversationSchema = createInsertSchema(chatConversations).pick({
  sessionId: true,
  userEmail: true,
  userName: true,
  category: true,
});

// Chat Message schema
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  conversationId: integer("conversation_id").notNull().references(() => chatConversations.id, { onDelete: 'cascade' }),
  sender: text("sender").notNull(), // 'user' or 'bot'
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  attachmentUrl: text("attachment_url"),
  attachmentType: text("attachment_type"),
  isApplicationRequest: boolean("is_application_request").default(false),
  metadata: jsonb("metadata"), // additional data like position applied for, skills, etc.
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  conversationId: true,
  sender: true,
  content: true,
  attachmentUrl: true,
  attachmentType: true,
  isApplicationRequest: true,
  metadata: true,
});

// Exported types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type JobApplication = typeof jobApplications.$inferSelect;
export type InsertJobApplication = z.infer<typeof insertJobApplicationSchema>;
export type JobApplicationWithResume = z.infer<typeof jobApplicationWithResumeSchema>;
export type InternshipApplicationWithResume = z.infer<typeof internshipApplicationWithResumeSchema>;

export type JobListing = typeof jobListings.$inferSelect;
export type InsertJobListing = z.infer<typeof insertJobListingSchema>;

export type ChatConversation = typeof chatConversations.$inferSelect;
export type InsertChatConversation = z.infer<typeof insertChatConversationSchema>;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
