const {paymentdetails} = require('./schema');

module.exports.signup = async (req,res)=>{
    const sr = new paymentdetails({
        STUDENT_ID : req.body.STUDENT_ID,
        Name: req.body.Name,
        Tution_payment : Number(req.body.Tution_payment),
        Hostel_payment : Number(req.body.Hostel_payment),
        Transport_payment : Number(req.body.Transport_payment),
        Programme : req.body.Programme,
        Semester : Number(req.body.Semester),
    })
    const student = await paymentdetails.findOne({STUDENT_ID:req.body.STUDENT_ID});
    if(student)
       return res.send({msg : "STUDENT details is available "});
    const saved_sr = await sr.save();
    res.send(saved_sr);
}
module.exports.signin = async (req,res) => {
    const student = await paymentdetails.findOne({STUDENT_ID:req.params.studentid});
    if(student)
        res.send(student)
    else
        res.send({msg:"student record not found!"});
}
