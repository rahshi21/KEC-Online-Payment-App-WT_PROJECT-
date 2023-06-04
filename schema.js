//this is file named schema.js

const mongoose  = require('mongoose')
const StudentSchema = new mongoose.Schema({
    rollno: String,
    name: String,
    dept: String,
    year: Number,
    email: String,
});
module.exports.Students = mongoose.model("Students",StudentSchema);