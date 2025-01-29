const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  bio: {
    type: String,
  },
  points: {
    type: Number,
    default: 0,
  },
  badges: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Badges",
    },
  ],
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
