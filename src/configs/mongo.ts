import { MongoClient, ServerApiVersion } from "mongodb";

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
