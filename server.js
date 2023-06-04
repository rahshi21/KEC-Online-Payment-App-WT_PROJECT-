//this is file named server.js

const express = require('express');
const cors = require('cors');
const {connectdb} = require('./connect')
const controller = require('./controller');
const app = express();
//middleware
app.use(cors());
app.use(express.json());
connectdb()
    .then(()=>console.log("db connected"))
    .catch((err)=>{console.log(err)});
app.post('/api/students_details',controller.insertstd);
app.get('/api/students_details',controller.getallstd);
app.get('/api/students_details/:rollno',controller.getstd);
app.delete('/api/students_details/:rollno',controller.deletestd);
app.put('/api/students_details/:rollno',controller.updatestd);

const port = 1004;
app.listen(port,()=>{
    console.log(`server ready, listening at port ${port}`);
})
