const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  type: String,
  data: Object,
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
