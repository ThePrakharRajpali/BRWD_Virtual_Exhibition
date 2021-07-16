const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Project", projectSchema);
