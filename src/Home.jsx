import React from "react";
import Navbar from "./Navbar";
//import React,{useState} from "react";
import './button.css'
import ImageSlider from './ImageSlider';
import {Link} from  'react-router-dom'
export default function Home() {
  // useState[amount,setAmount]=useState('');
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
    return (
      <>
      <Navbar/>
      <br />
      {/* <br />
      <input type="text" placeholder="Enter amount" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <br />
      <br />
      <button>SUBMIT</button> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
      <br />
      <div className="button-container">
      <Link to='/register'> <button className="centered-button">MAKE PAYMENT</button></Link> 
      </div>
      </>
    )
  }
  