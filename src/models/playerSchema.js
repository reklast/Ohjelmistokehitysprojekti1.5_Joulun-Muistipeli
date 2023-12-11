const mongoose = require("mongoose");

const playersSchema = new mongoose.Schema({
  Name: String,
  BestScore: String,
});

module.exports = mongoose.model("PlayerSchema", playersSchema);
