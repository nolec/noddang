import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const User = mongoose.model("User", userSchema);

export default User;
