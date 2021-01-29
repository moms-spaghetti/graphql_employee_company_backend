const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: String,
  age: Number,
  companyId: String,
});

module.exports = mongoose.model("employees", employeeSchema);
