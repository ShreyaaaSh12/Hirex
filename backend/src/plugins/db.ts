import fp from "fastify-plugin";
import mongoose from "mongoose";

export default fp(async (fastify) => {
  try {
    // Replace with your actual MongoDB URI in .env
    const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/hirex";
    
    await mongoose.connect(mongoUri);
    fastify.log.info("✅ MongoDB Connected");

    // Make mongoose available globally
    fastify.decorate("mongoose", mongoose);
  } catch (error) {
    fastify.log.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
});