import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your details"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your details"],
  },
  email: {
    type: String,
    required: [true, "Please enter your details"],
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.models.User || mongoose.model("User", schema);
