// testConnection.ts
import { MongoClient } from "mongodb";
import "dotenv/config";

const uri = process.env.MONGODB_URI as string;

async function testConnection() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");
    await client.close();
  } catch (error) {
    console.error("Connection error:", error);
  }
}

testConnection();
