// const mongoose = require('mongoose')
// const studentSchema = new mongoose.Schema({
//     STUDENT_ID : String,
//     Name: String,
//     Tution_payment : Number,
//     Hostel_payment : Number,
//     Transport_payment : Number,
//     Programme : String,
//     Semester : Number
    
// }) ;


// module.exports.studentdetails =mongoose.model("studentdetails",studentSchema);
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  STUDENT_ID: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  },
  EMAIL: {
    type: String,
    required: true,
    unique: true
  },
  PASSWORD: {
    type: String,
    required: true
  },
  Tution_payment: {
    type: Number,
    required: true
  },
  Hostel_payment: {
    type: Number,
    required: true
  },
  Transport_payment: {
    type: Number,
    required: true
  },
  Programme: {
    type: String,
    required: true
  },
  Semester: {
    type: Number,
    required: true
  },
  MobileNumber: {
    type: String,
    required: true
  },
  
});

module.exports.studentdetails = mongoose.model('studentdetails', studentSchema);

// //  paymentInfo: {
//     cardNumber: {
//         type: String,
//         required: true
//       },
//       expirationDate: {
//         type: Date,
//         required: true
//       },
//       cvv: {
//         type: Number,
//         required: true
//       }
//     }