const mongoose = require("mongoose");

const recordSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  joeMarkFizzbuzz: { type: Number, required: true },
  joeMarkTwoSum: { type: Number, required: true },
  joeMarkLps: { type: Number, required: true },
  emilyMarkFizzbuzz: { type: Number, required: true },
  emilyMarkTwoSum: { type: Number, required: true },
  emilyMarkLps: { type: Number, required: true },
  adamMarkFizzbuzz: { type: Number, required: true },
  adamMarkTwoSum: { type: Number, required: true },
  adamMarkLps: { type: Number, required: true },

  joeFeedbackPositive: String,
  emilyFeedbackPositive: String,
  adamFeedbackPositive: String,
  joeFeedbackNegative: String,
  adamFeedbackNegative: String,
  emilyFeedbackNegative: String,

  decision: {
    type: String,
    enum: ["joe", "emily", "adam"],
  },
});

module.exports = mongoose.model("Record", recordSchema);
