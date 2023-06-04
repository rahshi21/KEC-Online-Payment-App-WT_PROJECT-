import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Contact.css';
import Navbar from './Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Contact(){
  return (
    <div style={{background:"Linen"}}>
    <>
    <Navbar/>
    <Container className="contact-container text-center mt-5">
      <h1 className="mb-4">Contact Information</h1>
      <Row>
        <Col md={6}>
          <div className="person-card">
            <Image src='https://assets.materialup.com/uploads/e4b80140-d130-434b-bd08-eb71bc34335b/preview.png' height="250px" width="350px"
             roundedCircle className="avatar" />
            <h3>RAHSHITHA K S</h3>
            <div className="person-links">
              <a href="https://github.com/rahshi21" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="mr-3">
                  GITHUB
                </Button>
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFIPuSJEikqhgAAAYhRn1rQ94sHWqb6AqrKAKrvzXVJJkGpH1gjm-AAXVRzNJhpcCFIAf-ynxw2_OT1d1iVK0iVbTLRpOw4gjAGWjUpMeKdFTrrE4sYTxdogQqHuzBEPougE5c=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frahshitha-suresh-72553824b" target="_blank" rel="noopener noreferrer">
                <Button variant="success" size="lg" className="btn btn-primary">
                  LINKEDIN
                </Button>
              </a>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="person-card">
          <Image src='https://assets.materialup.com/uploads/e4b80140-d130-434b-bd08-eb71bc34335b/preview.png' height="250px" width="350px"
             roundedCircle className="avatar" />
           <img src="Razorpay-integration---React\src\image-6.jpg" alt="" />
            <h3>SNEHAVARSHINI S</h3>
            <div className="person-links">
              <a href="https://github.com/Snehavarshini-1007" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="mr-3">
                  GITHUB
                </Button>
              </a>
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHJ-vNZ615nUAAAAYhRoB4gxVtif-OZh7PUJP3e6rfVL9Pn2annz4LMWnPoL7DrhvG2k-2DLFfcShNSvANf_y3BzhQj0S28-_z3ZvXjZH\" target="_blank" rel="noopener noreferrer">
                <Button variant="success" size="lg">
                  LINKEDIN
                </Button>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
    </div>
  );
};

export default Contact;

