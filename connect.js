//this is file named connect.js
const mongoose = require('mongoose');
module.exports.connectdb = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/students_details')
}

