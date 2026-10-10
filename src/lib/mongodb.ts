import { MongoClient } from "mongodb";
import dns from "node:dns";

dns.setServers(["8.8.8.8"]);

const uri = process.env.BETTER_AUTH_DB_URL;

if (!uri) {
  throw new Error("MongoDB connection string is missing");
}

const client = new MongoClient(uri);

export const db = client.db();
export default client;