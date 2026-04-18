import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isVerified: { type: Boolean, default: false },
  trustScore: { type: Number, default: 0 },
});

// This "export default" is what the controller is looking for!
export default mongoose.models.User || mongoose.model("User", UserSchema);