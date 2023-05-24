import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Payment from "./Payment";
function Submit() {
  const location = useLocation();
  const inputData = location.state?.data;

  return (
    <div>
        <Navbar/>
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
      <br />
      <Payment/>
    </div>
  );
}

export default Submit;