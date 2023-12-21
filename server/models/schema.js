const mongoose = require("mongoose");

const exchangeSchema = new mongoose.Schema({
  user_input: { type: String, required: true },
  ai_output: { type: String, required: true },
  timestamp: { type: String, required: true },
});

const conversationSchema = new mongoose.Schema({
  session_id: { type: String, unique: true, required: true },
  timestamp_start: { type: String, required: true },
  timestamp_end: { type: String, required: true },
  exchanges: [exchangeSchema],
});

const predictionSchema = new mongoose.Schema({
  conversations: [conversationSchema],
});

const PredictionModel = mongoose.model("Prediction", predictionSchema);

module.exports = PredictionModel;
