const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  photos: [
    {
      type: String,
    }
  ],
  title: String,
  writeup: String,
  bio: String,
  twitter: String,
  instagram: String
});

module.exports = mongoose.model("Profile", profileSchema);
