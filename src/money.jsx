import './App.css';
import React,{useState} from 'react';
import { useLocation } from "react-router-dom";
function Money() {
    const location = useLocation();
    const inputData = location.state?.data;
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_xSujTM28YdAtMu",
        key_secret:"cLgBI4C2S0jaEeqHwrlj5goc",
        amount: amount *100,
        currency:"INR",
        name:"SWARAM_KEC",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Rahshitha K S",
          email:"srahshitha@gmail.com",
          contact:"8524066144"
        },
        notes:{
          address:"KEC"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <>
    <div>
      <h2>Entered Student Details</h2>
      {inputData && (
        <div>
          <p>Student ID: {inputData.rollno}</p>
          <p>Student Name: {inputData.name}</p>
          <p>Department: {inputData.dept}</p>
          <p>Year of Study: {inputData.year}</p>
          <p>Email: {inputData.email}</p>
        </div>
      )}
    </div>
    <div className="App">
     <h2>Grab your TICKETS !!!</h2>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
    </div>
    </>
  );
}

export default Money;
