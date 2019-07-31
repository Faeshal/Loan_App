const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hutangSchema = new Schema({
  nama: {
    type: String,
    required: true,
    uppercase: true
  },
  total: {
    type: Number
  }
});

module.exports = mongoose.model("hutang", hutangSchema);
