const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  tags: [
    {
      type: String,
    },
  ],
});

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;
