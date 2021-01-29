const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: String,
  totalEmployees: Number,
});

module.exports = mongoose.model("companies", companySchema);
