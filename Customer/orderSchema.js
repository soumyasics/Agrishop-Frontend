const mongoose = require("mongoose");

const cSchema = mongoose.Schema({
  products: {
    type: Array,
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers",
  },
  total: Number,
  date: {
    type: Date,
  },
  isactive: {
    type: Boolean,
    default: true,
  },
 
});

module.exports = mongoose.model("orders", cSchema);
