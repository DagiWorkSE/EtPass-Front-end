import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";


 import logo from '../assets/Logo.png';
            
const Footer = () => {
  return (
    <footer className="footers">
      <div className="container">
       <img src={logo} alt="logo" />
        <div className="row content">
          <div className="col">
           
            <h5 className="footer-heading">Home</h5>
            <ul>
              <li>Service</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="col">
            <h5 className="footer-heading">Address</h5>
            <p>Your Address Goes Here</p>
          </div>
          
          <div className="col">
            <h5 className="footer-heading">Service</h5>
            <ul>
              <li>Passport service</li>
              <li>Visa service</li>
              <li>Nati service</li>
            </ul>
          </div>
          <div className="col">
            <h5 className="footer-heading">Contact us</h5>
            <ul>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;