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

  joeFeedbackPositive: { type: String, required: true },
  emilyFeedbackPositive: { type: String, required: true },
  adamFeedbackPositive: { type: String, required: true },
  joeFeedbackNegative: { type: String, required: true },
  adamFeedbackNegative: { type: String, required: true },
  emilyFeedbackNegative: { type: String, required: true },

  decision: {
    type: String,
    enum: ["joe", "emily", "adam"],
  },
});

module.exports = mongoose.model("Record", recordSchema);
