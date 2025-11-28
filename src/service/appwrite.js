import { Client, Databases } from "appwrite";

// Initialize Appwrite Client
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); 

// Database service
export const databases = new Databases(client);

// IDs from .env
export const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
export const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
