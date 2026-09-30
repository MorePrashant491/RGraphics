const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    description: String,
    image: String,
    startingPrice: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    options: {
      size: [String],
      paper: [String],
      finish: [String],
      corners: [String],
      quantity: [Number],
      turnaround: [String],
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
