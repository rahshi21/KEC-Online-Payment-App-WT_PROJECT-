//this is file named controller.js

const {Students} = require('./schema');

module.exports.insertstd = async (req, res) => {
    const s = new Students({
        rollno: req.body.rollno,
        name: req.body.name,
        dept: req.body.dept,
        year: Number(req.body.year),
        email: req.body.email,
    });
    const Student = await Students.findOne({rollno:req.body.rollno});
    if(Student)
        return res.send({msg:"Student exists in db"});
    const saved_s = await s.save();
    res.send(saved_s);
}

module.exports.getallstd = async (req,res) => {
    const Student = await Students.find({});
    if(Student.length != 0)
        res.send(Student)
    else 
        res.send({msg: "no Students found!"})
}

module.exports.getstd = async (req,res) => {
    const Student = await Students.findOne({rollno:req.params.rollno});
    if(Student)
        res.send(Student)
    else
        res.send({msg:"Student not found!"});
}

module.exports.deletestd = async (req,res) => {
    const Student = await Students.findOneAndDelete({rollno:req.params.rollno});
    if(Student)
        res.send("Student deleted sucessfully!");
    else
        res.send("Student not exist!");
}


module.exports.updatestd = async (req,res) => {
    const Student = await Students.findOneAndUpdate({rollno:req.params.rollno},{name: req.body.name});
    if(Student)
        res.send("Student updated sucessfully!");
    else
        res.send("Student not exist!");
}

