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
        <div style={{background:"Linen"}}>
      <>
      <Navbar/>
      <br />
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={500} />
      </div>
      <br />
      <div className="button-container">
      <Link to='/display'> <button className="centered-button">MAKE PAYMENT</button></Link> 
      </div>
      </>
      </div>
    )
  }
  