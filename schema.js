const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
    STUDENT_ID : String,
    Name: String,
    Tution_payment : Number,
    Hostel_payment : Number,
    Transport_payment : Number,
    Programme : String,
    Semester : Number
    
}) ;


module.exports.paymentdetails =mongoose.model("paymentdetails",paymentSchema);