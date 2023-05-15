const express = require('express');
const {connectdb} = require('./connect');
const app = express();

//middleware
const payment_details= require('./userfunc');
const payment = require('./adminfunc');
const cors = require('cors');
app.use(cors());
app.use(express.json());
connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});

app.post('/api/payment',payment_details.signup);   
app.get('/api/payment/:studentid',payment_details.signin); 
// app.get('/api/books',books_controller.getallbooks);
// app.get('/api/books/:bookid',books_controller.getbook);
app.delete('/api/payment/:STUDENT_ID',payment.deletestudent);
app.put('/api/payment/:STUDENT_ID',payment.updatestudent);

const port = 7000;
app.listen(port, () => {
    console.log(`Listening at post ${port}`)
})

//http://localhost:7000