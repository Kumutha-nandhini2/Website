import pkg from 'pg'; // Import the entire pg package
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from "@shared/schema";
import 'dotenv/config'; // Load .env variables

const { Pool } = pkg; // Destructure Pool from the pg package

console.log("DATABASE_URL:", process.env.DATABASE_URL);
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create a connection pool using the DATABASE_URL
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Initialize the drizzle ORM with the pool and schema
export const db = drizzle(pool, { schema });