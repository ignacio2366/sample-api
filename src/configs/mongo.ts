import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose, { Schema, Document } from "mongoose";

export const client = new MongoClient(
  `mongodb+srv://markangeloignacio001:pEN5qF4cGae9jVPS@sampledb.fvsobra.mongodb.net/?retryWrites=true&w=majority&appName=SampleDB`,
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

const schemaUsers = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  hobbies: [String],
});

interface IUser extends Document {
  name: string;
  email: string;
  hobbies: string[];
}

// Define schema
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hobbies: { type: [String], required: true },
});

export const User = mongoose.model<IUser>(
  "sampleUser",
  userSchema,
  "User Details"
);

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    await client.close();
    process.exit(1);
  }
}
connectDB().catch(console.dir);

export default connectDB;
