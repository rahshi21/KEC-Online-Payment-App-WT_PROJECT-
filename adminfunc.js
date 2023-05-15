const {paymentdetails} = require('./schema');
module.exports.deletestudent = async (req,res) => {
    const student = await paymentdetails.findOneAndDelete({STUDENT_ID:req.params.STUDENT_ID});
    if(student)
        res.send("STUDENT deleted sucessfully!");
    else
        res.send("STUDENT not exist!");
}

module.exports.updatestudent = async (req,res) => {
    const student = await paymentdetails.findOneAndUpdate({STUDENT_ID:req.params.STUDENT_ID},{Tution_payment:req.body.Tution_payment});
    if(student)
        res.send("book updated sucessfully!");
    else
        res.send("book not exist!");
} 