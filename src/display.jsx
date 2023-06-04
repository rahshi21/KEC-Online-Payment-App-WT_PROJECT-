//this a file named 'display.jsx' created using react.js 
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Display() {
  const rollnoRef = useRef("");
  const nameRef = useRef("");
  const deptRef = useRef("");
  const yearRef = useRef("");
  const emailRef = useRef("");

  const [rollno, setrollno] = useState("");
  const [name, setname] = useState("");
  const [dept, setdept] = useState("");
  const [year, setyear] = useState("");
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!rollno || !name || !dept || !year || !email) {
      // Reset the response data and error if any of the input values are empty
      setResponseData(null);
      setError(null);
      return;
    }

    // API endpoint URL
    const apiUrl = "http://localhost:1004/api/students_details";

    // Create the request body
    const requestBody = {
      rollno,
      name,
      dept,
      year,
      email,
    };

    // Define the request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    // Send the POST request to the API endpoint
    fetch(apiUrl, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
        setError(null);
        // Navigate to the new page with the input data as state
        navigate("/money", { state: { data: requestBody } });
      })
      .catch((error) => {
        setError(error.message);
        setResponseData(null);
      });
  }, [rollno, name, dept, year, email, navigate]);

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="mb-1">
        <label className="form-label" htmlFor="rollno">Student ID:</label>
        <input className="form-control" type="text" id="rollno" ref={rollnoRef} />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="name">Student Name:</label>
        <input className="form-control" type="text" id="name" ref={nameRef} />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="dept">dept:</label>
        <input className="form-control" type="text" id="dept" ref={deptRef} />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="year">Year of Study:</label>
        <input className="form-control" type="number" id="year" ref={yearRef} />
      </div>
      <div className="mb-1">
        <label className="form-label" htmlFor="email">Email:</label>
        <input className="form-control" type="email" id="email" ref={emailRef} />
      </div>
      <button className="btn btn-success"
        onClick={() => {
          setrollno(rollnoRef.current.value);
          setname(nameRef.current.value);
          setdept(deptRef.current.value);
          setyear(yearRef.current.value);
          setEmail(emailRef.current.value);
        }}
      >
        Submit
      </button>
      </div>
      {error && <p>Error: {error}</p>}
      {responseData && (
        <div>
          <p>Student ID: {responseData.rollno}</p>
          <p>Student Name: {responseData.name}</p>
          <p>dept: {responseData.dept}</p>
          <p>Year of Study: {responseData.year}</p>
          <p>Email: {responseData.email}</p>
        </div>
      )}
    </>
  );
}

export default Display;
